// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import InteractiveMaps from "pages/Presentation/sections/InteractiveMaps";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/Real_pic/background1.JPG";
import CenteredFooter from "examples/Footers/CenteredFooter";
import BlockWisata from "./sections/BlockWisata";
import BlockFasilitas from "./sections/BlockFasilitas";
import SimpleFooter from "examples/Footers/SimpleFooter";
import FooterWithMaps from "examples/Footers/FooterWithMaps";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKBox
              component="img"
              src={require("assets/images/logo-kabupaten-kuningan.png")}
              width="40%"
              mb={10}
            />
            <MKTypography
              fontweight="bold"
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              textAlign="center"
            >
              TAMAN WISATA ALAM LINGGARJATI
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <InteractiveMaps />
        {/* <Information /> */}
        <BlockWisata />
        <BlockFasilitas />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <FooterWithMaps />
      </MKBox>
    </>
  );
}

export default Presentation;
