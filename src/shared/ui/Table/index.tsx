// @typescript-eslint/no-unused-vars
import React, { ReactNode } from "react";
import { Table as AntTable, TableProps as AntTableProps } from "antd";
import { ColumnGroupType, ColumnType } from "antd/es/table";
import { cn } from "@/shared/helpers";
import { TableSearchInput } from "@/shared/ui/Table/actions/TableSearchInput";
import { JSX } from "react/jsx-runtime";
// import "./index.css";

type PaginationType = {
  total: number;
  page: number;
  limit: number;
};

export interface TableProps<T>
  extends Omit<AntTableProps<T>, "dataSource" | "columns"> {
  className?: string;
  data: T[];
  columns: AntTableProps<T>["columns"];
  pagination?: PaginationType | false;
  showDropdown?: boolean;
  showFilter?: boolean;
  showSearch?: boolean;
  filters?: (string | string[])[];
  onRowClick?: (row: T) => void;
  header?: () => ReactNode;
  footer?: () => ReactNode;
  showRowIndex?: boolean;
  children?: ReactNode;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const Table = <T extends object>({
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
  showRowIndex = true,
  children,
  ...rest
}: TableProps<T>) => {
  const TableHeader = () => {
    return (
      <div className="flex items-center justify-between">
        {showSearch && <TableSearchInput />}
        {header && header()}
      </div>
    );
  };

  const enhancedColumns: (ColumnGroupType<T> | ColumnType<T>)[] | undefined =
    showRowIndex
      ? [
          {
            key: "__rowIndex",
            title: "№",
            dataIndex: "__rowIndex",
            align: "left",
            width: 20,
            render: (_: unknown, __: unknown, index: number) =>
              pagination
                ? (pagination?.page - 1) * pagination?.limit + index + 1 || 0
                : index + 1,
          },
          ...(columns || []),
        ]
      : columns;

  return (
    <div className={cn(className)}>
      <AntTable<T>
        dataSource={data}
        columns={enhancedColumns}
        loading={loading}
        pagination={pagination}
        title={TableHeader}
        rootClassName="[&_.ant-table-title]:!p-0 [&_.ant-table-title]:!mb-[30px] g-table"
        footer={footer}
        components={{
          header: {
            cell: (
              cellProps: JSX.IntrinsicAttributes &
                React.ClassAttributes<HTMLTableHeaderCellElement> &
                React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
            ) => {
              return (
                <th
                  {...cellProps}
                  className={cn(
                    "before:hidden first:!pl-4 first:!pr-0 last:!pr-4",
                  )}
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#475467",
                    height: "44px",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: "16px",
                    padding: "12px",
                    borderBottom: "1px solid #EAECF0",
                    ...cellProps.style,
                  }}
                >
                  {cellProps.children}
                </th>
              );
            },
          },
          body: {
            cell: (
              cellProps: JSX.IntrinsicAttributes &
                React.ClassAttributes<HTMLTableHeaderCellElement> &
                React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
            ) => {
              return (
                <td
                  {...cellProps}
                  className="first:!pl-4 last:!pr-4"
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid #EAECF0",
                    ...cellProps.style,
                  }}
                >
                  {cellProps.children}
                </td>
              );
            },
          },
        }}
        {...rest}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              onRowClick?.(record);
            },
          };
        }}
      />
      {children}
    </div>
  );
};
