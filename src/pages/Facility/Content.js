import React from "react";
import { Box, Typography, CardContent } from "@mui/material";
import Carousel from "./Coursel_images";
import { useLocation } from "react-router-dom";
import { sections } from "./sectionData";

function Content() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get("section");

  const currentSection = sections.find(
    (s) => s.header.toLowerCase().replace(/\s+/g, "-") === section
  );

  return (
    <CardContent>
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          {currentSection ? currentSection.header : "Semua Fasilitas"}
        </Typography>
        {currentSection
          ? currentSection.description.map((paragraph, idx) => (
              <React.Fragment key={idx}>
                <Typography variant="body1" paragraph style={{ textAlign: "justify" }}>
                  {paragraph}
                </Typography>
                {idx < currentSection.description.length - 1 && <br />}
                <Carousel images={currentSection.images} />
              </React.Fragment>
            ))
          : sections.map((section, idx) => (
              <Box key={idx} mb={4}>
                <Typography variant="h5" gutterBottom>
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
      </Box>
    </CardContent>
  );
}

export default Content;
