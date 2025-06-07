import { Modal as ModalUI } from "antd";
import { FC } from "react";

import { cn } from "@/shared/helpers";
import { Button, Icon } from "@/shared/ui";
import { useTranslation } from "react-i18next";

type Status = "success" | "error" | "warning" | "info";

interface Props {
  type: Status;
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export const StatusModal: FC<Props> = ({
  type,
  open,
  title,
  message,
  onClose,
}) => {
  const { t } = useTranslation();
  const config = {
    success: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M23.9833 0.333496H10.0166C4.66863 0.333496 0.333252 4.66887 0.333252 10.0168V23.9835C0.333252 29.3315 4.66863 33.6668 10.0166 33.6668H23.9833C29.3312 33.6668 33.6666 29.3315 33.6666 23.9835V10.0168C33.6666 4.66887 29.3312 0.333496 23.9833 0.333496Z"
            fill="#50CD89"
          />
          <path
            d="M16.5167 23.1835L26.5166 13.1835C26.672 13.0281 26.7953 12.8436 26.8794 12.6406C26.9635 12.4375 27.0068 12.2199 27.0068 12.0001C27.0068 11.7804 26.9635 11.5628 26.8794 11.3597C26.7953 11.1567 26.672 10.9722 26.5166 10.8168C26.3612 10.6614 26.1768 10.5381 25.9737 10.454C25.7707 10.3699 25.5531 10.3267 25.3333 10.3267C25.1136 10.3267 24.8959 10.3699 24.6929 10.454C24.4899 10.5381 24.3054 10.6614 24.15 10.8168L15.3333 19.6501L9.84998 14.1501C9.53614 13.8363 9.11049 13.66 8.66665 13.66C8.22281 13.66 7.79716 13.8363 7.48332 14.1501C7.16948 14.464 6.99316 14.8896 6.99316 15.3335C6.99316 15.7773 7.16948 16.203 7.48332 16.5168L14.15 23.1835C14.3049 23.3397 14.4893 23.4637 14.6924 23.5483C14.8955 23.6329 15.1133 23.6765 15.3333 23.6765C15.5533 23.6765 15.7712 23.6329 15.9743 23.5483C16.1774 23.4637 16.3617 23.3397 16.5167 23.1835V23.1835Z"
            fill="#50CD89"
          />
        </svg>
      ),
      color: "green",
    },
    error: { icon: <Icon name={"check"} />, color: "red" },
    warning: { icon: <Icon name={"check"} />, color: "orange" },
    info: { icon: <Icon name={"check"} />, color: "blue" },
  }[type];

  console.log(config.color);

  return (
    <ModalUI
      destroyOnClose={true}
      title={
        <div className="p-30px pb-6 text-center">
          <div
            className={
              "mx-auto mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-green-200 p-[14px]"
            }
          >
            {config.icon}
          </div>
          <div className="mb-2 text-xl font-semibold text-gray-500">
            {title}
          </div>
          <div className="text-sm font-normal text-gray-100">{message}</div>
        </div>
      }
      styles={{
        body: {
          display: "none",
        },
        header: {
          padding: 0,
          borderBottom: "none",
          marginBottom: 0,
        },
        footer: {
          padding: "6px 30px 30px 30px",
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
      width={330}
      footer={
        <div className={cn("flex items-center justify-center")}>
          <Button type="primary" onClick={onClose} className={"px-5"}>
            {t("Common.Button.Close")}
          </Button>
        </div>
      }
      closable={false}
      maskClosable={false}
      centered
    />
  );
};
