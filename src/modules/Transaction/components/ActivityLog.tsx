import { FC } from "react";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
}

export const ActivityLog: FC<Props> = ({ className }) => {
  return <div className={cn(className)}></div>;
};
