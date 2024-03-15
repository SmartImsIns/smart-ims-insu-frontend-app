import React from "react";
import { Box, Typography } from "@mui/material";
import PolicyDetailsStyles from "../PolicyDetailsStyles";
import WhiteButton from "../common components/WhiteButton";

const ButtonText = [
  "File a claim",
  "Contact Agent",
  "Enable Auto Pay",
  "Pay Now",
  "Download Policy",
  "More",
];

const buttonStyles = {
  color: "#1D252B",
  width: "151px",
  height: "35px",
  borderRadius: "20px",
  bgcolor: "#FFF",
  fontFamily: "Noto Sans",
  lineHeight: "110%",
  fontWeight: 300,
  fontStyle: "normal",
};

const quickStyle = {
  marginTop: "26px",
  marginLeft: "20px",
  color: "#1D252B",
  fontFamily: "Noto Sans",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "110%", // 19.8px
  marginBottom: "13px",
};

function BasicInfoCardQuickActions() {
  return (
    <Box sx={PolicyDetailsStyles.BasicInfoQuickActionContainer}>
      <Box>
        <Typography sx={quickStyle}>Quick actions</Typography>
      </Box>
      <Box sx={PolicyDetailsStyles.BasicInfoQuickActionCard}>
        {ButtonText?.map((text, index) => (
          <WhiteButton
            key={index}
            buttonText={text}
            buttonStyles={buttonStyles}
          />
        ))}
      </Box>
    </Box>
  );
}

export default BasicInfoCardQuickActions;
