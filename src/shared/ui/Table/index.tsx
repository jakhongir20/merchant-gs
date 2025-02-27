// @typescript-eslint/no-unused-vars
import React, { ReactNode } from "react";
import { Table as AntTable, TableProps as AntTableProps } from "antd";
import { TablePaginationConfig } from "antd/es/table";
import { cn } from "@/shared/helpers";
import { TableSearchInput } from "@/shared/ui/Table/actions/TableSearchInput";

export interface TableProps<T>
  extends Omit<AntTableProps<T>, "dataSource" | "columns"> {
  className?: string;
  data?: T[];
  columns?: AntTableProps<T>["columns"];
  pagination?: TablePaginationConfig | false;
  showDropdown?: boolean;
  showFilter?: boolean;
  showSearch?: boolean;
  filters?: (string | string[])[];
  onRowClick?: (row: T) => void;
  header?: () => ReactNode;
  footer?: () => ReactNode;
  children?: ReactNode;
}

export function Table<T extends object>(props: TableProps<T>) {
  const {
    className,
    data,
    columns,
    loading,
    pagination,
    showDropdown,
    showFilter,
    showSearch = true,
    filters,
    onRowClick,
    header,
    footer,
    children,
    ...rest
  } = props;

  console.log(
    loading,
    pagination,
    showDropdown,
    showFilter,
    filters,
    onRowClick,
  );

  const TableHeader = () => {
    return (
      <div className="flex items-center justify-between">
        {showSearch && <TableSearchInput />}
        {header && header()}
      </div>
    );
  };

  return (
    <div className={cn(className)}>
      <AntTable<T>
        dataSource={data}
        columns={columns}
        loading={loading}
        pagination={pagination}
        title={TableHeader}
        footer={footer}
        {...rest}
      />
      {children}
    </div>
  );
}
