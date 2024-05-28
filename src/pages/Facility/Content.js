import React from "react";
import { Box, Typography, CardContent } from "@mui/material";
import Carousel from "./Coursel_images";

function Content() {
  const sections = [
    {
      id: "water-boom",
      header: "Water Boom",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh nisl condimentum id venenatis. Egestas integer eget aliquet nibh praesent tristique magna sit. Egestas quis ipsum suspendisse ultrices. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Vehicula ipsum a arcu cursus vitae. Ac orci phasellus egestas tellus rutrum. Dolor purus non enim praesent elementum facilisis. Hendrerit gravida rutrum quisque non. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Tristique risus nec feugiat in fermentum posuere urna nec. Porta nibh venenatis cras sed felis eget velit. At ultrices mi tempus imperdiet nulla. Feugiat vivamus at augue eget arcu dictum varius.",
      ],
      images: [
        { src: "background.jpeg", alt: "Water Boom 1" },
        { src: "bg2.jpg", alt: "Water Boom 2" },
      ],
    },
    {
      id: "camping-ground",
      header: "Camping Ground",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh nisl condimentum id venenatis. Egestas integer eget aliquet nibh praesent tristique magna sit. Egestas quis ipsum suspendisse ultrices. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Vehicula ipsum a arcu cursus vitae. Ac orci phasellus egestas tellus rutrum. Dolor purus non enim praesent elementum facilisis. Hendrerit gravida rutrum quisque non. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Tristique risus nec feugiat in fermentum posuere urna nec. Porta nibh venenatis cras sed felis eget velit. At ultrices mi tempus imperdiet nulla. Feugiat vivamus at augue eget arcu dictum varius.",
      ],
      images: [
        { src: "background.jpeg", alt: "Water Boom 1" },
        { src: "bg2.jpg", alt: "Water Boom 2" },
      ],
    },
  ];

  return (
    <CardContent>
      {sections.map((section, index) => (
        <Box key={index} mb={4} id={section.id}>
          <Typography variant="h4" gutterBottom>
            {section.header}
          </Typography>
          {section.description.map((paragraph, idx) => (
            <React.Fragment key={idx}>
              <Typography variant="body1" paragraph style={{ textAlign: "justify" }}>
                {paragraph}
              </Typography>
              {idx < section.description.length - 1 && <br />}
            </React.Fragment>
          ))}
          <Carousel images={section.images} />
        </Box>
      ))}
    </CardContent>
  );
}

export default Content;
