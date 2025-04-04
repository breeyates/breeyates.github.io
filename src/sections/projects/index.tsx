import { forwardRef } from "react";
import Button from "../../components/button";
import Typography from "../../components/typography";
import { ContentBox, Line, RotatedText, SideLabelContainer, ProjectsContainer, ButtonBox } from "./styles";
import SugarRush from "./tabs/sugar-rush";

const Projects = forwardRef<any, {}>((_, ref) => {
    return (
        <ProjectsContainer ref={ref}>
            <SideLabelContainer>
                <Typography
                  text="02"
                  color="secondary"
                  sx={{fontSize: '64px', fontWeight: 700}}
                 />
                 <Line />
                 <RotatedText>
                  <Typography color="secondary"  text="PROJECTS" sx={{fontSize: '48px', fontWeight: 400}} />
                 </RotatedText>
            </SideLabelContainer>
            <ContentBox>
                <SugarRush />
            <ButtonBox>
                <Button label={"NEXT →"} color="yellow" onClick={() => console.log('hi')} />
            </ButtonBox>
            </ContentBox>
        </ProjectsContainer>
    );
});

export default Projects;