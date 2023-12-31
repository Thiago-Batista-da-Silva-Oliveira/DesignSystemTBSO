import "./styles.css";
interface IRequest extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  bgColor: string;
  size?: "small" | "medium" | "large";
  textColor?: string;
  title: string;
}
export declare const Button: ({
  bgColor,
  title,
  size,
  textColor,
  ...rest
}: IRequest) => import("react/jsx-runtime").JSX.Element;
export {};
