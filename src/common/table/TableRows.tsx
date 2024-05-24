import { ReactNode } from "react";
import { ShortTooltip } from "../tooltip/ShortTooltip";
import { Loader } from "../loader/Loader";
import { ColumnDefinitionType } from "./Table";

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  isAutoHeight?: boolean;
  loading?: boolean;
  noDataFound?: string | JSX.Element;
  displayRowCheckbox?: boolean;
  selectedRows?: Array<T>;
  handleSelectRows?: (row: T) => void;
};

export const TableRows = <T, K extends keyof T>({
  data,
  columns,
   loading,
  noDataFound,
  displayRowCheckbox = false,
  selectedRows,
  handleSelectRows,
}: TableRowsProps<T, K>): JSX.Element => {
  return (
    <tbody>
      {loading ? (
        <tr>
          <td colSpan={columns.length} className="">
            <div className="w-full flex justify-center items-center h-64">
              <Loader className="!border-black !h-10 !w-10" />
            </div>
          </td>
        </tr>
      ) : data?.length > 0 ? (
        data?.map((row: T, index) => (
          <tr
            className={`border-b border-[#D9D9D9] h-12 hover:shadow-lg ${
              selectedRows?.includes(row) ? "bg-[#EAF9FF]" : ""
            }`}
            key={`rowtr-${index}`}
          >
            {displayRowCheckbox && (
              <td key={`cell-${index}-0`} className="px-6">
                <input
                  type="checkbox"
                  className={`cursor-pointer accent-primary rounded-md border-gray-600 h-4 w-4`}
                  checked={selectedRows?.includes(row)}
                  onChange={() => handleSelectRows?.(row)}
                />
              </td>
            )}
            {columns.map((column, index2) => (
              <td
                key={`cell-${index}-${index2}`}
                style={{ width: column.width ? column.width : "15rem" }}
                className={" text-left whitespace-nowrap text-sm"}
              >
                {column?.renderCell ? (
                  column?.renderCell(row)
                ) : (
                  <ShortTooltip
                    text={row[column.key] as string}
                    length={column.truncateLength ?? 35}
                    className={`flex justify-${column.align}`}
                  />
                )}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={columns.length}>
            {noDataFound ? (
              <> {noDataFound}</>
            ) : (
              <div className="w-full flex justify-center items-center h-64">
                No data available
              </div>
            )}
          </td>
        </tr>
      )}
    </tbody>
  );
};
