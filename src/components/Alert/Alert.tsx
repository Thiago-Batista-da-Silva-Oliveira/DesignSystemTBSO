import {
  AiFillCheckCircle,
  AiFillWarning,
  AiFillInfoCircle,
} from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

interface IRequest {
  type: "success" | "error" | "warning" | "info";
  title: string;
  description?: string;
  width?: string;
}

const Alert = ({ type, title, description, width = "300px" }: IRequest) => {
  const bgColor = {
    success: "#4BB543",
    error: "#FF0000",
    warning: "#FFD700",
    info: "#87CEFA",
  };

  const icon = {
    success: <AiFillCheckCircle size="24" color="#FFF" />,
    error: <GiCancel size="24" color="#FFF" />,
    warning: <AiFillWarning size="24" color="#FFF" />,
    info: <AiFillInfoCircle size="24" color="#FFF" />,
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
        <GiCancel size="24" color="#FFF" />
      </button>
    </div>
  );
};

export default Alert;
