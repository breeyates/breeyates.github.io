import { HeaderContainer, SubTextContainer, cursorSx, nameSx } from "./styles";
import Typography from "../../components/typography";
import useMousePosition from "../../hooks/useMousePosition";
import { useState } from "react";
import Button from "../../components/button";

const Header: React.FC<{}> = () => {
    const { clientX, clientY } = useMousePosition();
    const [darkMode, setDarkMode] = useState<boolean>(true);

    return (
    <HeaderContainer darkMode={darkMode}>
        <Typography
          text="BREE YATES"
          variant="anton"
          color={darkMode ? 'secondary' : 'primary'}
          sx={nameSx}
          userSelect={false}
        />
        {darkMode && <div style={cursorSx(clientX, clientY)} />}
        <SubTextContainer>
            <Typography
                text="Hello! I'm Bree, a full-stack developer based in Denver, CO. My journey into development is rooted in years of freelance graphic design work, which sparked my passion for front-end development. I have expertise in a wide range of front-end and full-stack technologies, including React, Next.js, Styled Components, TailwindCSS, NestJS, and PostgreSQL."
                color="primary"
                userSelect={false}
                sx={{textAlign: 'right', fontSize: '24px', fontWeight: 400, zIndex: 1,}}
            />
            <Button
              label={`Turn ${darkMode ? 'on' : 'off'} the light!`}
              color={darkMode ? "secondary" : 'primary'}
              onClick={() => setDarkMode(!darkMode)}
              textSx={{fontSize: '24px', zIndex: 2}}
            />
        </SubTextContainer>
    </HeaderContainer>
    );
};

export default Header;