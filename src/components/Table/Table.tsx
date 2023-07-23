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
  backgroundColor?: string;
  color?: string;
};

const Table = ({
  columns,
  data,
  width = "200px",
  backgroundColor = "#04AA6D",
  color = "#FFF",
  ...rest
}: TableProps) => {
  return (
    <table
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        borderCollapse: "collapse",
        width: "100%",
      }}
      {...rest}
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              style={{
                width,
                textAlign: "left",
                backgroundColor,
                padding: "12px 8px",
                color,
              }}
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
                  style={{
                    width: "200px",
                    color: color ? entry.color : "",
                    border: "1px solid #ddd",
                    padding: "8px",
                  }}
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
    </table>
  );
};

export default Table;
