import Typography from "../../components/typography";
import { skillsList } from "./constants";
import { ScrollText, ScrollWrapper, SkillsContainer, textSx } from "./styles";

const SkillBanner: React.FC<{}> = () => {
  const skillString = skillsList.join("\u25CF");
  return (
    <SkillsContainer>
        <ScrollWrapper>
            <ScrollText>
                <Typography
                  text={skillString}
                  variant="anton"
                  color="yellow"
                  sx={textSx}
                />
            </ScrollText>
      </ScrollWrapper>
    </SkillsContainer>
  );
}

export default SkillBanner;
