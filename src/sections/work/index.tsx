import { forwardRef } from "react";
import ImageSlideshow from "../../components/image-slideshow";
import Typography from "../../components/typography";
import { work } from "./constants";
import { CompanyContainer, CompanyTextContainer, ContentBox, Line, PositionContainer, PositionsContainer, RotatedText, SideLabelContainer, WorkContainer } from "./styles";

const Work = forwardRef<any, {}>((_, ref) => {
    return (
      <WorkContainer ref={ref}>
        <SideLabelContainer>
          <Typography text="01" sx={{ fontSize: "64px", fontWeight: 700 }} />
          <Line />
          <RotatedText>
            <Typography text="WORK" sx={{ fontSize: "48px", fontWeight: 400 }} />
          </RotatedText>
        </SideLabelContainer>
        <ContentBox>
          {work.map(({ company, positions, images, imageSx, imageWidth }) => (
            <CompanyContainer key={company}>
              <CompanyTextContainer>
                <Typography
                  text={company}
                  sx={{
                    fontSize: "32px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                />
                <PositionsContainer>
                  {positions.map((position, index) => (
                    <PositionContainer key={index}>
                      <Typography
                        text={position.title}
                        sx={{ fontSize: "26px", fontWeight: 500 }}
                      />
                      <Typography
                        text={position.description}
                        sx={{ fontSize: "22px", fontWeight: 400 }}
                      />
                    </PositionContainer>
                  ))}
                </PositionsContainer>
              </CompanyTextContainer>
              <ImageSlideshow
                imageSrcs={images}
                sx={imageSx}
                imageWidth={imageWidth}
              />
            </CompanyContainer>
          ))}
          <Typography
            text="NEXT →"
            sx={{
              textDecoration: "underline",
              fontSize: "32px",
              fontWeight: 600,
              marginLeft: "auto",
              marginTop: "auto",
            }}
          />
        </ContentBox>
      </WorkContainer>
    );
});
  
export default Work;