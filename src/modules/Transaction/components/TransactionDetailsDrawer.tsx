import { FC } from "react";
import { cn } from "@/shared/helpers";
import { Drawer, Icon } from "@/shared/ui";
import { useTranslation } from "react-i18next";

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
  // );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      header={
        <div className="flex items-center gap-3">
          <Icon name="home" color="text-gray" />
          <Icon name="cross-rounded" color="text-gray" />
        </div>
      }
      className={cn(className)}
      open={open}
      onClose={handleClose}
    >
      <div className="flex flex-col gap-4 p-4">
        <div className="group flex items-center gap-4">
          <Icon
            name="arrows"
            color="text-gray-500"
            className="cross-icon group-hover:!text-gray-200"
          />
          <p className="text-lg font-medium">{t("common.button.close")}</p>
        </div>
      </div>
    </Drawer>
  );
};
