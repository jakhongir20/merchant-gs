import { useTranslation } from "react-i18next";
import { Period } from "@/shared/types";

export function useAppConstants() {
  const { t } = useTranslation();

  const PERIODS: Period[] = [
    { label: t("Common.Period.Day"), value: "day" },
    { label: t("Common.Period.Week"), value: "week" },
    { label: t("Common.Period.Month"), value: "month" },
    { label: t("Common.Period.Year"), value: "year" },
  ];

  return { PERIODS };
}
