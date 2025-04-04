import Typography from "../typography";
import { buttonSx } from "./sx";

export interface ButtonProps {
    label: string;
    color: "primary" | "secondary" | "yellow" | undefined;
    onClick: () => void;
    textSx?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    label,
    color,
    onClick,
    textSx,
}) => {
    return (
      <div onClick={onClick} style={buttonSx}>
        <Typography
            text={label}
            color={color}
            userSelect={false}
            sx={{textDecoration: 'underline', fontSize: '32px', fontWeight: 600, marginLeft: 'auto', marginTop: 'auto', ...textSx}}
        />
    </div>
    );

}

export default Button;