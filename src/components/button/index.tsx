import Typography from "../typography";
import { buttonSx } from "./sx";

export interface ButtonProps {
    label: string;
    color: "primary" | "secondary" | "yellow" | undefined;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    color,
    onClick,
}) => {
    return (
      <div onClick={onClick} style={buttonSx}>
        <Typography
            text={label}
            color={color}
            sx={{textDecoration: 'underline', fontSize: '32px', fontWeight: 600, marginLeft: 'auto', marginTop: 'auto'}}
        />
    </div>
    );

}

export default Button;