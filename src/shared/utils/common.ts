import { useTranslation } from "react-i18next";
import { Status } from "@/shared/types";

export const getStatusLabel = (statusCode: number): string => {
  const { t } = useTranslation();
  const statusMap: Record<Status, string> = {
    [Status.Success]: t("Common.Status.Success"),
    [Status.InProgress]: t("Common.Status.InProgress"),
    [Status.Refund]: t("Common.Status.Refund"),
    [Status.Rejected]: t("Common.Status.Rejected"),
  };

  return statusMap[statusCode as Status] || t("Common.Status.Unknown");
};
