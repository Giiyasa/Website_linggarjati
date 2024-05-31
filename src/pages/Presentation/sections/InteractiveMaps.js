/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Images
import DividerWithText from "components/Divider";
import boxShadow from "assets/theme/functions/boxShadow";
import { styled } from "@mui/material";

function InteractiveMaps() {
  const StyledSvg = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 290,
    left: 400,
    zIndex: 1000,
    cursor: "pointer",
    transition: "transform 0.3s, fill 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
    },
    "&:hover path": {
      fill: "#216582",
    },
    "&:hover circle": {
      fill: "#d0d0d0",
    },
  }));

  const StyledSvg1 = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 500,
    left: 350,
    zIndex: 1000,
    cursor: "pointer",
    transition: "transform 0.3s, fill 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
    },
    "&:hover path": {
      fill: "#216582",
    },
    "&:hover circle": {
      fill: "#d0d0d0",
    },
  }));

  const StyledSvg2 = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 450,
    left: 1050,
    zIndex: 1000,
    cursor: "pointer",
    transition: "transform 0.3s, fill 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
    },
    "&:hover path": {
      fill: "#216582",
    },
    "&:hover circle": {
      fill: "#d0d0d0",
    },
  }));

  return (
    <MKBox component="section">
      <DividerWithText text="Peta Taman Linggarjati" />
      <Container>
        <Grid container spacing={3} sx={{ position: "relative" }}>
          <Grid
            item
            xs={12}
            lg={4}
            justifyContent="center"
            sx={{ alignItems: "center", position: "relative" }}
          >
            <StyledSvg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle cx="12" cy="12" r="12" fill="#f0f0f0" />

              <path
                d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                fill="#4793AF"
                stroke="#000"
                strokeWidth="0.5"
              />
            </StyledSvg>
            <StyledSvg1
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle cx="12" cy="12" r="12" fill="#f0f0f0" />

              <path
                d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                fill="#4793AF"
                stroke="#000"
                strokeWidth="0.5"
              />
            </StyledSvg1>
            <StyledSvg2
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle cx="12" cy="12" r="12" fill="#f0f0f0" />

              <path
                d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                fill="#4793AF"
                stroke="#000"
                strokeWidth="0.5"
              />
            </StyledSvg2>
          </Grid>
          <MKBox
            component="img"
            src={require("assets/images/map_linggarjati.jpg")}
            color="white"
            variant="gradient"
            minHeight="70vh"
            borderRadius="xl"
            opacity={1}
            sx={{ boxShadow: "0 9px 10px 0 rgba(0, 0, 0, 0.2)" }}
          />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InteractiveMaps;
