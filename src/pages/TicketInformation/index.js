import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import { useRef, React, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import layer1 from "assets/images/information-ticket/1.png";
import layer2 from "assets/images/information-ticket/2.png";
import layer3 from "assets/images/information-ticket/3.png";
import layer4 from "assets/images/information-ticket/4.png";
import layer5 from "assets/images/information-ticket/5.png";
import layer6 from "assets/images/information-ticket/6.png";
import bgImage from "assets/images/information-ticket/Background.png";
import bgImage2 from "assets/images/information-ticket/bg_section2.jpg";
import StyledTypography from "components/StyledTypography";
import BirdSvg from "components/BirdSVG";
import { Typography } from "@mui/material";
import PricingCardParkir from "./PricingCardParkir";
import PricingCardTicket from "./PricingCardTicket";
import PricingCardWahana from "./PricingCardWahana";
import FooterWithMaps from "examples/Footers/FooterWithMaps";

const TicketInformation = () => {
  const AnimatedBox = animated(MKBox);
  const initialSpringProps1 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t },
    delay: 800,
  });

  const initialSpringProps2 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t },
    delay: 1000,
  });

  const initialSpringProps3 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t },
    delay: 1300,
  });

  const initialSpringProps4 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t },
    delay: 1600,
  });

  const initialSpringProps5 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t },
    delay: 1800,
  });

  const initialSpringProps6 = useSpring({
    from: { transform: "translateY(500px)" },
    to: { transform: "translateY(0px) rotate(0deg)" },
    config: { tension: 170, friction: 26, easing: (t) => t * t },
    delay: 2000,
  });

  // efek paralax Text
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pricingOptionsTicket = [
    {
      title: "Pejalan Kaki(Weekday)",
      imageSrc: require("assets/images/information-ticket/walker.png"),
      description: "Rp.12.500.00",
    },
    {
      title: "Pejalan Kaki (Weekend)",
      imageSrc: require("assets/images/information-ticket/walker.png"),
      description: "Rp.15.000.00",
    },
  ];

  const pricingOptionsParkir = [
    {
      title: "Roda Dua",
      imageSrc: require("assets/images/information-ticket/motor.png"),
      description: "Rp.9.000.00",
    },
    {
      title: "Roda Empat",
      imageSrc: require("assets/images/information-ticket/Cars.png"),
      description: "Rp.15.000.00",
    },
  ];

  const pricingOptionsWahana = [
    {
      title: "Kolam Renang",
      imageSrc: require("assets/images/information-ticket/logo_kolam.jpg"),
      description: "Rp.10.000.00",
    },
    {
      title: "Sepeda Air",
      imageSrc: require("assets/images/information-ticket/sepeda_air.jpg"),
      description: "Rp.20.000.00",
    },
    {
      title: "Sepeda Gantung",
      imageSrc: require("assets/images/information-ticket/sepeda_gantung.jpg"),
      description: "Rp.20.000.00",
    },
    {
      title: "Sepeda Layang",
      imageSrc: require("assets/images/information-ticket/sepeda_layang.jpg"),
      description: "Rp.7.500.00",
    },
    {
      title: "Kereta Api Mini",
      imageSrc: require("assets/images/information-ticket/kereta_api.jpg"),
      description: "Rp.10.000.00",
    },
    {
      title: "Istana Balon",
      imageSrc: require("assets/images/information-ticket/instana_balon.jpg"),
      description: "Rp.10.000.00",
    },
    {
      title: "Outbond Anak",
      imageSrc: require("assets/images/information-ticket/playground.jpg"),
      description: "Rp.9.000.00",
    },
    {
      title: "Terapi Ikan",
      imageSrc: require("assets/images/information-ticket/terapi_ikan.jpg"),
      description: "Rp.5.000.00",
    },
    {
      title: "Gazebo",
      imageSrc: require("assets/images/information-ticket/gazebo.jpg"),
      description: "Free",
    },
  ];

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
          zIndex: "9",
          transition: "background 1s ease-in-out",
        }}
      >
        <BirdSvg />
        <Container>
          <Grid container item xs={12} lg={15} justifyContent="center" mx="auto">
            <StyledTypography
              sx={{
                transition: "transform 0.5s ease-out",
                transform: `translateY(${offsetY * 0.3}px)`,
                position: "relative",
                zIndex: "5",
              }}
              variant="h1"
            >
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
          <AnimatedBox
            component="img"
            src={layer4}
            alt="Ticket"
            style={{
              ...initialSpringProps4,
            }}
            sx={{
              width: "auto",
              height: "auto",
              zIndex: "5",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "25%",
              right: "-21.7%",
            }}
          />
          <AnimatedBox
            component="img"
            src={layer5}
            alt="Ticket"
            style={{
              ...initialSpringProps5,
            }}
            sx={{
              width: "auto",
              height: "auto",
              zIndex: "4",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "-40%",
              right: "-21.7%",
            }}
          />
          <AnimatedBox
            component="img"
            src={layer6}
            alt="Ticket"
            style={{
              ...initialSpringProps6,
            }}
            sx={{
              width: "auto",
              height: "auto",
              zIndex: "3",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              right: "60%",
            }}
          />
        </Container>
      </MKBox>
      {/* section_2 */}
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage2})`,
          backgroundColor: "#FFC420",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "start center",
          zIndex: "9",
          position: "relative",
        }}
      >
        <Container
          sx={{
            alignItems: "center",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 4,
              mt: 20,
              width: "100%",
              gridColumn: "span 3",
              color: "#FFFFFF",
              textShadow: "3px 3px 0px rgba(0,0,0,0.2);",
            }}
          >
            Harga Ticket
          </Typography>
          {pricingOptionsTicket.map((option, index) => (
            <PricingCardTicket key={index} {...option} />
          ))}
        </Container>
        <Container sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 4,
              width: "100%",
              gridColumn: "span 3",
              color: "#FFFFFF",
              textShadow: "3px 3px 0px rgba(0,0,0,0.2);",
            }}
          >
            Harga Parkir
          </Typography>
          {pricingOptionsParkir.map((option, index) => (
            <PricingCardParkir key={index} {...option} />
          ))}
        </Container>
        <Container sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 4,
              width: "100%",
              gridColumn: "span 3",
              color: "#FFFFFF",
              textShadow: "3px 3px 0px rgba(0,0,0,0.2);",
            }}
          >
            Harga Wahana
          </Typography>
          {pricingOptionsWahana.map((option, index) => (
            <PricingCardWahana key={index} {...option} />
          ))}
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <FooterWithMaps />
      </MKBox>
    </>
  );
};

export default TicketInformation;
