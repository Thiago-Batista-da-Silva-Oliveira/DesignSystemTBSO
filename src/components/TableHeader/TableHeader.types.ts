type TableColumn = {
  title: string;
  field:string;
  Cell?({ entry }: { entry: any }): React.ReactElement;
  CustomHeader?: () => React.ReactElement;
  colSpan?: number;
  color?: boolean;
};


 type TableProps = {
    columns: TableColumn[];
    width?: string;
  };

export declare const TableHeader: ({
  columns,
  width
}: TableProps) => import("react/jsx-runtime").JSX.Element;
export {};
