interface IRequest {
  bgColor: string;
  size?: "small" | "medium" | "large";
  textColor?: string;
  title: string;
}

const Button = ({
  bgColor,
  title,
  size = "small",
  textColor = "#FFF",
  ...rest
}: IRequest) => {
  const paddings = {
    small: "10px 20px",
    medium: "15px 30px",
    large: "20px 40px",
  };
  return (
    <button
      {...rest}
      style={{
        cursor: "pointer",
        backgroundColor: bgColor,
        border: "none",
        borderRadius: "5px",
        outline: "none",
        padding: paddings[size],
      }}
    >
      <span style={{ color: textColor }}>{title}</span>
    </button>
  );
};

export default Button;
