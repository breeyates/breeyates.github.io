import React, { useState } from "react";
import { ImageContainer, imageSx } from "./styles";

interface ImageSlideshowProps {
    imageSrcs: string[],
    sx?: React.CSSProperties;
    imageWidth?: string;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
    imageSrcs,
    sx,
    imageWidth,
}) => {
    const [selectedImage, setSelectedImage] = useState<number>(0);
    return (
        <ImageContainer style={sx}>
            {imageSrcs.map((img, index) => (
                <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}${img}`}
                    alt={`${img}-${index}`}
                    style={imageSx(selectedImage === index, imageWidth)}
                    onMouseEnter={() => setSelectedImage(index)}
                />
            ))}
        </ImageContainer>
    )

}

export default ImageSlideshow;