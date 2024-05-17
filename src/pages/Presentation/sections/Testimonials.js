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
import Divider from "@mui/material/Divider";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import { useRef, useState } from "react";

import { useSpring, animated } from "react-spring";

function Information() {
  const [showText, setShowText] = useState(false);
  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox4, setShowBox4] = useState(false);
  const [showBox5, setShowBox5] = useState(false);
  const [showBox6, setShowBox6] = useState(false);
  const [showBox7, setShowBox7] = useState(false);
  const [lastClickedBox, setLastClickedBox] = useState(null);

  const boxAnimation1 = useBoxAnimation(showBox1);
  const boxAnimation2 = useBoxAnimation(showBox2);
  const boxAnimation3 = useBoxAnimation(showBox3);
  const boxAnimation4 = useBoxAnimation(showBox4);
  const boxAnimation5 = useBoxAnimation(showBox5);
  const boxAnimation6 = useBoxAnimation(showBox6);
  const boxAnimation7 = useBoxAnimation(showBox7);

  const textAnimation = useTextAnimation(showText);

  function useBoxAnimation(showBox) {
    return useSpring({
      opacity: showBox ? 1 : 0,
      transform: showBox ? "scale(1)" : "scale(0.5)",
      from: { opacity: 0, transform: "scale(0.5)" },
      config: { tension: 300, friction: 20 },
    });
  }

  // Custom React Hook for text animation
  function useTextAnimation(showText) {
    return useSpring({
      opacity: showText ? 1 : 0,
      transform: showText ? "translateY(0)" : "translateY(-20px)",
      from: { opacity: 0, transform: "translateY(-20px)" },
      config: { duration: 500 },
    });
  }

  function handleClick(event, svgType) {
    event.preventDefault();

    // Close box if clicked twice
    if (lastClickedBox === svgType) {
      closeBox(svgType);
      setLastClickedBox(null);
      return;
    }

    // Close the previously opened box
    if (lastClickedBox) {
      closeBox(lastClickedBox);
    }

    // Determine which box to show based on svgType
    switch (svgType) {
      case "svg1":
        setShowBox1(true);
        setShowText(true);
        console.log("Informasi untuk SVG pertama");
        break;
      case "svg2":
        setShowText(true);
        setShowBox2(true);
        console.log("Informasi untuk SVG kedua");
        break;
      case "svg3":
        setShowText(true);
        setShowBox3(true);
        console.log("Informasi untuk SVG ketiga");
        break;
      case "svg4":
        setShowText(true);
        setShowBox4(true);
        console.log("Informasi untuk SVG keempat");
        break;
      case "svg5":
        setShowText(true);
        setShowBox5(true);
        console.log("Informasi untuk SVG kelima");
        break;
      case "svg6":
        setShowText(true);
        setShowBox6(true);
        console.log("Informasi untuk SVG keenam");
        break;
      case "svg7":
        setShowText(true);
        setShowBox7(true);
        console.log("Informasi untuk SVG ketujuh");
        break;
      default:
        break;
    }

    setLastClickedBox(svgType);
  }

  function closeBox(boxType) {
    switch (boxType) {
      case "svg1":
        setShowBox1(false);
        setShowText(false);
        break;
      case "svg2":
        setShowBox2(false);
        setShowText(false);
        break;
      case "svg3":
        setShowBox3(false);
        setShowText(false);
        break;
      case "svg4":
        setShowBox4(false);
        setShowText(false);
        break;
      case "svg5":
        setShowBox5(false);
        setShowText(false);
        break;
      case "svg6":
        setShowBox6(false);
        setShowText(false);
        break;
      case "svg7":
        setShowBox7(false);
        setShowText(false);
        break;
      default:
        break;
    }
  }

  return (
    <MKBox component="section">
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Gambaran Peta Yang bisa Kamu Lihat</MKTypography>
          {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography> */}
          <MKTypography variant="body2" color="text" mb={2}>
            Peta Di bawah ini bisa kamu coba untuk melihat denah wisata di taman Linggarjati. Bisa
            Kamu Klik Icon Nya untuk membaca keterangannya
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ position: "relative" }}>
          <Grid
            item
            xs={12}
            lg={4}
            justifyContent="center"
            sx={{ alignItems: "center", position: "relative" }}
          >
            <svg
              onClick={(e) => handleClick(e, "svg1")}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "350px",
                left: "450px",
                zIndex: 1000,
                cursor: "pointer",
              }}
            >
              <path
                d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                fill="#4793AF"
              />
            </svg>
            <svg
              onClick={(e) => handleClick(e, "svg2")}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "250px",
                left: "600px",
                zIndex: 1000,
                cursor: "pointer",
              }}
            >
              <path
                d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                fill="#7469B6"
              />
            </svg>
            <svg
              onClick={(e) => handleClick(e, "svg3")}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "230px",
                left: "800px",
                zIndex: 1000,
                cursor: "pointer",
              }}
            >
              <path
                d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                fill="#FFC470"
              />
            </svg>
            <svg
              onClick={(e) => handleClick(e, "svg4")}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "300px",
                left: "900px",
                zIndex: 1000,
                cursor: "pointer",
              }}
            >
              <path
                d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                fill="#151515"
              />
            </svg>
            <svg
              onClick={(e) => handleClick(e, "svg5")}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "230px",
                left: "1080px",
                zIndex: 1000,
                cursor: "pointer",
              }}
            >
              <path
                d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                fill="#7ABA78"
              />
            </svg>
            <svg
              onClick={(e) => handleClick(e, "svg6")}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "380px",
                left: "1000px",
                zIndex: 1000,
                cursor: "pointer",
              }}
            >
              <path
                d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                fill="#FDDE55"
              />
            </svg>
            <svg
              onClick={(e) => handleClick(e, "svg7")}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "330px",
                left: "1100px",
                zIndex: 1000,
                cursor: "pointer",
              }}
            >
              <path
                d="M 12 0 C 7.316 0 3.429 3.886 3.429 8.57 c 0 3.03 2.194 6.986 7.536 12.379 a 0.749 0.749 0 0 0 1.162 0 c 3.627 -3.714 5.745 -4.528 8.026 -10.425 C 20.571 3.886 16.684 0 12 0 z m 0 12.856 c -2.06 0 -3.715 -1.656 -3.715 -3.715 c 0 -2.06 1.656 -3.715 3.715 -3.715 s 3.715 1.656 3.715 3.715 c 0 2.06 -1.655 3.715 -3.715 3.715 z"
                fill="#FF70AB"
              />
            </svg>

            <MKBox
              component="img"
              src={require("assets/images/map_linggarjati.jpg")}
              color="white"
              variant="gradient"
              borderRadius="lg"
              shadow="xl"
              opacity={1}
              sx={{
                ml: "50%",
                mr: "auto",
                width: "1000px",
                height: "auto",
                pointerEvents: "none",
              }}
            />
          </Grid>
        </Grid>
        {showText && (
          <Grid container item mt={5} xs={12} justifyContent="center">
            <animated.div style={textAnimation}>
              {showText && (
                <Typography variant="h3" component="h2">
                  Apa aja sih yang ada di Lokasi Itu?
                </Typography>
              )}
            </animated.div>
          </Grid>
        )}
        <Grid
          container
          item
          xs={12}
          // lg={6}
          mt={10}
          justifyContent="center"
          // sx={{ mx: "auto", textAlign: "center" }}
        >
          <Grid container item xs={12} justifyContent="center">
            <animated.div style={boxAnimation1}>
              {showBox1 && (
                <MKBox
                  color="white"
                  variant="gradient"
                  borderRadius="lg"
                  shadow="xl"
                  opacity={1}
                  sx={{ ml: "auto", mr: "auto", width: "750px" }}
                >
                  <Grid container item xs={11} spacing={3} sx={{ mx: "auto" }}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <div>
                          <List
                            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                            aria-label="contacts"
                          >
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={<span style={{ color: "Black" }}>Camping Ground</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={<span style={{ color: "Black" }}>Playground</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemText
                                  inset
                                  primary={<span style={{ color: "Black" }}>Gazebo</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemText
                                  inset
                                  primary={<span style={{ color: "Black" }}>Gedung Serbaguna</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </MKBox>
              )}
            </animated.div>
            <animated.div style={boxAnimation2}>
              {showBox2 && (
                <MKBox
                  color="white"
                  variant="gradient"
                  borderRadius="lg"
                  shadow="xl"
                  opacity={1}
                  sx={{ ml: "auto", mr: "auto", width: "750px" }}
                >
                  <Grid container item xs={11} spacing={3} sx={{ mx: "auto" }}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <div>
                          <List
                            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                            aria-label="contacts"
                          >
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <span style={{ color: "Black" }}>
                                      Kolam Renang Anak dan Dewasa
                                    </span>
                                  }
                                />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={<span style={{ color: "Black" }}>Kolam arus</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={<span style={{ color: "Black" }}>WaterBoom</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemText
                                  inset
                                  primary={<span style={{ color: "Black" }}>Ruang Ganti</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </MKBox>
              )}
            </animated.div>
            <animated.div style={boxAnimation3}>
              {showBox3 && (
                <MKBox
                  color="white"
                  variant="gradient"
                  borderRadius="lg"
                  shadow="xl"
                  opacity={1}
                  sx={{ ml: "auto", mr: "auto", width: "750px" }}
                >
                  <Grid container item xs={11} spacing={3} sx={{ mx: "auto" }}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <div>
                          <List
                            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                            aria-label="contacts"
                          >
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={<span style={{ color: "Black" }}>Kolam Ikan Dewa</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <span style={{ color: "Black" }}>Kolam Terapi Ikan</span>
                                  }
                                />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemText
                                  inset
                                  primary={<span style={{ color: "Black" }}>Sepeda Air</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemText
                                  inset
                                  primary={<span style={{ color: "Black" }}>Souvenir Shop </span>}
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </MKBox>
              )}
            </animated.div>
            <animated.div style={boxAnimation4}>
              {showBox4 && (
                <MKBox
                  color="white"
                  variant="gradient"
                  borderRadius="lg"
                  shadow="xl"
                  opacity={1}
                  sx={{ ml: "auto", mr: "auto", width: "750px" }}
                >
                  <Grid container item xs={11} spacing={3} sx={{ mx: "auto" }}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <div>
                          <List
                            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                            aria-label="contacts"
                          >
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={<span style={{ color: "Black" }}>Pintu Masuk</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </MKBox>
              )}
            </animated.div>
            <animated.div style={boxAnimation5}>
              {showBox5 && (
                <MKBox
                  color="white"
                  variant="gradient"
                  borderRadius="lg"
                  shadow="xl"
                  opacity={1}
                  sx={{ ml: "auto", mr: "auto", width: "750px" }}
                >
                  <Grid container item xs={11} spacing={3} sx={{ mx: "auto" }}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <div>
                          <List
                            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                            aria-label="contacts"
                          >
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={<span style={{ color: "Black" }}>Staff Office</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </MKBox>
              )}
            </animated.div>
            <animated.div style={boxAnimation6}>
              {showBox6 && (
                <MKBox
                  color="white"
                  variant="gradient"
                  borderRadius="lg"
                  shadow="xl"
                  opacity={1}
                  sx={{ ml: "auto", mr: "auto", width: "750px" }}
                >
                  <Grid container item xs={11} spacing={3} sx={{ mx: "auto" }}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <div>
                          <List
                            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                            aria-label="contacts"
                          >
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={<span style={{ color: "Black" }}>Parking Pot</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </MKBox>
              )}
            </animated.div>
            <animated.div style={boxAnimation7}>
              {showBox7 && (
                <MKBox
                  color="white"
                  variant="gradient"
                  borderRadius="lg"
                  shadow="xl"
                  opacity={1}
                  sx={{ ml: "auto", mr: "auto", width: "750px" }}
                >
                  <Grid container item xs={11} spacing={3} sx={{ mx: "auto" }}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <div>
                          <List
                            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                            aria-label="contacts"
                          >
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <StarIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={<span style={{ color: "Black" }}>Masjid</span>}
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </MKBox>
              )}
            </animated.div>
          </Grid>
        </Grid>

        {/* <Container>
          <Grid container spacing={3} sx={{ mt: 8 }}>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                name="Nick Willever"
                date="1 day ago"
                review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
                rating={5}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                color="info"
                name="Shailesh Kushwaha"
                date="1 week ago"
                review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
                rating={5}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                name="Samuel Kamuli"
                date="3 weeks ago"
                review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
                rating={5}
              />
            </Grid>
          </Grid>
        </Container> */}
        <Divider sx={{ my: 6 }} />

        {/* <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid> */}
      </Container>
    </MKBox>
  );
}

export default Information;
