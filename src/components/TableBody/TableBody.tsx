type TableColumn = {
  title: string;
  field: string;
  Cell?({ entry }: { entry: any }): React.ReactElement;
  CustomHeader?: () => React.ReactElement;
  colSpan?: number;
  color?: boolean;
};

type TableProps = {
  data: any[];
  columns: TableColumn[];
};

const TableBody = ({ data, columns, ...rest }: TableProps) => {
  return (
    <tbody {...rest}>
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
  );
};

export default TableBody;
