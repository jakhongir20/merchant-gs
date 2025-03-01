import { FC } from "react";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
  amount: number;
  status: "success" | "pending" | "refund" | "rejected";
}

// const STATUS_STYLES = {
//   success: { label: "✅ Успешно", color: "#E6F7E6", textColor: "#4CAF50" },
//   pending: { label: "⏳ В обработке", color: "#FFF3CD", textColor: "#856404" },
//   refund: { label: "↩️ Возврат", color: "#EDEFF3", textColor: "#5A6270" },
//   rejected: { label: "❌ Отклонен", color: "#F8D7DA", textColor: "#D32F2F" },
// };

const formatAmount = (amount: number | string): string => {
  if (typeof amount === "string") {
    amount = parseFloat(amount.replace(/\s/g, "")); // Remove spaces and convert to number
  }

  if (isNaN(amount)) return "Invalid"; // Handle invalid input

  // Format with spaces (ru-RU locale)
  const formatted = new Intl.NumberFormat("ru-RU").format(amount);

  // Convert number to string for checking decimals
  const amountStr = amount.toString();

  // Keep decimals like ".90" or ".44"
  if (amountStr.includes(".90") || amountStr.includes(".44")) {
    return formatted;
  }

  // Remove unnecessary trailing zeros
  return formatted.replace(/(\s?0+)$/, "");
};

export const CTablePrice: FC<Props> = ({ className, amount, status }) => {
  let formattedAmount = formatAmount(amount);
  // const statusInfo = STATUS_STYLES[status];

  switch (status) {
    case "success":
      formattedAmount = `+${formattedAmount}`;
      break;
    case "pending":
      formattedAmount = `-${formattedAmount}`;
      break;
    case "refund":
    case "rejected":
      formattedAmount = <span className="line-through">{formattedAmount}</span>;
      break;
    default:
      formattedAmount = `${formattedAmount}`;
      break;
  }

  return (
    <div className={cn("font-semibold text-black", className)}>
      {formattedAmount}
    </div>
  );
};
