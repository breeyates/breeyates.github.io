import Typography from "../../components/typography";
import { ContentBox, Line, RotatedText, SideLabelContainer, ProjectsContainer } from "./styles";

const Projects: React.FC<any> = ({}: any) => {

    return (
        <ProjectsContainer>
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
                <Typography color="secondary" text="SUGAR RUSH" sx={{fontSize: '32px', fontWeight: 700}} />
                <Typography color="secondary" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                  sx={{fontSize: '22px', fontWeight: 400}}
                />
                <Typography
                    text="NEXT →"
                    color="yellow"
                    sx={{textDecoration: 'underline', fontSize: '32px', fontWeight: 600, marginLeft: 'auto', marginTop: 'auto'}}
                />
            </ContentBox>
        </ProjectsContainer>
    );
};

export default Projects;