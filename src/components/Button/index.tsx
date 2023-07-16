import { ReactNode } from "react";

interface IRequest {
    bgColor: string;
    children: ReactNode
}

export const Button = ({bgColor, children}: IRequest) => {
    return (
        <button style={{
            backgroundColor: bgColor,
        }}>
            {children}
        </button>
    )
}