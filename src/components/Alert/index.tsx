import {CancelSVG} from '../SVGS/Cancel'
import {Check} from '../SVGS/Check'

interface IRequest {
  type: "success" | "error" | "warning" | "info";
  title: string;
  description?: string;
  width?: string;
}

export const Alert = ({ type, title, description, width = "300px" }: IRequest) => {
  const bgColor = {
    success: "#4BB543",
    error: "#FF0000",
    warning: "#FFD700",
    info: "#87CEFA",
  };

  const icon = {
    success: <Check />,
    error: <CancelSVG />,
    warning: <Check/>,
    info: <Check/>,
  };
  return (
    <div
      style={{
        background: bgColor[type],
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        width,
      }}
    >
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <div>{icon[type]}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
      
          }}
        >
          <span style={{ fontWeight: "bold" }}>{title}</span>
          <span>{description}</span>
        </div>
      </div>
      <button style={{ border: "none", background: "transparent" }}>
        <CancelSVG  />
      </button>
    </div>
  );
};
