import { ColumnsType } from "antd/es/table";
import {
  CCardNumber,
  CCopyable,
  CDate,
  CIndicator,
  CRowItem,
  CStatus,
  CTablePrice,
} from "@/shared/ui";
import { TransactionRow } from "@/modules/Transaction/model";

export const columns: ColumnsType<TransactionRow> = [
  {
    title: "C/На",
    dataIndex: "direction",
    render: (direction: TransactionRow["direction"]) => {
      return (
        <div className="flex justify-center">
          <CIndicator status={direction} />
        </div>
      );
    },
    align: "center",
  },
  {
    title: "Дата создания",
    dataIndex: "createdAt",
    render: (date: Date) => <CDate value={date} subValue={date} />,
  },
  {
    title: "№ карты",
    dataIndex: "cardNumber",
    render: (cardNumber, record) => (
      <CCardNumber type={record.cardBrand} number={cardNumber} />
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
    render: (status: TransactionRow["status"]) => <CStatus value={status} />,
  },
  {
    title: "Кассы",
    dataIndex: "store",
    render: (store: string) => <CRowItem value={store} />,
  },
  {
    title: "ID",
    dataIndex: "id",
    render: (id: string) => <CCopyable value={id} />,
  },
];
