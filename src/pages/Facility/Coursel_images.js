import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledCarouselImageContainer = styled(Box)({
  width: "100%",
  height: 0,
  paddingTop: "56.25%",
  position: "relative",
  overflow: "hidden",
});

const StyledCarouselImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  cursor: "grab",
  "&:active": {
    cursor: "grabbing",
  },
});

const StyledCarouselContainer = styled(Box)({
  position: "relative",
  maxWidth: "1500px",
  width: "100%",
  margin: "auto",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0px 0px 0px rgba(0, 0, 0, 1.25)",
});

function Carousel({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <StyledCarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <StyledCarouselImageContainer key={index}>
            <StyledCarouselImage src={require(`assets/images/${image.src}`)} alt={image.alt} />
          </StyledCarouselImageContainer>
        ))}
      </Slider>
    </StyledCarouselContainer>
  );
}

export default Carousel;
