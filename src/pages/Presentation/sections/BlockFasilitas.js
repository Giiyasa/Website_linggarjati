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

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
// react-router-dom components

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/BlockFasilitasData";
import DividerWithText from "components/Divider";

const BlockFasilitas = () => {
  const navigate = useNavigate();

  const renderData = data.map(({ title, description, items }) => (
    <Grid container justifyContent="center" sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} md={10}>
        <MKTypography
          variant="body2"
          fontWeight="regular"
          color="secondary"
          mb={1}
          pr={2}
          sx={{ textAlign: "center" }}
        >
          {description}
        </MKTypography>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {items.map(({ image, name, count, route, pro }) => {
              return (
                <Grid item xs={12} md={4} key={name}>
                  <ExampleCard image={image} name={name} count={count} pro={pro} route={route} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <DividerWithText text="Fasilitas" />

      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        ></Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
};

export default BlockFasilitas;
