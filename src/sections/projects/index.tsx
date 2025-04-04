import { forwardRef } from "react";
import Typography from "../../components/typography";
import { ContentBox, Line, RotatedText, SideLabelContainer, ProjectsContainer, ProjectBox } from "./styles";
import { projects } from "./constants";
import ImageSlideshow from "../../components/image-slideshow";

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
                {projects.map(({ title, description, images, imageSx, imageWidth }) => (
                    <ProjectBox key={title}>
                        <Typography
                        color="secondary"
                        text={title}
                        sx={{fontSize: '32px', fontWeight: 700, textTransform: "uppercase",}}
                        />
                        <Typography
                          color="secondary"
                          text={description}
                          sx={{fontSize: '22px', fontWeight: 400}}
                        />
                        <ImageSlideshow imageSrcs={images} sx={imageSx} imageWidth={imageWidth} />
                    </ProjectBox>
                ))}
            </ContentBox>
        </ProjectsContainer>
    );
});

export default Projects;