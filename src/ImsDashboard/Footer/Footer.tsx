import { Box, Typography } from "@mui/material";
import FooterStyle from "./FooterStyles";
import { footerLeftText,termsAndService, privatePolicy } from "../../constants/Constants";

const Footer = () => {
  return (
    <Box sx={FooterStyle.footerContainer}>
      <Box>
        <Typography sx={FooterStyle.leftText}>{footerLeftText}</Typography>
      </Box>
      <Box>
        <Box sx={FooterStyle.footerItems}>
          <Typography sx={FooterStyle.rightText}>{termsAndService}</Typography>
          <Typography sx={FooterStyle.rightText}>{privatePolicy}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;