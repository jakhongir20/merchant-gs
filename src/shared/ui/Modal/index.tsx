import { Form, FormInstance, Modal as ModalUI, ModalProps } from "antd";
import { FC, ReactNode } from "react";

import { cn } from "@/shared/helpers";
import { Button, CCrossIcon } from "@/shared/ui";
import { useTranslation } from "react-i18next";

interface Props extends ModalProps {
  className?: string;
  form?: FormInstance;
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  loading?: boolean;
  open: boolean;
  size?: "small" | "middle";
  onSave?: () => void;
  onCancel: () => void;
  saveBtnText?: string;
  cancelBtnText?: string;
  children: ReactNode;
  centered?: boolean;
  manualWith?: number;
  disableSave?: boolean;
}

type ModalWidth = 330 | 460;

export const Modal: FC<Props> = ({
  title,
  subtitle,
  open = false,
  loading,
  size = "middle",
  onSave,
  onCancel,
  saveBtnText = "save",
  cancelBtnText,
  centered = true,
  disableSave = false,
  manualWith = 0,
  children,
  form,
  ...rest
}: Props) => {
  const width: ModalWidth =
    size === "small" ? 330 : size === "middle" ? 460 : 460;

  const { t } = useTranslation();

  return (
    <ModalUI
      destroyOnClose={true}
      title={
        <div className="flex items-start justify-between border-b border-[#EAECF0] p-30px pb-6">
          <div>
            <div className="text-xl font-semibold text-gray-500">{title}</div>
            <div className="text-sm font-medium text-gray-100">{subtitle}</div>
          </div>
          <CCrossIcon onClick={onCancel} />
        </div>
      }
      styles={{
        body: {
          padding: 30,
          overflowY: "auto",
          maxHeight: "80svh",
        },
        header: {
          padding: 0,
          borderBottom: "none",
          marginBottom: 0,
        },
        footer: {
          padding: 30,
          marginTop: 0,
        },
        content: {
          padding: 0,
          boxShadow:
            "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
          borderRadius: 12,
        },
      }}
      open={open}
      width={manualWith ? manualWith : width}
      footer={
        <div className={cn("flex items-center justify-end gap-3")}>
          <Button
            type="link"
            className={"px-4 text-gray-600"}
            disabled={loading}
            onClick={onCancel}
          >
            {cancelBtnText ?? t("Common.Button.Cancel")}
          </Button>
          <Button
            type="primary"
            disabled={loading || disableSave}
            loading={loading}
            onClick={onSave}
            className={"px-4"}
          >
            {saveBtnText}
          </Button>
        </div>
      }
      closable={false}
      maskClosable={false}
      // afterClose={() => {}}
      centered={centered}
      {...rest}
    >
      {form ? (
        <Form form={form} layout="vertical">
          {children}
        </Form>
      ) : (
        children
      )}
    </ModalUI>
  );
};
