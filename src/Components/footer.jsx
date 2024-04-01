import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#cccccc",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
        © 2024 FTEC5520 Group8 . All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
        <Link href="/about" color="inherit" sx={{ marginRight: "10px" }}>
          About
        </Link>
        <Link href="/privacy" color="inherit" sx={{ marginRight: "10px" }}>
          Privacy Policy
        </Link>
        <Link href="/terms" color="inherit" sx={{ marginRight: "10px" }}>
          Terms of Service
        </Link>
        <Link href="/contact" color="inherit">
          Contact Us
        </Link>
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
        
      </Typography>
    </Box>

// Tsz Yau Florence LI	1155093282
// Qiujuan LIU	1155199558
// Wenlu SUN	1155200089
// Ka Lun TANG	1155143584
// Kexin WANG	1155209282
// Wen WANG	1155209274
// Yuling WANG	1155200698
// Tak Kai WONG	1155126532

  );
};

export default Footer;