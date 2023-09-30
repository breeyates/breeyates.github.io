import { HeaderContainer, SubTextContainer, cursorSx } from "./styles";
import Typography from "../../components/typography";
import useMousePosition from "../../hooks/useMousePosition";

const Header: React.FC<any> = ({}: any) => {
    const { clientX, clientY } = useMousePosition();
    console.log(clientX, clientY);

    return (
    <HeaderContainer>
        <Typography
          text="BREE YATES"
          variant="anton"
          color="yellow"
          sx={{fontSize: '260px', fontWeight: 400, lineHeight: 1,}}
        />
        {/* <div style={cursorSx(clientX, clientY)} /> */}
        <SubTextContainer>
            <Typography
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                color="secondary"
                sx={{textAlign: 'right', fontSize: '24px', fontWeight: 400}}
            />
            <Typography
              text="SEE MY WORK →"
              color="secondary"
              sx={{textDecoration: 'underline', fontSize: '32px'}}
            />
        </SubTextContainer>
    </HeaderContainer>
    );
};

export default Header;