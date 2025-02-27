import { FC } from "react";
import { Icon, Input } from "@/shared/ui";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const TableSearchInput: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Input
      className={className}
      placeholder={t("Common.Input.Search")}
      prefix={<Icon name="search" color="text-gray-100" />}
    />
  );
};
