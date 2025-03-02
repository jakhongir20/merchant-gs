import { Table } from "@/shared/ui";
import { columns, TableHeader } from "@/modules/Transaction/components";
import { TransactionRow } from "@/modules/Transaction/model";
import { useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */

const fakeData: TransactionRow[] = [
  {
    key: "1",
    direction: "in",
    createdAt: new Date(),
    cardBrand: "visa",
    cardNumber: "**** 3622",
    amount: 42300000,
    status: 1,
    store: "Корзинка Юнусобод",
    id: "001",
  },
  {
    key: "2",
    direction: "out",
    createdAt: new Date(),
    cardBrand: "visa",
    cardNumber: "**** 1234",
    amount: 8500,
    status: 2,
    store: "Корзинка Яшнобод",
    id: "002",
  },
  {
    key: "3",
    direction: "in",
    createdAt: new Date(),
    cardBrand: "uzcard",
    cardNumber: "**** 9850",
    amount: 969240.44,
    status: 3,
    store: "Корзинка Юнусобод",
    id: "003",
  },
  {
    key: "4",
    direction: "out",
    createdAt: new Date(),
    cardBrand: "uzcard",
    cardNumber: "**** 8205",
    amount: 1000,
    status: 4,
    store: "Корзинка Хатирчи",
    id: "004",
  },
  {
    key: "5",
    direction: "in",
    createdAt: new Date(),
    cardBrand: "mastercard",
    cardNumber: "**** 9085",
    amount: 417000,
    status: 4,
    store: "Корзинка Сергели",
    id: "005",
  },
  {
    key: "6",
    direction: "in",
    createdAt: new Date(),
    cardBrand: "humo",
    cardNumber: "**** 2033",
    amount: 103000,
    status: 1,
    store: "Корзинка Чилонзор",
    id: "006",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: TransactionRow[]) => {
    console.log("Selected Rows: ", selectedRows);
  },
  // e.g. defaultSelectedRowKeys: ["2"], to preselect any row
};

export default function TransactionPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<TransactionRow>();

  const handleOpenDrawer = (row: TransactionRow) => {
    setSelectedRow(row);
    setIsOpen(true);
  };

  return (
    <div>
      <Table
        data={fakeData}
        columns={columns}
        showSearch
        header={() => <TableHeader />}
        onRowClick={handleOpenDrawer}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
      />
    </div>
  );
}
