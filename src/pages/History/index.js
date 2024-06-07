import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FooterWithMaps from "examples/Footers/FooterWithMaps";
import CastleIcon from "@mui/icons-material/Castle";
import GavelIcon from "@mui/icons-material/Gavel";
import BuildIcon from "@mui/icons-material/Build";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ConstructionIcon from "@mui/icons-material/Construction";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import MKTypography from "components/MKTypography";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Styled components

const MainContainer = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(0deg, rgba(178,254,250,1) 0%, rgba(14,210,247,1) 50%, rgba(0,123,147,1) 100%)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(6),
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const CustomTimelineItem = styled(TimelineItem)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(20),
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(1),
  },
}));

const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const CustomTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  minHeight: theme.spacing(20),
  [theme.breakpoints.up("md")]: {
    minHeight: theme.spacing(30),
  },
}));

const timelineData = [
  {
    title: "Era Kerajaan Cirebon",
    description: `Setelah berdirinya Kerajaan Cirebon, Linggarjati menjadi bagian dari kekuasaan Cirebon. Salah satu peninggalan sejarah yang ada di Linggarjati adalah sebuah kolam yang dikenal dengan nama Balong Kagungan, yang berarti "kolam kepunyaan keraton"`,
    icon: <CastleIcon />,
  },
  {
    title: "Zaman Pemerintahan Hindia Belanda",
    description:
      "Setelah pembentukan Kabupaten Kuningan, Linggarjati menjadi bagian dari wilayah administratif ini. Hubungan antara Linggarjati dan Keraton Cirebon yang sebelumnya erat, perlahan mulai berkurang seiring waktu dan akhirnya terputus sepenuhnya.",
    icon: <GavelIcon />,
  },
  {
    title: "Pembangunan oleh Belanda (1922)",
    description:
      "Kolam Balong Kagungan, yang awalnya merupakan bagian dari warisan Keraton Cirebon, diambil alih oleh Bupati Belanda dan kemudian dibangun menjadi kolam renang. Kolam renang ini kini terletak di area Obyek Wisata Linggarjati Indah, yang dikenal juga sebagai lokasi kolam lama.",
    icon: <BuildIcon />,
  },
  {
    title: "Pengelolaan oleh Pemerintah Daerah Tingkat II Kuningan",
    description:
      "Obyek Wisata Linggarjati, yang kini dikelola oleh Pemerintah Daerah Tingkat II Kuningan, menawarkan berbagai fasilitas, termasuk renang tradisional dan sebuah setu atau danau kecil. Tempat ini menjadi daya tarik wisata utama, memadukan kekayaan sejarah dengan keindahan alam dan fasilitas rekreasi yang menyenangkan.",
    icon: <AccountBalanceIcon />,
  },
  {
    title: "Upaya Pengembangan oleh Investor (1975-1980)",
    description:
      "Beberapa investor pernah mencoba mengembangkan Obyek Wisata Linggarjati dengan berbagai proyek, namun sayangnya upaya tersebut tidak berhasil. Akibatnya, pengelolaan dan pengembangan wisata ini akhirnya dikembalikan kepada Pemerintah Daerah Tingkat II Kuningan.",
    icon: <BusinessCenterIcon />,
  },
  {
    title: "Pembangunan oleh PT. Linggarjati Wigena (1987)",
    description:
      "Pada tahun 1985, Bapak H. Ayong Madkur memulai pembangunan Taman Wisata Linggarjati berdasarkan Surat Keputusan Menteri Dalam Negeri No. 556-1.620 yang dikeluarkan pada tanggal 15 Juli 1985. Untuk memperkuat legalitas proyek ini, Surat Perijinan resmi disahkan di hadapan Notaris Icheu Tresnawiyah SH pada 28 Desember 1987. Berdasarkan perjanjian tersebut, hak pengguna usaha untuk mengelola taman wisata ini diberikan hingga tahun 2019.",
    icon: <ConstructionIcon />,
  },
  {
    title: "Penerusan oleh Keturunan H. Ayong Madkur (2019-sekarang)",
    description:
      "Pada tahun 2019, hak pengguna usaha untuk mengelola Taman Wisata Linggarjati dilanjutkan oleh keturunan Bapak H. Ayong Madkur. Hingga saat ini, keluarga H. Ayong Madkur tetap bertanggung jawab atas pengelolaan Obyek Wisata Linggarjati Indah, berupaya mempertahankan dan terus mengembangkan wisata ini. Mereka berkomitmen untuk memastikan keberlanjutan dan peningkatan fasilitas, sehingga Linggarjati Indah tetap menjadi destinasi wisata yang menarik bagi pengunjung.",
    icon: <FamilyRestroomIcon />,
  },
];

function History() {
  const timelineRefs = useRef([]);
  const descriptionRefs = useRef([]);

  useEffect(() => {
    // Animasi muncul saat scroll
    descriptionRefs.current.forEach((ref, index) => {
      gsap.from(ref, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        scrollTrigger: {
          trigger: ref,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <>
      <DefaultNavbar routes={routes} sticky />

      <MainContainer>
        <Box sx={{ pt: 20, pb: 10, px: 1, mt: 6 }}>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={500}>
            <MKTypography
              fontweight="bold"
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              textAlign="center"
            >
              TIMELINE SEJARAH ALAM LINGGARJATI
            </MKTypography>
          </Slide>
        </Box>

        <TimelineContainer>
          <Timeline position="alternate">
            {timelineData.map((item, index) => (
              <CustomTimelineItem key={index} ref={(el) => (timelineRefs.current[index] = el)}>
                <TimelineSeparator>
                  <CustomTimelineDot>{item.icon}</CustomTimelineDot>
                  {index < timelineData.length - 1 && <CustomTimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    ref={(el) => (descriptionRefs.current[index] = el)}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      p: 3,
                      borderRadius: 2,
                      boxShadow: 3,
                    }}
                  >
                    <Typography variant="h4" component="h2" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </Box>
                </TimelineContent>
              </CustomTimelineItem>
            ))}
          </Timeline>
        </TimelineContainer>
      </MainContainer>
      <Box pt={6} px={1} mt={6}>
        <FooterWithMaps />
      </Box>
    </>
  );
}

export default History;
