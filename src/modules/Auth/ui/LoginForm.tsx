import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Form, Input as AntDInput } from "antd";
import { useTranslation } from "react-i18next";
import { Button, Input } from "@/shared/ui";
import { cn } from "@/shared/helpers";
import { useToast } from "@/shared/hooks";
import { LoginFormData, useLogin } from "@/modules/Auth/model";
import { deleteCookie, setCookie } from "@/shared/lib/services";

interface Props {
  className?: string;
}

export const LoginForm: FC<Props> = ({ className }) => {
  const [form] = Form.useForm<LoginFormData>();
  const { t } = useTranslation();

  const { toast } = useToast();
  const navigate = useNavigate();

  const { mutate, isPending: isLoading } = useLogin({
    onSuccess: (response) => {
      const { token, id } = response;
      setCookie("__token", token);
      setCookie("__user", String(id));
      toast(t("Auth.Login.Success"), "success");
      navigate("/crm/partners", { replace: true });
    },
    onError: () => {
      toast(t("Auth.Login.Error"), "error");
    },
  });

  const handleSubmit = (values: LoginFormData) => {
    deleteCookie("__token");
    const { username, password, remember } = values;
    mutate({ username, password, remember });
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      initialValues={{ remember: false, username: "staff1", password: "1" }}
      className={cn(className, "flex w-2/3 flex-col gap-2")}
      layout="vertical"
    >
      <Form.Item
        name="phone"
        label={t("Auth.Login.Phone")}
        rules={[{ required: true, whitespace: true }]}
      >
        <Input className="h-12 !w-full" placeholder="" />
      </Form.Item>
      <Form.Item
        name="password"
        label={t("Auth.Login.Password")}
        rules={[{ required: true, whitespace: true }]}
      >
        <AntDInput.Password placeholder="" className="h-12 w-full" />
      </Form.Item>
      <Flex justify="space-between" align="baseline" className="">
        <a className="underline">Забыли пароль?</a>
        <Form.Item className="">
          <Button
            type="primary"
            className="!w-full !px-5"
            htmlType="submit"
            loading={isLoading}
            disabled={isLoading}
          >
            {t("Auth.Login.Submit")}
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};
