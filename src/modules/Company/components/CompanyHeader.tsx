import { FC, useState } from "react";
import { cn } from "@/shared/helpers";
import {
  Alert,
  Button,
  CSearchInput,
  Icon,
  Input,
  InputNumber,
  Modal,
  StatusModal,
} from "@/shared/ui";
import { useScreen } from "@/shared/hooks";
import { useTranslation } from "react-i18next";
import { IconType } from "@/shared/types";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";

interface Props {
  className?: string;
}

export const CompanyHeader: FC<Props> = ({ className }) => {
  const isLargeScreen = useScreen("lg");
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleSave = () => {
    setOpen(false);
    setSuccessModal(true);
  };

  const [isRowView, setRowView] = useState(false);
  const VIEWS: { id: IconType; row: boolean }[] = [
    { id: "grid", row: false },
    { id: "row", row: true },
  ];

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <StatusModal
        open={successModal}
        type="success"
        title="Ваша заявка отправлена"
        message="В случае одобрения вашей заявки, соответствующее уведомление придет вам на электронную почту"
        onClose={() => setSuccessModal(false)}
      />
      <Modal
        open={open}
        title={"Добавить компанию"}
        subtitle={"Заявка на добавление компании"}
        saveBtnText={t("Common.Button.SubmitRequest")}
        onCancel={handleCancel}
        onSave={handleSave}
      >
        <Form form={form} layout={"vertical"}>
          <div className={"mb-6"}>
            <Form.Item
              required
              label="ИНН"
              rules={[{ required: true, message: "Введите ИНН" }]}
              validateStatus="success"
              className={"mb-2.5"}
            >
              <InputNumber
                id="success"
                defaultSuffix
                suffixElement={
                  <Icon
                    name={"check-small"}
                    width={12}
                    className={"text-green-100"}
                  />
                }
                placeholder={"123 456 789"}
              />
            </Form.Item>
            <Alert
              className=""
              type="info"
              typeColor={"success"}
              message={
                "Компания с таким ИНН уже добавлена, можно запросить доступ на привязку к вашему аккаунту"
              }
            />
          </div>
          <Form.Item
            required
            label="Название компании"
            rules={[{ required: true, message: "Введите название" }]}
          >
            <Input placeholder={"Введите название"} />
          </Form.Item>
          <Form.Item label="Сообщение">
            <TextArea rows={3.5} placeholder={"Введите сообщение"} />
          </Form.Item>
        </Form>
      </Modal>
      <Button
        size={isLargeScreen ? "middle" : "small"}
        type={"primary"}
        className={"px-4"}
        icon={<Icon name={"add-curly"} className={"text-white"} />}
        onClick={handleClick}
      >
        {t("Common.Button.AddCompany")}
      </Button>
      <div className={"flex gap-4"}>
        <CSearchInput className={"input-bg-white bg-white hover:bg-white"} />
        <div className="flex items-center gap-1.5 rounded-md bg-white p-1">
          {VIEWS.map(({ id, row }) => {
            const active = isRowView === row;
            return (
              <button
                key={id}
                onClick={() => !row && setRowView(row)}
                className={cn(
                  "group cursor-pointer rounded p-1.5 transition",
                  active ? "bg-blue-200" : "bg-white",
                  row ? "cursor-default" : "hover:bg-blue-200",
                )}
              >
                <Icon
                  name={id}
                  width={18}
                  className="transition"
                  color={active ? "text-blue-100" : "text-gray"}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
