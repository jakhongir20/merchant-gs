import {
  CCardNumber,
  CSummaryCard,
  CTablePrice,
  CTransactionIndicator,
  Table,
} from "@/shared/ui";
import { ColumnsType } from "antd/es/table";
import { PaymentType } from "@/shared/ui/common/CCardNumber";
/* eslint-disable @typescript-eslint/no-unused-vars */

// 1) Define the row interface
export interface TransactionRow {
  key: string;
  direction: "in" | "out";
  createdAt: string;
  cardBrand: PaymentType;
  cardNumber: string;
  amount: number; // store your sum in a numeric
  status: "success" | "pending" | "refund" | "rejected";
  store: string;
  id: string;
}

// 2) Sample data (based on your screenshot)
const data: TransactionRow[] = [
  {
    key: "1",
    direction: "in",
    createdAt: "1 Май 2024 14:51:37",
    cardBrand: "visa",
    cardNumber: "**** 3622",
    amount: 42300000,
    status: "success",
    store: "Корзинка Юнусобод",
    id: "001",
  },
  {
    key: "2",
    direction: "out",
    createdAt: "2 Май 2024 14:51:37",
    cardBrand: "visa",
    cardNumber: "**** 1234",
    amount: -8500,
    status: "refund",
    store: "Корзинка Яшнобод",
    id: "002",
  },
  {
    key: "3",
    direction: "in",
    createdAt: "1 Май 2024 14:51:37",
    cardBrand: "uzcard",
    cardNumber: "**** 9850",
    amount: 969240.44,
    status: "rejected",
    store: "Корзинка Юнусобод",
    id: "003",
  },
  {
    key: "4",
    direction: "out",
    createdAt: "30 Апр 2024 14:51:37",
    cardBrand: "uzcard", // No brand needed for some?
    cardNumber: "**** 8205",
    amount: -1000,
    status: "pending",
    store: "Корзинка Хатирчи",
    id: "004",
  },
  {
    key: "5",
    direction: "in",
    createdAt: "30 Апр 2024 14:51:37",
    cardBrand: "mastercard",
    cardNumber: "**** 9085",
    amount: 417000,
    status: "pending",
    store: "Корзинка Сергели",
    id: "005",
  },
  {
    key: "6",
    direction: "in",
    createdAt: "29 Апр 2024 14:51:37",
    cardBrand: "humo",
    cardNumber: "**** 2033",
    amount: 103000,
    status: "rejected",
    store: "Корзинка Чилонзор",
    id: "006",
  },
];

// 3) Define columns
const columns: ColumnsType<TransactionRow> = [
  {
    title: "C/На",
    dataIndex: "direction",
    render: (direction: TransactionRow["direction"]) => {
      // Show a colored arrow or icon
      return <CTransactionIndicator status={direction} />;
    },
    width: 70,
  },
  {
    title: "Дата создания",
    dataIndex: "createdAt",
  },
  {
    title: "№ карты",
    dataIndex: "cardNumber",
    render: (masked, record) => (
      <CCardNumber type={record.cardBrand} number={masked} />
    ),
  },
  {
    title: "Сумма (UZS)",
    dataIndex: "amount",
    render: (amount: number, record) => (
      <CTablePrice amount={amount} status={record.status} />
    ),
  },
  {
    title: "Статус",
    dataIndex: "status",
    render: (status: TransactionRow["status"]) => {
      let bg = "#E1FFE0";
      let color = "#5CB85C";
      if (status === "Возврат") {
        bg = "#FFEDED";
        color = "#FF4D4F";
      } else if (status === "В обработке") {
        bg = "#FFF5E6";
        color = "#FAAD14";
      }
      return (
        <span
          style={{
            backgroundColor: bg,
            color,
            padding: "4px 8px",
            borderRadius: 4,
          }}
        >
          {status}
        </span>
      );
    },
  },
  {
    title: "Кассы",
    dataIndex: "store",
  },
  {
    title: "ID",
    dataIndex: "id",
  },
];

// 4) Enable checkbox selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: TransactionRow[]) => {
    console.log("Selected Rows: ", selectedRows);
  },
  // e.g. defaultSelectedRowKeys: ["2"], to preselect any row
};

export default function TransactionPage() {
  const renderHeader = () => (
    <div className="flex items-center gap-4">
      <CSummaryCard label={"cумма"} value={"1 345 500 000 UZS"} />
      <CSummaryCard label={"кол-во:"} value={"7 895 шт"} status={false} />
    </div>
  );
  // StatisticCard
  return (
    <div>
      <Table
        data={data}
        columns={columns}
        showSearch
        header={renderHeader}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
      />
    </div>
  );
}
