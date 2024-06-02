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
import { Tooltip, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

function InteractiveMaps() {
  const navigate = useNavigate();

  const StyledSvg = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 200,
    left: 500,
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
    top: 350,
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
    top: 330,
    left: 960,
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

  const StyledSvg3 = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 240,
    left: 870,
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

  const StyledSvg4 = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 210,
    left: 1010,
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

  const StyledSvg5 = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 150,
    left: 800,
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

  const StyledSvg6 = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 30,
    left: 800,
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

  const StyledSvg7 = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 50,
    left: 700,
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

  const StyledSvg8 = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 70,
    left: 580,
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

  const StyledSvg9 = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 40,
    left: 300,
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

  const StyledSvg10 = styled("svg")(({ theme }) => ({
    position: "absolute",
    top: 70,
    left: 230,
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

  const handleClickPinpoint = (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    navigate(`/pages/facility?section=${id}`);
  };

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
            <Tooltip title="Kolam Renang" placement="top">
              <StyledSvg
                id="kolam-renang"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg>
            </Tooltip>
            <Tooltip title="Camping Ground & PlayGround" placement="top">
              <StyledSvg1
                id="camping-ground"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg1>
            </Tooltip>
            <Tooltip title="Kolam Ikan Dewa" placement="top">
              <StyledSvg2
                id="kolam-ikan-dewa"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg2>
            </Tooltip>
            <Tooltip title="Parking Area" placement="top">
              <StyledSvg3
                id="tempat-parkir"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg3>
            </Tooltip>
            <Tooltip title="Masjid" placement="top">
              <StyledSvg4
                id="musholla"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg4>
            </Tooltip>
            <Tooltip title="Sepeda Air" placement="top">
              <StyledSvg5
                id="sepeda-air"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg5>
            </Tooltip>
            <Tooltip title="Tempat Makan" placement="top">
              <StyledSvg6
                id="tempat-makan"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg6>
            </Tooltip>
            <Tooltip title="Berkuda & Camping Ground" placement="top">
              <StyledSvg7
                id="berkuda"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg7>
            </Tooltip>
            <Tooltip title="Sepeda Layang" placement="top">
              <StyledSvg8
                id="sepeda-layang"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg8>
            </Tooltip>
            <Tooltip title="Kantor Staff" placement="top">
              <StyledSvg9
                id="kantor-staff"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg9>
            </Tooltip>
            <Tooltip title="Gerbang Masuk" placement="top">
              <StyledSvg10
                id="gerbang-masuk"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClickPinpoint}
              >
                <path
                  d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                  fill="#4793AF"
                  stroke="#000"
                  strokeWidth="0.5"
                />
              </StyledSvg10>
            </Tooltip>
          </Grid>
          <MKBox
            component="img"
            src={require("assets/images/map_linggarjati.jpg")}
            color="white"
            variant="gradient"
            borderRadius="xl"
            opacity={1}
            sx={{
              boxShadow: "0 9px 10px 0 rgba(0, 0, 0, 0.2)",
              ml: "15%",
              mr: "auto",
              width: "1000px",
              height: "auto",
              pointerEvents: "none",
            }}
          />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InteractiveMaps;
