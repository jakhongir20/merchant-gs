import { FC } from "react";
import { cn } from "@/shared/helpers";
import { CStatus, Drawer, Tabs } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { DrawerHeaderActions } from "@/modules/Transaction/components";
import { Divider } from "antd";

/* eslint-disable @typescript-eslint/no-unused-vars */

interface Props {
  className?: string;
  open: boolean;
  id: string | undefined;
  setOpen: (open: boolean) => void;
}

export const TransactionDetailsDrawer: FC<Props> = ({
  className,
  open,
  setOpen,
  id,
}) => {
  const { t } = useTranslation();
  // const { data: transaction, isPending: isLoading } = useTransactionDetails(
  //   id as string,

  // );   n

  const handleClose = () => {
    setOpen(false);
  };

  const tabs = [
    {
      key: "1",
      label: "Детали транзакции",
      children: (
        <div className="rounded-2xl bg-white p-5">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">
                Вид транзакции
              </div>
              <div className="text-sm font-medium text-gray-500">Оплата</div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">
                ID платежа
              </div>
              <div className="text-sm font-medium text-gray-500">
                a1b2c3d4e5f6g7h8i9j0k1l2m3n
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">Компания</div>
              <div className="text-sm font-medium text-gray-500">
                OOO “Anglesey Food”
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">Касса</div>
              <div className="text-sm font-medium text-gray-500">
                Корзинка Миробод
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">
                Дата создания
              </div>
              <div className="text-sm font-medium text-gray-500">
                23.03.2024 в 13:56
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">
                Дата оплаты
              </div>
              <div className="text-sm font-medium text-gray-500">
                23.03.2024 в 13:59
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">Платформа</div>
              <div className="text-sm font-medium text-gray-500">Android</div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">
                Фискальный признак
              </div>
              <div className="text-sm font-medium text-gray-500">
                8298272386758
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">
                Номер фискального чека
              </div>
              <div className="text-sm font-medium text-gray-500">38756789</div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100"></div>
              <div className="cursor-pointer text-sm font-semibold text-blue-300">
                Детали фискального чека
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">RRN</div>
              <div className="text-sm font-medium text-gray-500">38756789</div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-sm font-medium text-gray-100">Карта</div>
              <div className="text-sm font-medium text-gray-500">**** 9850</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium text-gray-100">Описание</div>
              <div className="text-sm font-medium text-gray-500">
                Покупка продуктов питания
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex justify-between gap-2">
            <div className="text-base font-bold text-gray-100">Сумма</div>
            <div className="flex flex-col items-end gap-1.5 text-base font-bold text-gray-500">
              <span>969 240.44 UZS</span>
              <CStatus value={1} size="small" />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "История действий",
      children: "ddfs",
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
