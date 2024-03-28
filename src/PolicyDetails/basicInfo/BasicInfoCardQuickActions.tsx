import React, { useState } from "react";
import {
  Box,
  Link,
  Menu,
  MenuItem,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import verticalEllipse from "../../assets/vertical_ellipse.svg";
import WhiteButton from "../common/WhiteButton";
import { BasicInfoCardStyles } from "./BasicInfoCardStyles";
import { buttonText } from "./QuickActionButtonsList";
import { BasicInfoQuickStyles } from "./BasicInfoQuickStyles";
import { fileClaim } from "../../constants/Constants";
import ContactButtonComponent from "./QuickActions/ContactButtonComponent";
import DropDown from "../common/DropDown";
import AutoPaymentComponent from "./QuickActions/AutoPaymentComponent";
import MoreButton from "../common/MoreButton";
const options = ["Road Side Assistance", "Update Policy", "Cancel Policy"];

const BasicInfoCardQuickActions: React.FC = () => {

  const isMobile = useMediaQuery("(max-width:799px)");
  const isTablet = useMediaQuery("(min-width:800px) and (max-width:1300px)");

  const buttonsToDisplay = isMobile ? 1 : isTablet ? 4 : buttonText.length;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedAction, setSelectedAction] = useState<string>("");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    text: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedAction(text);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedAction("");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const renderPopoverContent = () => {
    if (selectedAction === "Contact") {
      return (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <ContactButtonComponent />
        </Popover>
      );
    }
    if (selectedAction === "More") {
      return (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                <Link
                  sx={{
                    textDecoration: "none",
                    "& :hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#1D252B",
                      fontFamily: "Noto Sans",
                      fontSize: 16,
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "110%",
                    }}
                  >
                    {option}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Popover>
      );
    }
    return null;
  };

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
            <DropDown />
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
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => handleClick(event, text)}
                    />
                  ))}
                </Box>
                <Box>
                  <DropDown />
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
                    onClick={(
                      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => handleClick(event, text)}
                  />
                ))}
              </Box>
              {renderPopoverContent()}
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default BasicInfoCardQuickActions;
