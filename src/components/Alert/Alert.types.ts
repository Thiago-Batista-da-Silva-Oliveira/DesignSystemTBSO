interface IRequest {
  type: "success" | "error" | "warning" | "info";
  title: string;
  description?: string;
  width?: string;
}
export declare const Alert: ({
  type,
  title,
  description,
  width,
}: IRequest) => import("react/jsx-runtime").JSX.Element;
export {};
