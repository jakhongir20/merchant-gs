import { useTranslation } from "react-i18next";

export function useAppConstants() {
  const { t } = useTranslation();

  const PARTNER_TYPES = [
    { value: 1, label: t("common.status.customer") },
    { value: 2, label: t("common.status.supplier") },
  ];

  const PRODUCT_TYPES = [
    { value: 1, label: t("common.status.purchase") },
    { value: 2, label: t("common.status.production") },
    { value: 3, label: t("common.status.sale") },
  ];

  return { PARTNER_TYPES, PRODUCT_TYPES };
}
