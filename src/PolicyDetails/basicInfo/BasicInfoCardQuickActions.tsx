import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import verticalEllipse from "../../assets/vertical_ellipse.svg";
import WhiteButton from "../common/WhiteButton";
import { BasicInfoCardStyles } from "./BasicInfoCardStyles";
import { buttonText } from "./QuickActionButtonsList";
import { BasicInfoQuickStyles } from "./BasicInfoQuickStyles";

const BasicInfoCardQuickActions: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <Box
      sx={BasicInfoQuickStyles.BasicInfoQuickActionContainer}
      aria-label="Quick Actions Container"
    >
      {isMobile ? (
        <Box sx={BasicInfoQuickStyles.mobileContainer}>
          <Box>
            <WhiteButton
              buttonText={"File a claim"}
              buttonStyles={BasicInfoQuickStyles.buttonStyle}
            />
          </Box>
          <Box>
            <img src={verticalEllipse} alt="vertical_ellipse" />
          </Box>
        </Box>
      ) : (
        <>
          <Typography sx={BasicInfoCardStyles.quickStyle}>
            {"Quick Actions"}
          </Typography>
          <Box sx={BasicInfoQuickStyles.BasicInfoQuickActionCard}>
            {buttonText.map((text, index) => (
              <WhiteButton
                key={index}
                buttonText={text}
                buttonStyles={BasicInfoQuickStyles.buttonStyle}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default BasicInfoCardQuickActions;
