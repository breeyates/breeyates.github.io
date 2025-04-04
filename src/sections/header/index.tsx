import { HeaderContainer, SubTextContainer, cursorSx, nameSx } from "./styles";
import Typography from "../../components/typography";
import useMousePosition from "../../hooks/useMousePosition";

const Header: React.FC<{}> = () => {
    const { clientX, clientY } = useMousePosition();

    return (
    <HeaderContainer>
        <Typography
          text="BREE YATES"
          variant="anton"
          color="yellow"
          sx={nameSx}
          userSelect={false}
        />
        <div style={cursorSx(clientX, clientY)} />
        <SubTextContainer>
            <Typography
                text="Hello! I'm Bree, a full-stack developer based in Denver, CO. My journey into development is rooted in years of freelance graphic design work, which sparked my passion for front-end development. I have expertise in a wide range of front-end and full-stack technologies, including React, Next.js, Styled Components, TailwindCSS, NestJS, and PostgreSQL. Outside of coding, I enjoy cooking, reading, and playing tennis."
                color="primary"
                userSelect={false}
                sx={{textAlign: 'right', fontSize: '24px', fontWeight: 400, zIndex: 1,}}
            />
            <Typography
              text="SEE MY WORK →"
              color="secondary"
              userSelect={false}
              sx={{textDecoration: 'underline', fontSize: '32px'}}
            />
        </SubTextContainer>
    </HeaderContainer>
    );
};

export default Header;