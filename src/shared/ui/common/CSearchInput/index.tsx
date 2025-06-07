import { FC } from "react";
import { Icon, Input } from "@/shared/ui";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const CSearchInput: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Input
      width={300}
      variant={"filled"}
      className={className}
      placeholder={t("Common.Input.Search")}
      prefix={<Icon name="search" width={16} color="text-gray-100" />}
    />
  );
};
