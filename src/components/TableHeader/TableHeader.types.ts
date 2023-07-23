type TableColumn<Entry> = {
    title: string;
    field: keyof Entry;
    Cell?({ entry }: { entry: Entry }): React.ReactElement;
    CustomHeader?: () => React.ReactElement;
    colSpan?: number;
    color?: boolean;
  };

 type TableProps<Entry> = {
    columns: TableColumn<Entry>[];
    width?: string;
  };

export declare const TableHeader: ({
  columns,
  width
}: TableProps<any>) => import("react/jsx-runtime").JSX.Element;
export {};
