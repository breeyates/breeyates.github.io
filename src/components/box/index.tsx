import React from "react";
import { boxSx } from "./styles";
import { colors } from "../../styles";

export interface BoxProps {
    children?: React.ReactNode;
    width?: string | number;
    height?: string | number;
    color?: string;
}

const Box:React.FC<BoxProps> = ({
    children,
    height = undefined,
    width = undefined,
    color = colors.white,
}: BoxProps) => {
    return (
        <div style={boxSx(width, height, color)}>
            {children}
        </div>
    );
}

export default Box;