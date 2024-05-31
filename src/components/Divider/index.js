import React from "react";
import { Divider, Typography, Box } from "@mui/material";

const DividerWithText = ({ text }) => {
  return (
    <Box display="flex" alignItems="center" my={6}>
      <Divider
        sx={{
          flexGrow: 1,
          height: "4px",
          borderBottomWidth: "4px",
          backgroundColor: "black",
        }}
      />
      <Typography variant="h2" mx={2}>
        {text}
      </Typography>
      <Divider
        sx={{
          flexGrow: 1,
          height: "4px",
          borderBottomWidth: "4px",
          backgroundColor: "black",
        }}
      />
    </Box>
  );
};

export default DividerWithText;
