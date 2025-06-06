import { useTranslation } from "react-i18next";
import { Status } from "@/shared/types";

export type StatusCode = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const getStatusLabel = (statusCode: StatusCode): string => {
  const { t } = useTranslation();
  const statusMap: Record<Status, string> = {
    [Status.Success]: t("Common.Status.Success"),
    [Status.InProgress]: t("Common.Status.InProgress"),
    [Status.Refund]: t("Common.Status.Refund"),
    [Status.Rejected]: t("Common.Status.Rejected"),

    [Status.Active]: t("Common.Status.Active"),
    [Status.Inactive]: t("Common.Status.Inactive"),
  };

  return statusMap[statusCode as Status] || t("Common.Status.Unknown");
};
