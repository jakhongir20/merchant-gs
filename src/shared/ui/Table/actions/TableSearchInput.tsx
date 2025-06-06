import { FC } from "react";
import { CSearchInput } from "@/shared/ui";

interface Props {
  className?: string;
}

export const TableSearchInput: FC<Props> = ({ className }) => {
  return <CSearchInput className={className} />;
};
