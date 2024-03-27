import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import verticalEllipse from "../../assets/vertical_ellipse.svg";
import WhiteButton from "../common/WhiteButton";
import { BasicInfoCardStyles } from "./BasicInfoCardStyles";
import { buttonText } from "./QuickActionButtonsList";
import { BasicInfoQuickStyles } from "./BasicInfoQuickStyles";
import { fileClaim } from "../../constants/Constants";

const BasicInfoCardQuickActions: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:899px)");
  const isTablet = useMediaQuery("(min-width:900px) and (max-width:1300px)");
  const buttonsToDisplay = isMobile ? 1 : isTablet ? 4 : buttonText.length;

  return (
    <Box
      sx={BasicInfoQuickStyles.BasicInfoQuickActionContainer}
      aria-label="Quick Actions Container"
    >
      {isMobile ? (
        <Box sx={BasicInfoQuickStyles.container}>
          <Box>
            <WhiteButton
              buttonText={fileClaim}
              buttonStyles={BasicInfoQuickStyles.buttonStyle}
            />
          </Box>
          <Box>
            <img src={verticalEllipse} alt="vertical_ellipse" />
          </Box>
        </Box>
      ) : (
        <>
          {isTablet ? (
            <>
              <Box
                aria-label="tablet container"
                sx={BasicInfoQuickStyles.BasicInfoQuickActionCard}
              >
                <Box sx={BasicInfoQuickStyles.buttonsContainer}>
                  {buttonText.slice(0, buttonsToDisplay).map((text, index) => (
                    <WhiteButton
                      key={index}
                      buttonText={text}
                      buttonStyles={BasicInfoQuickStyles.buttonStyle}
                    />
                  ))}
                </Box>
                <Box>
                  <img src={verticalEllipse} alt="vertical_ellipse" />
                </Box>
              </Box>
            </>
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
        </>
      )}
    </Box>
  );
};

export default BasicInfoCardQuickActions;
