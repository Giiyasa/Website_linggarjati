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
            <Grid item xs container direction="column" pl={3} spacing={2}>
              <Typography variant="h3" component="h2">
                <p
                  style={{
                    fontSize: "0.5em",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  Taman Wisata Linggarjati adalah destinasi yang memukau, terletak di kawasan
                  Cirebon, Jawa Barat. Menyajikan keindahan alam yang memikat dan sejarah yang kaya,
                  taman ini menawarkan pengalaman yang tak terlupakan bagi pengunjungnya.
                  Dikelilingi oleh kebun teh yang hijau subur, taman ini memanjakan mata dengan
                  pemandangan yang memesona. Langit biru yang terbentang luas di atasnya memberikan
                  kesan damai dan menenangkan.
                </p>
                <br />
                <p style={{ fontSize: "0.5em", textAlign: "justify", textJustify: "inter-word" }}>
                  Selain keindahan alamnya, Taman Wisata Linggarjati juga memiliki nilai sejarah
                  yang penting. Tempat ini menjadi saksi bisu dari peristiwa bersejarah, yakni
                  penandatanganan Perjanjian Linggarjati pada tahun 1946 antara Indonesia dan
                  Belanda. Pengunjung dapat mengunjungi bangunan bersejarah dan museum yang
                  menyimpan artefak serta informasi terkait peristiwa tersebut. Bagi para petualang,
                  taman ini juga menyediakan berbagai kegiatan menarik.
                </p>
                <br />
                <p style={{ fontSize: "0.5em", textAlign: "justify", textJustify: "inter-word" }}>
                  Mulai dari trekking di sekitar kebun teh, bersepeda menelusuri jalur-jalur indah,
                  hingga piknik santai di bawah naungan pohon-pohon rindang. Tidak hanya itu, Taman
                  Wisata Linggarjati juga memiliki fasilitas lengkap seperti area parkir yang luas,
                  warung makan dengan sajian kuliner khas daerah, serta tempat istirahat yang nyaman
                  bagi pengunjung. Dengan segala pesonanya, Taman Wisata Linggarjati menjadi
                  destinasi yang sempurna untuk menghabiskan waktu bersama keluarga, menikmati alam,
                  serta memahami lebih dalam tentang sejarah dan budaya Indonesia.
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
