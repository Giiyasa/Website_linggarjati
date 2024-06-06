import React from "react";
import { Box, Typography } from "@mui/material";

const FooterWithMaps = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" gutterBottom>
            Alamat
          </Typography>
          <Typography variant="body1">
            Linggasana, Cilimus, Kuningan Regency,
            <br />
            West Java 45556
          </Typography>
          <Typography variant="h3" gutterBottom sx={{ marginTop: "20px" }}>
            Kontak
          </Typography>
          <Typography variant="body1">
            Email: tamanlinggarjati@gmail.com
            <br />
            Nomor HP: +62 8815 1443 68 (Bpk.Ozy)
            <br />
            Nomor HP: +62 1321 7755 49 (Bpk.Roni)
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.473062264412!2d108.48987723371944!3d-6.930444357877209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6edfc2b5bc7b9b%3A0x628fb0be26b48fa3!2s4F8G%2BFRJ%2C%20Linggasana%2C%20Kec.%20Cilimus%2C%20Kabupaten%20Kuningan%2C%20Jawa%20Barat%2045556!5e0!3m2!1sen!2sid!4v1684761327000!5m2!1sen!2sid"
            width="500"
            height="400"
            style={{ border: 0, borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            allowFullScreen=""
            loading="lazy"
            title="Taman Wisata Linggarjati"
          ></iframe>
        </Box>
      </Box>
      <Typography variant="body2" color="textSecondary">
        © 2024 Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterWithMaps;
