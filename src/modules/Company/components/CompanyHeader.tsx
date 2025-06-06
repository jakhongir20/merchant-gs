import { FC, useState } from "react";
import { cn } from "@/shared/helpers";
import { Button, CSearchInput, Icon } from "@/shared/ui";
import { useScreen } from "@/shared/hooks";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const CompanyHeader: FC<Props> = ({ className }) => {
  const isLargeScreen = useScreen("lg");
  const { t } = useTranslation();
  const handleClick = () => {};

  const [isRowView, setRowView] = useState(false);
  const VIEWS = [
    { id: "grid", row: false },
    { id: "row", row: true },
  ];

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <Button
        size={isLargeScreen ? "middle" : "small"}
        type={"primary"}
        className={""}
        icon={<Icon name={"add-curly"} className={"text-white"} />}
        onClick={handleClick}
      >
        {t("Common.Button.AddCompany")}
      </Button>
      <div className={"flex gap-4"}>
        <CSearchInput className={"input-bg-white bg-white hover:bg-white"} />
        <div className="flex items-center gap-1.5 rounded-md bg-white p-1">
          {VIEWS.map(({ id, row }) => {
            const active = isRowView === row;
            return (
              <button
                key={id}
                onClick={() => setRowView(row)}
                className={cn(
                  "group cursor-pointer rounded p-1.5 transition hover:bg-blue-200",
                  active ? "bg-blue-200" : "bg-white",
                )}
              >
                <Icon
                  name={id}
                  width={18}
                  className="transition"
                  color={active ? "text-blue-100" : "text-gray"}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
