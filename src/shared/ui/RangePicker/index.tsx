import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DatePicker as AntDatePicker } from "antd";
import { Icon } from "@/shared/ui";
import { cn } from "@/shared/helpers";
import { API_DATE_FORMAT, DATE_FORMAT } from "@/shared/constants";
import dayjs from "dayjs";

interface Props {
  className?: string;
  from?: string;
  to?: string;
}

export const RangePicker: FC<Props> = ({
  className,
  from = "created_at_from",
  to = "created_at_to",
  ...rest
}) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <AntDatePicker.RangePicker
      format={DATE_FORMAT}
      size="small"
      className={cn(
        "!h-10 w-full !bg-[#DFEEFF] !px-3 !font-medium [&_.ant-picker-range-separator]:!pl-1.5",
        className,
      )}
      variant="filled"
      suffixIcon={<Icon name="time" width={16} color="text-blue-100" />}
      separator="-"
      value={[
        searchParams.get(from)
          ? dayjs(searchParams.get(from), API_DATE_FORMAT)
          : null,
        searchParams.get(to)
          ? dayjs(searchParams.get(to), API_DATE_FORMAT)
          : null,
      ]}
      placeholder={[
        t("Common.Datepicker.StartDate"),
        t("Common.Datepicker.EndDate"),
      ]}
      onChange={(value) => {
        const params = new URLSearchParams(searchParams);
        if (!value) {
          params.delete(from);
          params.delete(to);
        } else {
          params.set(from, dayjs(value[0]).format(API_DATE_FORMAT));
          params.set(to, dayjs(value[1]).format(API_DATE_FORMAT));
        }
        setSearchParams(params);
      }}
      {...rest}
    />
  );
};
