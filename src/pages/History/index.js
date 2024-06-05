import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
import routes from "routes";
import bgImage from "assets/images/bg3.jpg";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

// Styled components
const TimelineContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(6),
  backgroundSize: "cover",
  minHeight: "100vh",
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
  { title: "Event 1", description: "Description for event 1", icon: "📅" },
  { title: "Event 2", description: "Description for event 2", icon: "🎉" },
  { title: "Event 3", description: "Description for event 3", icon: "🏆" },
];

function History() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />

      <Box sx={{ pt: 20, pb: 10, px: 1, mt: 6 }}>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={500}>
          <Typography variant="h3" align="center" gutterBottom>
            Sejarah Taman Linggarjati
          </Typography>
        </Slide>
      </Box>

      <TimelineContainer>
        <Timeline position="alternate">
          {timelineData.map((item, index) => (
            <Slide
              key={index}
              direction="up"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={500 + index * 300}
            >
              <CustomTimelineItem>
                <TimelineSeparator>
                  <CustomTimelineDot>
                    <Typography variant="h5">{item.icon}</Typography>
                  </CustomTimelineDot>
                  {index < timelineData.length - 1 && <CustomTimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Box
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
            </Slide>
          ))}
        </Timeline>
      </TimelineContainer>

      <Box pt={6} px={1} mt={6}>
        <CenteredFooter />
      </Box>
    </>
  );
}

export default History;
