import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import PolicyDetailsStyles from "../PolicyDetailsStyles";
import WhiteButton from "../commonComponents/WhiteButton";
import verticalEllipse from "../../assets/vertical_ellipse.svg";

const buttonText = [
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
  lineHeight: "18px",
  fontWeight: 300,
  fontStyle: "normal",
  "@media (max-width: 599px)": {},
};

const quickStyle = {
  marginTop: "26px",
  marginLeft: "20px",
  color: "#1D252B",
  fontFamily: "Noto Sans",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "20px",
  marginBottom: "13px",

  "@media (max-width: 599px)": {
    display: "none",
  },
  "@media (min-width: 600px) and (max-width: 1024px)": {},
  "@media (min-width: 1024px) and (max-width: 1920px)": {},
};

const BasicInfoCardQuickActions: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <Box
      sx={PolicyDetailsStyles.BasicInfoQuickActionContainer}
      aria-label="Quick Actions Container"
    >
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            marginBottom: "15px",
            marginLeft: "20px",
            marginRight: "20px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <WhiteButton
              buttonText={"File a claim"}
              buttonStyles={buttonStyles}
            />
          </Box>
          <Box>
            <img src={verticalEllipse} alt="vertical_ellipse" />
          </Box>
        </Box>
      ) : (
        <>
          <Typography sx={quickStyle}>Quick actions</Typography>
          <Box sx={PolicyDetailsStyles.BasicInfoQuickActionCard}>
            {buttonText.map((text, index) => (
              <WhiteButton
                key={index}
                buttonText={text}
                buttonStyles={buttonStyles}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default BasicInfoCardQuickActions;
