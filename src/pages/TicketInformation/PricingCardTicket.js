import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  position: "relative",
  width: "300px",
  height: "400px",
  margin: "1em",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(40px)",
  border: "solid 2px transparent",
  backgroundClip: "padding-box",
  boxShadow: "0px 10px 10px rgba(46, 54, 68, 10.03)",
  "&:hover .content": {
    opacity: 1,
    transform: "translateY(-20px)",
  },
  "&:hover .description": {
    opacity: 1,
    transform: "translateY(0px)",
  },
});

const Content = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0.5,
  transition: "0.5s",
});

const ImageContainer = styled("div")({
  position: "relative",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  overflow: "hidden",
  border: "10px solid rgba(0,0,0,.25)",
  "& img": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const CardDescription = styled(Typography)({
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: 500,
  fontSize: "18px",
  textAlign: "center",
  margin: "20px 0 10px",
  lineHeight: "1.1em",
  "& span": {
    fontSize: "12px",
    fontWeight: 300,
    textTransform: "initial",
  },
});

const DescriptionBox = styled(Box)({
  position: "absolute",
  bottom: "50px",
  width: "80%",
  textAlign: "center",
  color: "#fff",
  opacity: 0,
  transition: "0.5s",
  transform: "translateY(20px)",
});

const PricingCardTicket = ({ title, imageSrc, description }) => {
  return (
    <StyledCard>
      <Content className="content">
        <ImageContainer className="img">
          <img src={imageSrc} alt={title} />
        </ImageContainer>
        <CardContent className="cardContent">
          <CardDescription variant="h3">{title}</CardDescription>
        </CardContent>
      </Content>
      <DescriptionBox className="description">
        <Typography variant="body2">{description}</Typography>
      </DescriptionBox>
    </StyledCard>
  );
};

export default PricingCardTicket;
