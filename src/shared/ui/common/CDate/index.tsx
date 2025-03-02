import { FC } from "react";
import dayjs from "dayjs";
import { cn } from "@/shared/helpers";
import { DATE_FORMAT, TIME_FORMAT } from "@/shared/constants";

interface Props {
  className?: string;
  subValue?: Date;
  value: Date;
}

export const CDate: FC<Props> = ({ className, value, subValue }) => {
  return (
    <div className={cn("", className)}>
      <div className="leading-20 text-sm font-normal text-gray-1100">
        {dayjs(value).format(DATE_FORMAT)}
      </div>
      {subValue && (
        <div className="text-sm font-normal text-gray-700">
          {dayjs(subValue).format(TIME_FORMAT)}
        </div>
      )}
    </div>
  );
};
