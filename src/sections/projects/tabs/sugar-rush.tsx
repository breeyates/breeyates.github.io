import Typography from "../../../components/typography";
import { ContentBox } from "../styles";
import ImageSlideshow from "../../../components/image-slideshow";

const SugarRush: React.FC = () => {
    const images = ["/HowToScreen.png", "/HowToScreen.png", "/HowToScreen.png"]
    return (
        <ContentBox>
            <Typography color="secondary" text="SUGAR RUSH" sx={{fontSize: '32px', fontWeight: 700}} />
            <Typography color="secondary" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                sx={{fontSize: '22px', fontWeight: 400}}
            />
            <ImageSlideshow imageSrcs={images} />
        </ContentBox>
    );
}

export default SugarRush;