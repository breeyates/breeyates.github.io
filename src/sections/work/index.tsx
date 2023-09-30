import Typography from "../../components/typography";
import { ContentBox, Line, RotatedText, SideLabelContainer, WorkContainer } from "./styles";

const Work: React.FC<any> = ({}: any) => {

    return (
        <WorkContainer>
            <SideLabelContainer>
                <Typography
                  text="01"
                  sx={{fontSize: '64px', fontWeight: 700}}
                 />
                 <Line />
                 <RotatedText>
                  <Typography  text="WORK" sx={{fontSize: '48px', fontWeight: 400}} />
                 </RotatedText>
            </SideLabelContainer>
            <ContentBox>
                <Typography text="FLEXGEN POWER SYSTEMS" sx={{fontSize: '32px', fontWeight: 700}} />
                <Typography text="Full Stack Software Engineer" sx={{fontSize: '26px', fontWeight: 500}} />
                <Typography text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                  sx={{fontSize: '22px', fontWeight: 400}}
                />
                <Typography
                    text="NEXT →"
                    sx={{textDecoration: 'underline', fontSize: '32px', fontWeight: 600, marginLeft: 'auto', marginTop: 'auto'}}
                />
            </ContentBox>
        </WorkContainer>
    );
};

export default Work;