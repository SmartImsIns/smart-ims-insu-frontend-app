import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import verticalEllipse from "../../assets/vertical_ellipse.svg";
import WhiteButton from "../common/WhiteButton";
import { BasicInfoCardStyles } from "./BasicInfoCardStyles";

const buttonText = [
  "File a claim",
  "Contact",
  "Enable Auto Pay",
  "Pay",
  "Download Policy",
  "More",
];
const buttonStyle = {
  textTransform: "none",
  display: "flex",
  height: "35px",
  width: "fit-content",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  border: "1px solid #B3C2C8",
  backgroundColor: "#FFF",
  padding: "16px 8.5px",
  minWidth: "151px",
  flexShrink: 0,
  color: "#1D252B",
  fontSize: "16px",
  fontFamily: "Noto Sans",
  lineHeight: "110%",
  fontWeight: 300,
  fontStyle: "normal",
};

const quickStyle = {
  color: "#1D252B",
  fontFamily: "Noto Sans",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "110%",
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
      sx={BasicInfoCardStyles.BasicInfoQuickActionContainer}
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
              buttonStyles={buttonStyle}
            />
          </Box>
          <Box>
            <img src={verticalEllipse} alt="vertical_ellipse" />
          </Box>
        </Box>
      ) : (
        <>
          <Typography sx={quickStyle}>{"Quick Actions"}</Typography>
          <Box sx={BasicInfoCardStyles.BasicInfoQuickActionCard}>
            {buttonText.map((text, index) => (
              <WhiteButton
                key={index}
                buttonText={text}
                buttonStyles={buttonStyle}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default BasicInfoCardQuickActions;
