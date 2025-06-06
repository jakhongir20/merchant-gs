import { FC } from "react";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex h-[58px] items-center justify-between bg-white px-30px text-sm",
        className,
      )}
    >
      <div className={"font-medium text-gray-100"}>
        2024 © Global Solutions
      </div>
      <div className={"font-medium text-gray-100"}>Контакты</div>
    </div>
  );
};
