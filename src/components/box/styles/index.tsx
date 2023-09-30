import { colors } from "../../../styles";

export const boxSx = (width?: string | number, height?: string | number, color?: string) => ({
    borderRadius: '6px',
    display: 'inline-block',
    alignItems: 'center',
    width: width,
    height: height,
    justifyContent: 'center',
    padding: '4px 12px 4px 12px',
    backgroundColor: color,
    boxShadow: `4px 4px 0px 0px ${colors.black}`,
    border: `4px solid ${colors.black}`
});
