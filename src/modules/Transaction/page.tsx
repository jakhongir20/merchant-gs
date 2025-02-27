import { Table } from "@/shared/ui";
import { useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */
export default function TransactionPage() {
  // const { t } = useTranslation();
  const [searchText, setSearchText] = useState("");
  const renderHeader = () => (
    <div className="flex items-center justify-between">
      <div>
        <span>
          сумма: <strong>1 345 500 000 UZS</strong>
        </span>
        <span>
          кол-во: <strong>7 895 шт</strong>
        </span>
      </div>
    </div>
  );
  return (
    <div>
      <Table showSearch header={renderHeader} />
    </div>
  );
}
