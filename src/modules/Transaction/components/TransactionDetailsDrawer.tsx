import { FC } from "react";
import { cn, formatAmount } from "@/shared/helpers";
import {
  Alert,
  Button,
  CCardNumber,
  CIndicator,
  CStatus,
  Divider,
  DottedTag,
  Drawer,
  Icon,
  Tabs,
} from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { DrawerHeaderActions } from "@/modules/Transaction/components";
import { PaymentType } from "@/shared/types";
import TextArea from "antd/es/input/TextArea";

/* eslint-disable @typescript-eslint/no-unused-vars */

interface Props {
  className?: string;
  open: boolean;
  id: string | undefined;
  setOpen: (open: boolean) => void;
}

const infoItems = [
  {
    label: "Вид транзакции",
    icon: <CIndicator status="in" size="small" />,
    value: "Оплата",
  },
  {
    label: "ID платежа",
    value: "a1b2c3d4e5f6g7h8i9j0k1l2m3n",
  },
  {
    label: "Компания",
    image: "/test-brand.svg",
    value: "OOO “Anglesey Food”",
  },
  {
    label: "Касса",
    image: "/test-brand.svg",
    value: "Корзинка Миробод",
  },
  {
    label: "Дата создания",
    value: "23.03.2024 в 13:56",
  },
  {
    label: "Дата оплаты",
    value: "23.03.2024 в 13:59",
  },
  {
    label: "Платформа",
    value: "Android",
  },
  {
    label: "Фискальный признак",
    value: "8298272386758",
  },
  {
    label: "Номер фискального чека",
    value: "38756789",
  },
  {
    // no label, link row
    link: "Детали фискального чека",
  },
  {
    label: "RRN",
    value: "38756789",
  },
  {
    label: "Карта",
    value: "860051699850",
    type: "card",
    cardType: "uzcard",
  },
  {
    label: "Описание",
    value: "Покупка продуктов питания",
    multiline: true, // display label above the text
  },
];

const actionsItems = [
  {
    label: "ID платежа",
    value: "a1b2c3d4e5f6g7h8i9j0k1l2m3n",
  },
  {
    label: "Дата создания",
    value: "23.03.2024 в 13:56",
  },
  {
    label: "Дата оплаты",
    value: "23.03.2024 в 13:59",
  },
];

export const TransactionDetailsDrawer: FC<Props> = ({
  className,
  open,
  setOpen,
  id,
}) => {
  const { t } = useTranslation();
  // const { data: transaction, isPending: isLoading } = useTransactionDetails(
  //   id as string,
  // );

  const handleClose = () => {
    setOpen(false);
  };

  const tabs = [
    {
      key: "1",
      label: "Детали транзакции",
      children: (
        <div>
          <div className="rounded-2xl bg-white p-5">
            <Alert
              className="mb-5"
              type="info"
              message={
                "Идет процесс проведения транзакции на стороне поставщика"
              }
            />
            <Alert
              className="mb-5"
              type="warning"
              message={
                "Платеж не возможно провести. Недостаточно средств на карте."
              }
            />
            <div className="flex flex-col gap-4">
              {infoItems.map((item, idx) => {
                if (item.link) {
                  return (
                    <div key={idx} className="flex justify-between gap-2">
                      <div className="text-sm font-medium text-gray-100" />
                      <div className="cursor-pointer text-sm font-semibold text-blue-300">
                        {item.link}
                      </div>
                    </div>
                  );
                }

                if (item.multiline) {
                  return (
                    <div key={idx} className="flex flex-col gap-1">
                      <div className="text-sm font-medium text-gray-100">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {item.value}
                      </div>
                    </div>
                  );
                }

                if (item.type === "card") {
                  return (
                    <div key={idx} className="flex justify-between gap-2">
                      <div className="text-sm font-medium text-gray-100">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        <CCardNumber
                          key={idx}
                          type={item.cardType as PaymentType}
                          number={item.value}
                        />
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={idx} className="flex justify-between gap-2">
                    <div className="text-sm font-medium text-gray-100">
                      {item.label}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                      {item.icon && item.icon}
                      {item.image && (
                        <img src={item.image} alt="logo" className="h-5 w-5" />
                      )}
                      {item.value === "Android" && (
                        <img
                          src={"/svg/device/android.svg"}
                          alt="logo"
                          className="h-6 w-6"
                        />
                      )}
                      <span>{item.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <Divider />
            <div className="flex justify-between gap-2">
              <div className="text-base font-bold text-gray-100">Сумма</div>
              <div className="flex flex-col items-end gap-1.5 text-base font-bold text-gray-500">
                <span>969 240.44 UZS</span>
                <CStatus value={1} size="small" />
              </div>
            </div>
            <Divider />
            <div className="flex gap-2.5">
              <Button color="danger" icon={<Icon name="decline" />}>
                Отменить транзакцию
              </Button>
              <Button color="default" icon={<Icon name="reverse" />}>
                Частичный возрат
              </Button>
            </div>
          </div>
          <br />
          <div className="rounded-2xl border border-red-100 bg-white p-5">
            <div className="mb-3 text-base font-medium text-gray-500">
              Укажите причину
            </div>
            <TextArea rows={4} placeholder="Введите комментарий" />
            <Divider orientation="center" size="small">
              <span className="text-gray-100">или выберите</span>
            </Divider>
            <div className="flex flex-wrap gap-2">
              <DottedTag>Товара нет в наличии</DottedTag>
              <DottedTag>Ошибка в сумме транзакции</DottedTag>
              <DottedTag>Некорректные данные покупателя</DottedTag>
            </div>
            <div className="mt-5 flex justify-end gap-2.5">
              <Button color="default">Не отменять</Button>
              <Button color="default" disabled>
                Отменить транзакцию
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "История действий",
      children: (
        <div className="rounded-2xl bg-white p-5">
          <div className={"flex items-center justify-between"}>
            <div className={"flex items-center gap-4"}>
              <CIndicator status={"in"} />
              <div className="flex flex-col gap-1.5">
                <div className="text-base font-medium text-gray-1100">
                  Оплата
                </div>
                <div className="text-sm font-medium text-gray-700">Полный</div>
              </div>
            </div>
            <div className={"flex flex-col items-end gap-2.5"}>
              <div className={cn("font-semibold text-black", className)}>
                {formatAmount(969240.44)} UZS
              </div>
              <CStatus value={1} size="small" />
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            {actionsItems.map((item, idx) => {
              if (item.link) {
                return (
                  <div key={idx} className="flex justify-between gap-2">
                    <div className="text-sm font-medium text-gray-100" />
                    <div className="cursor-pointer text-sm font-semibold text-blue-300">
                      {item.link}
                    </div>
                  </div>
                );
              }

              if (item.multiline) {
                return (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="text-sm font-medium text-gray-100">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {item.value}
                    </div>
                  </div>
                );
              }

              if (item.type === "card") {
                return (
                  <div key={idx} className="flex justify-between gap-2">
                    <div className="text-sm font-medium text-gray-100">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      <CCardNumber
                        key={idx}
                        type={item.cardType as PaymentType}
                        number={item.value}
                      />
                    </div>
                  </div>
                );
              }

              return (
                <div key={idx} className="flex justify-between gap-2">
                  <div className="text-sm font-medium text-gray-100">
                    {item.label}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    {item.icon && item.icon}
                    {item.image && (
                      <img src={item.image} alt="logo" className="h-5 w-5" />
                    )}
                    {item.value === "Android" && (
                      <img
                        src={"/svg/device/android.svg"}
                        alt="logo"
                        className="h-6 w-6"
                      />
                    )}
                    <span>{item.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
  ];

  return (
    <Drawer
      header={<DrawerHeaderActions />}
      className={cn(className)}
      open={open}
      onClose={handleClose}
    >
      <Tabs items={tabs} activeTabKey={"1"} />
    </Drawer>
  );
};
