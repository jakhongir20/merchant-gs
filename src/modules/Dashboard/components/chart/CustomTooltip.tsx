import { FC } from "react";

interface Props {
  active?: boolean;
  payload?: { value: number | undefined }[];
  label?: string;
}

export const CustomTooltip: FC<Props> = ({ payload, label }) => {
  return (
    <div className="min-w-[150px] rounded-lg border border-gray-300 bg-white drop-shadow-[0px_3px_4px_rgba(0,0,0,0.03)]">
      <p className="border-b border-gray-300 px-3 py-2.5 text-sm font-medium text-gray-500">
        {label}
      </p>
      <div className="flex flex-col px-3 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-green-100"></span>
          <p className="text-sm font-medium text-gray">Успешные:</p>
        </div>
        <p className="font-medium text-black">{payload?.[0]?.value} млн UZS</p>
      </div>
    </div>
  );
};
