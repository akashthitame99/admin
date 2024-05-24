import { ColumnDefinitionType } from "./Table";

type TableHeaderProps<T, K extends keyof T> = {
  columns?: Array<ColumnDefinitionType<T, K>>;
  selectAll?: boolean;
  displayRowCheckbox?: boolean;
  onSelectAll?: () => void;
};

export const TableHeader = <T, K extends keyof T>({
  columns,
  displayRowCheckbox = false,
  selectAll,
  onSelectAll,
}: TableHeaderProps<T, K>): JSX.Element => {
  return (
    <thead className="sticky top-0 bg-[#EAEAEA] z-10 rounded-md">
      <tr className="h-11 rounded-md">
        {displayRowCheckbox && (
          <th>
            <input
              type="checkbox"
              className={`cursor-pointer rounded-md border-gray-600 h-4 w-4 accent-primary `}
              checked={selectAll}
              onChange={onSelectAll}
            />
          </th>
        )}
        {columns?.map((column, index) => {
          return (
            <th
              scope="col"
              className={`text-sm font-medium`}
              key={`headCell-${index} `}
            >
              <div
                className={`whitespace-nowrap flex justify-${column?.align}`}
                style={{ width: column.width ? column.width : "" }}
              >
                {column.header}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
