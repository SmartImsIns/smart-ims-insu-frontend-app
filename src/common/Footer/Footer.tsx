import { memo } from "react";
import { Box, Typography } from "@mui/material";
import FooterStyles from "./FooterStyles";

const Footer = memo(() => {
  return (
    <Box sx={FooterStyles.footerContainer}>
      <Typography sx={FooterStyles.copyRights}>
        © 2024 Smart IMS. All rights reserved.
      </Typography>
      <Box sx={FooterStyles.footerItems}>
        <Typography sx={FooterStyles.rightText}>Terms of Service </Typography>
        <Typography sx={FooterStyles.rightText}> Privacy Policy</Typography>
      </Box>
    </Box>
  );
});

export default Footer;
