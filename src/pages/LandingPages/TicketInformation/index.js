// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CenteredFooter from "examples/Footers/CenteredFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import { useRef, React, useState, useEffect } from "react";

//spring library
import { useSpring, animated } from "@react-spring/web";
import { useScroll } from "react-use";

//src image
import layer1 from "assets/images/information-ticket/1.png";
import layer2 from "assets/images/information-ticket/2.png";
import layer3 from "assets/images/information-ticket/3.png";
import layer4 from "assets/images/information-ticket/4.png";
import layer5 from "assets/images/information-ticket/5.png";
import layer6 from "assets/images/information-ticket/6.png";
import layer7 from "assets/images/information-ticket/7.png";
import layer8 from "assets/images/information-ticket/8.png";
import bgImage from "assets/images/information-ticket/Background.png";
import StyledTypography from "components/StyledTypography";

const TicketInformation = () => {
  const AnimatedBox = animated(MKBox);
  const initialSpringProps1 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t }, // ease-in effect
    delay: 800,
  });

  const initialSpringProps2 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t }, // ease-in effect
    delay: 1000,
  });

  const initialSpringProps3 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t }, // ease-in effect
    delay: 1300,
  });

  const initialSpringProps4 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t }, // ease-in effect
    delay: 1000,
  });

  const initialSpringProps5 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t }, // ease-in effect
    delay: 1000,
  });

  const initialSpringProps6 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t }, // ease-in effect
    delay: 1000,
  });

  const initialSpringProps7 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t }, // ease-in effect
    delay: 1000,
  });

  const initialSpringProps8 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t }, // ease-in effect
    delay: 1000,
  });

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      {/* section_1 */}
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          position: "relative",
          zIndex: "2",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={15} justifyContent="center" mx="auto">
            <StyledTypography variant="h1">
              Informasi Ticket Taman Wisata Linggarjati
            </StyledTypography>
          </Grid>
          <AnimatedBox
            component="img"
            src={layer1}
            alt="Ticket"
            style={{
              ...initialSpringProps1,
            }}
            sx={{
              width: "auto",
              height: "auto",
              zIndex: "8",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "150%",
              right: "-21.7%",
            }}
          />

          <AnimatedBox
            component="img"
            src={layer2}
            alt="Ticket"
            style={{
              ...initialSpringProps2,
            }}
            sx={{
              width: "auto",
              height: "auto",
              zIndex: "7",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "100%",
              right: "-21.7%",
            }}
          />
          <AnimatedBox
            component="img"
            src={layer3}
            alt="Ticket"
            style={{
              ...initialSpringProps3,
            }}
            sx={{
              width: "auto",
              height: "auto",
              zIndex: "6",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "100%",
              right: "15%",
            }}
          />
        </Container>
      </MKBox>
      {/* section_2 */}
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundColor: "#FFC420",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          zIndex: "9",
          position: "relative",
        }}
      ></MKBox>
      {/* section_3 */}
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundColor: "#FFC470",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      ></MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter />
      </MKBox>
    </>
  );
};

export default TicketInformation;
