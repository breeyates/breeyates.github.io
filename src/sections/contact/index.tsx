import React, { forwardRef } from "react";
import { ContactContainer, TextContainer } from './styles';
import Typography from "../../components/typography";
import { Link } from "@mui/material";

const Contact = forwardRef<any, {}>((_, ref) => {
    const linkedIn = 'https://www.linkedin.com/in/breanna-yates-b58b88106/';
    return (
        <ContactContainer ref={ref}>
            <TextContainer>
                <Typography
                    text="Email"
                    sx={{
                        fontSize: "32px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                    }}
                />
                <Typography
                    text="breeyates1@gmail.com"
                    sx={{
                        fontSize: "18px",
                        fontWeight: 400,
                    }}
                />
            </TextContainer>
            <TextContainer>
                <Typography
                    text="LinkedIn"
                    sx={{
                        fontSize: "32px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                    }}
                />
                <Link href={linkedIn} underline="none" target="_blank" rel="noopener noreferrer">
                    <Typography
                        text={linkedIn}
                        sx={{
                            fontSize: "18px",
                            fontWeight: 400,
                            textDecoration: 'underline',
                        }}
                    />
                </Link>
            </TextContainer>
        </ContactContainer>
    );
})

export default Contact;