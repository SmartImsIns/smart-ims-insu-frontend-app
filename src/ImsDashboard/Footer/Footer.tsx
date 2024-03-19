import { Box, Typography } from "@mui/material";
import FooterStyle from "./FooterStyles";
const Footer = () => {
  return (
    <Box sx={FooterStyle.footerContainer}>
      <Box>
        <Typography sx={FooterStyle.leftText}>© 2024 Smart IMS. All rights reserved.</Typography>
      </Box>
      <Box>
        <Box sx={FooterStyle.footerItems}>
          <Typography sx={FooterStyle.rightText}>Terms of Service</Typography>
          <Typography sx={FooterStyle.rightText}> Privacy Policy</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;