import { CSummaryCard, Table } from "@/shared/ui";
import { ColumnsType } from "antd/es/table";
import { ArrowLeftOutlined, ArrowUpOutlined } from "@ant-design/icons";
/* eslint-disable @typescript-eslint/no-unused-vars */

// 1) Define the row interface
interface TransactionRow {
  key: string;
  direction: "in" | "out";
  createdAt: string;
  cardBrand: string;
  cardNumber: string;
  amount: number; // store your sum in a numeric
  status: "Успешно" | "В обработке" | "Возврат";
  store: string;
  id: string;
}

// 2) Sample data (based on your screenshot)
const data: TransactionRow[] = [
  {
    key: "1",
    direction: "in",
    createdAt: "1 Май 2024 14:51:37",
    cardBrand: "VISA",
    cardNumber: "**** 3622",
    amount: 42300000,
    status: "Успешно",
    store: "Корзинка Юнусобод",
    id: "001",
  },
  {
    key: "2",
    direction: "out",
    createdAt: "2 Май 2024 14:51:37",
    cardBrand: "VISA",
    cardNumber: "**** 1234",
    amount: -8500,
    status: "Успешно",
    store: "Корзинка Яшнобод",
    id: "002",
  },
  {
    key: "3",
    direction: "in",
    createdAt: "1 Май 2024 14:51:37",
    cardBrand: "UZCARD",
    cardNumber: "**** 9850",
    amount: 969240.44,
    status: "Успешно",
    store: "Корзинка Юнусобод",
    id: "003",
  },
  {
    key: "4",
    direction: "out",
    createdAt: "30 Апр 2024 14:51:37",
    cardBrand: "", // No brand needed for some?
    cardNumber: "**** 8205",
    amount: -1000,
    status: "В обработке",
    store: "Корзинка Хатирчи",
    id: "004",
  },
  {
    key: "5",
    direction: "in",
    createdAt: "30 Апр 2024 14:51:37",
    cardBrand: "HUMO",
    cardNumber: "**** 9085",
    amount: 417000,
    status: "Возврат",
    store: "Корзинка Сергели",
    id: "005",
  },
  {
    key: "6",
    direction: "in",
    createdAt: "29 Апр 2024 14:51:37",
    cardBrand: "HUMO",
    cardNumber: "**** 2033",
    amount: 103000,
    status: "Успешно",
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
      return direction === "in" ? (
        <ArrowUpOutlined
          style={{
            color: "#2B78E4",
            background: "#EAF2FF",
            fontSize: 16,
            borderRadius: "50%",
            padding: 4,
          }}
        />
      ) : (
        <ArrowLeftOutlined
          style={{
            color: "#5CB85C",
            background: "#ECF9EC",
            fontSize: 16,
            borderRadius: "50%",
            padding: 4,
          }}
        />
      );
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
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {record.cardBrand && (
          <img
            src={`/assets/cards/${record.cardBrand.toLowerCase()}.svg`}
            alt={record.cardBrand}
            style={{ width: 32 }}
          />
        )}
        <span>{masked}</span>
      </div>
    ),
  },
  {
    title: "Сумма (UZS)",
    dataIndex: "amount",
    render: (amount: number) => {
      // show + sign for positive
      const sign = amount > 0 ? "+" : "";
      // e.g. format as string with space as thousands separator if needed
      return (
        <span style={{ fontWeight: 500 }}>
          {sign}
          {amount.toLocaleString("ru-RU")}
        </span>
      );
    },
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
