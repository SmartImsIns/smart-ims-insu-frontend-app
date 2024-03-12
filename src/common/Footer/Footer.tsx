import { memo } from "react";
import { Box, Typography } from "@mui/material";

const Footer = memo(() => {
  return (
    <Box component="footer"
    sx={{
      display:'flex',
      backgroundColor: "gray",
      color: "#fff",
      textAlign: "center",
      alignItems:'center',
      justifyContent:'space-around',
      padding: "5px",
      position: "fixed",
      bottom: 0,
      width: "100%",
    }}>
      <Box >
        <Typography>&#169; 2024 Smart IMS. All rights reserved.</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
    <Typography sx={{ marginRight: 2 }}>Terms of Service</Typography>
    <Typography sx={{ marginLeft: 2 }}>Privacy Policy</Typography>
  </Box>
    </Box>
  );
});

export default Footer;
