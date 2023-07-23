type TableColumn = {
    title: string;
    field:string;
    Cell?({ entry }: { entry: any }): React.ReactElement;
    CustomHeader?: () => React.ReactElement;
    colSpan?: number;
    color?: boolean;
  };

  type TableProps = {
    data: any[];
    columns: TableColumn[];
  };

export declare const TableBody: ({
  columns,
  data
}: TableProps) => import("react/jsx-runtime").JSX.Element;
export {};
