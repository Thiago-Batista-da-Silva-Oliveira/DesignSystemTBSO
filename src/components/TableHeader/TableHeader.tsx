type TableColumn= {
    title: string;
    field: string;
    Cell?({ entry }: { entry: any }): React.ReactElement;
    CustomHeader?: () => React.ReactElement;
    colSpan?: number;
    color?: boolean;
  };

 type TableProps= {
    columns: TableColumn[];
    width?: string;
  };

const TableHeader =({columns, width = '200px', ...rest}: TableProps) => {
    return (
        <thead {...rest}>
            <tr>
            {columns.map((column, index) => (
                <th
                  style={{ width  }}
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
    )
}


export default TableHeader