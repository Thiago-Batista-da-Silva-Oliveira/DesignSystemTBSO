type TableColumn = {
  title: string;
  field: string;
  Cell?({ entry }: { entry: any }): React.ReactElement;
  CustomHeader?: () => React.ReactElement;
  colSpan?: number;
  color?: boolean;
};

type TableProps = {
  columns: TableColumn[];
  width?: string;
  data: any[];
};

const Table = ({ columns, data, width = "200px", ...rest }: TableProps) => {
  return (
    <div {...rest}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              style={{ width }}
              colSpan={column.colSpan}
              key={column.title + index}
              scope="col"
            >
              {column.CustomHeader ? (
                <column.CustomHeader />
              ) : (
                <>{column.title}</>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((entry: any, entryIndex: any) => (
          <tr key={entry?.id || entryIndex}>
            {columns.map(
              ({ Cell, field, title, colSpan, color }, columnIndex) => (
                <td
                  style={{ width: "200px", color: color ? entry.color : "" }}
                  key={title + columnIndex}
                  colSpan={colSpan}
                >
                  {Cell ? <Cell entry={entry} /> : entry[field]}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default Table;
