import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import car from "../../assets/car.svg";
import tickIcon from "../../assets/tick.svg";
import basicInfoCardStyles, {
  BasicInfoCardStyles,
} from "./BasicInfoCardStyles";
// import DividerDot from "./DividerDot";

interface BasicInfoMockProp {
  headName?: string;
  vechileName?: string;
  numberOfVEchiles?: string;
  price?: string;
  dueDate?: string;
  annaulPrice?: string;
  term?: string;
  vaild?: string;
  status?: string;
}

const BasicInfoMock = {
  policyDetailsHead: "Policy Details",
  vehicleName: "Elena Rodriguez",
  numberOfVEchiles: "2",
  billingHead: "Billing Details",
  price: "821.00 ",
  dueDate: "01 Mar’24",
  premiumHead: "Premium & Term Details",
  annaulPrice: "2917.00",
  term: "1 Year",
  vaild: "02 Mar ‘23 - 01 Mar’24",
  status: "Active",
};

const BasicInfoCard: React.FC<BasicInfoMockProp> = () => {
  const {
    container,
    box,
    head,
    content,
    logoContainer,
    imageBox,
    statusText,
  }: BasicInfoCardStyles = basicInfoCardStyles;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={container} aria-label="Basic card info details container">
        <Box sx={logoContainer}>
          <img src={car} alt="car-logo" style={{ width: "64.449px" }} />
          <Box sx={imageBox}>
            <img src={tickIcon} alt="tick-logo" />
            <Typography sx={statusText}>{BasicInfoMock.status}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "67.55px",
            "@media (max-width: 599px)": {
              marginLeft: "20.55px",
              marginTop: "20px",
            },
          }}
        >
          <Box sx={box} aria-label="Basic card info details">
            <Box
              sx={{
                paddingRight: "101px",
                display: "flex",
                gap: "10px",
                flexDirection: "column",
              }}
              aria-label="Basic details"
            >
              <Typography sx={head}>
                {BasicInfoMock.policyDetailsHead}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography sx={content}>
                  {BasicInfoMock.vehicleName}{" "}
                </Typography>
                <Typography sx={{ paddingLeft: "20px", ...content }}>
                  • {BasicInfoMock.numberOfVEchiles} {"vehicles"}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
              <Typography sx={head}>{BasicInfoMock.billingHead}</Typography>
              <Box sx={{ display: "flex" }}>
                <Typography sx={content}>$ {BasicInfoMock.price} </Typography>
                <Typography sx={{ paddingLeft: "20px", ...content }}>
                  • {"Due on"} {BasicInfoMock.dueDate}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              "@media (max-width: 599px)": {
                gap: "15px",
              },
            }}
          >
            <Typography sx={head}>{BasicInfoMock.premiumHead}</Typography>
            <Box
              sx={{
                display: "flex",
                "@media (max-width: 599px)": {
                  flexDirection: "column",
                },
              }}
            >
              <Typography sx={content}>
                $ {BasicInfoMock.annaulPrice} / {BasicInfoMock.term}{" "}
              </Typography>
              {/* <Badge
                color="primary"
                variant="dot"
                sx={{ display: "flex" }}
              ></Badge> */}
              {/* <DividerDot /> */}
              <Typography
                sx={{
                  paddingLeft: "20px",
                  ...content,
                }}
              >
                • {BasicInfoMock.vaild}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default BasicInfoCard;
