import { ReactNode, useCallback, useState } from "react";
import { TableRows } from "./TableRows";
import { TableHeader } from "./TableHeader";

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
  align?: string;
  truncateLength?: number;
  renderCell?: (params: T) => ReactNode;
};

export type TableProps<T, K extends keyof T> = {
  data: Array<T> | [];
  columns: Array<ColumnDefinitionType<T, K>>;
  isAutoHeight?: boolean;
  loading?: boolean;
  noDataFound?: string | JSX.Element;
  displayRowCheckbox?: boolean;
  onRowSelectionChange?: (rows: Array<T> | []) => void;
};

export const Table = <T, K extends keyof T>({
  data,
  columns,
  isAutoHeight,
  loading = false,
  noDataFound,
  onRowSelectionChange,
  displayRowCheckbox = false,
}: React.PropsWithChildren<TableProps<T, K>>): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<Array<T> | []>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectRows = useCallback(
    (row: T) => {
      setSelectedRows((prev) => {
        const index = prev.findIndex((selectedRow) => selectedRow === row);
        const updatedSelectedRows =
          index === -1 ? [...prev, row] : prev.filter((_, i) => i !== index);
        onRowSelectionChange?.(updatedSelectedRows);
        return updatedSelectedRows;
      });
    },
    [onRowSelectionChange]
  );

  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setSelectedRows([]);
      setSelectAll(false);
      onRowSelectionChange?.([]);
    } else {
      setSelectedRows(data);
      setSelectAll(true);
      onRowSelectionChange?.(data);
    }
  }, [selectAll, data, onRowSelectionChange]);

  return (
    <>
      <div className="relative">
        <div
          className={`overflow-x-auto ${
            isAutoHeight || !data || data.length === 0
              ? ""
              : "min-h-[60vh] max-h-[60vh]"
          }`}
        >
          <table className="min-w-full border-gray-200 bg-white rounded-md shadow-sm">
            <TableHeader
              columns={columns ?? []}
              selectAll={selectAll}
              onSelectAll={handleSelectAll}
              displayRowCheckbox={displayRowCheckbox}
            />
            <TableRows
              data={data ?? []}
              columns={columns}
              loading={loading}
              noDataFound={noDataFound}
              isAutoHeight={isAutoHeight}
              displayRowCheckbox={displayRowCheckbox}
              selectedRows={selectedRows}
              handleSelectRows={handleSelectRows}
            />
          </table>
        </div>
      </div>
    </>
  );
};
