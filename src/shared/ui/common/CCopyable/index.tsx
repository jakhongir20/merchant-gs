import { FC, useState } from "react";
import { Icon } from "@/shared/ui";
import { cn } from "@/shared/helpers";
import { Timeout } from "react-number-format/types/types";

interface Props {
  className?: string;
  value: string | number;
}

export const CCopyable: FC<Props> = ({ className, value }) => {
  const [copied, setCopied] = useState(false);
  const [timeoutId, setTimeoutId] = useState<Timeout | null>(null);

  const handleCopy = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setCopied(false);
    }
    navigator.clipboard.writeText(String(value));
    setCopied(true);
    const newTimeoutId = setTimeout(() => setCopied(false), 600);
    setTimeoutId(newTimeoutId);
  };

  return (
    <div className={cn("cursor-pointer", className)} onClick={handleCopy}>
      <Icon
        name={!copied ? "copy" : "copied"}
        color={!copied ? "text-gray" : "text-blue-100"}
        width={20}
      />
    </div>
  );
};
