// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

//content
import Content from "pages/Facility/Content";

// Images
import bgImage from "assets/images/Real_pic/background2.JPG";
import FooterWithMaps from "examples/Footers/FooterWithMaps";

function Facility() {
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
              Fasilitas Dan Wisata
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
        <Content header="Fasilitas Dan Wisata" />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <FooterWithMaps />
      </MKBox>
    </>
  );
}

export default Facility;
