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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import { Typography } from "@mui/material";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Profil Singkat
                    <br />
                    Taman Wisata Alam Linggarjati
                  </>
                }
              />
              <RotatingCardBack
                image={bgBack}
                title="Jelajahi Lebih Dalam?"
                description="Baca Perjalanan Pembangunan Taman Wisata Alam Linggarjati ."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Menuju Page Sejarah",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Typography variant="h3" component="h2">
                <p
                  style={{
                    fontSize: "0.5em",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  Taman linggarjati berada di Desa Linggarjati, Kecamatan Cilimus, Kabupaten
                  Kuningan, Jawa Barat. Untuk menuju ke sana dari Alun-Alun Kuningan, kamu dapat
                  mengikuti rute melalui Jalan Aria Kamuning, Jalan Veteran, Jalan Nanggeleng -
                  Cirahayu, dan Jalan Siliwangi di Cijoho. Setelah 2,5 km berada di Jalan Siliwangi,
                  lanjutkan perjalanan menuju Bandorasa Wetan dan ikuti Jalan Bandorasa -
                  Linggarjati hingga kamu sampai di tujuanmu.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
