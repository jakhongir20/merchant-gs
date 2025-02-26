import { FC } from "react";
import { Form, Input as AntDInput } from "antd";
import { Button, Checkbox, Input } from "@/shared/ui";
import { Trans, useTranslation } from "react-i18next";
import { cn } from "@/shared/helpers";
import { useLogin } from "@/modules/Auth/login/model/useLogin";
import { useToast } from "@/shared/hooks";
import { useNavigate } from "react-router-dom";
import { LoginFormData } from "@/modules/Auth/login/model";
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
      toast(t("Auth.login.success"), "success");
      navigate("/crm/partners", { replace: true });
    },
    onError: () => {
      toast(t("Auth.login.error"), "error");
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
      className={cn(className, "flex flex-col gap-4 p-4 pt-5")}
      layout="vertical"
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, whitespace: true }]}
      >
        <Input placeholder={t("Auth.login.form.placeholder.username")} />
      </Form.Item>
      <Form.Item
        name="password"
        label={t("Auth.login.form.password")}
        rules={[{ required: true, whitespace: true }]}
      >
        <AntDInput.Password
          placeholder={t("Auth.login.form.placeholder.password")}
          className="min-h-10"
        />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" className="mb-0">
        <Checkbox label={t("Auth.login.form.rememberMe")} />
      </Form.Item>
      <p className="-mt-3 text-sm">
        <Trans
          i18nKey="auth.login.form.rememberMeInfo"
          components={{
            a: <a href="google.com" target="_blank" className="text-violet" />,
          }}
        />
      </p>
      <Form.Item className="mt-2">
        <Button
          type="primary"
          className="!w-full"
          htmlType="submit"
          loading={isLoading}
          disabled={isLoading}
        >
          {!isLoading && t("Auth.login.submit")}
        </Button>
      </Form.Item>
    </Form>
  );
};
