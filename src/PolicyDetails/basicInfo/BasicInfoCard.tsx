import React from "react";
import { Box, Typography, createTheme } from "@mui/material";
import car from "../../assets/car.svg";
import tickIcon from "../../assets/tick.svg";
import { BasicInfoCardStyles } from "./BasicInfoCardStyles";
import {
  annaulPrice,
  billingHead,
  dueDate,
  numberOfVEchiles,
  policyDetailsHead,
  premiumHead,
  price,
  status,
  term,
  vaild,
  vehicleName,
} from "../../constants/Constants";

const BasicInfoCard: React.FC = () => {
  return (
    <Box
      sx={BasicInfoCardStyles.container}
      aria-label="Basic card info details container"
    >
      <Box sx={BasicInfoCardStyles.logoContainer}>
        <img src={car} alt="car-logo" style={{ width: "64.449px" }} />
        <Box sx={BasicInfoCardStyles.imageBox}>
          <img src={tickIcon} alt="tick-logo" />
          <Typography sx={BasicInfoCardStyles.statusText}>{status}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "@media (max-width: 599px)": {
            marginLeft: "20.55px",
            marginTop: "20px",
          },
          "@media (min-width: 600px) and (max-width: 1024px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
            marginTop: "30px",
          },
          "@media (min-width: 1024px) and (max-width: 1920px)": {
            margin: "27px 0px 42px 67.55px",
          },
        }}
      >
        <Box sx={BasicInfoCardStyles.box} aria-label="Basic card info details">
          <Box
            sx={{
              paddingRight: "101px",
              display: "flex",
              gap: "10px",
              flexDirection: "column",
            }}
            aria-label="Basic details"
          >
            <Typography sx={BasicInfoCardStyles.head}>
              {`${policyDetailsHead}`}
            </Typography>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Typography sx={BasicInfoCardStyles.content}>
                {vehicleName}
              </Typography>
              <Typography
                sx={{
                  whiteSpace: "pre",
                  ...BasicInfoCardStyles.content,
                }}
              >
                &bull; {` ${numberOfVEchiles} ${"vehicles"}`}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            <Typography
              sx={BasicInfoCardStyles.head}
            >{`${billingHead}`}</Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={BasicInfoCardStyles.content}
              >{`$ ${price}`}</Typography>
              <Typography
                sx={{
                  whiteSpace: "pre",
                  paddingLeft: "20px",
                  ...BasicInfoCardStyles.content,
                }}
              >
                &bull; {` Due on ${dueDate}`}
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
          <Typography
            sx={BasicInfoCardStyles.head}
          >{`${premiumHead}`}</Typography>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              "@media (max-width: 599px)": {
                flexDirection: "column",
                gap: "0px",
              },
            }}
          >
            <Typography sx={BasicInfoCardStyles.content}>
              {`$ ${annaulPrice} / ${term}`}
            </Typography>
            <Typography
              sx={{
                ...BasicInfoCardStyles.content,
                "@media (max-width: 599px)": {
                  display: "none",
                },
              }}
            >
              &bull;
            </Typography>
            <Typography
              sx={{
                whiteSpace: "pre",
                ...BasicInfoCardStyles.content,
              }}
            >
              {`${vaild}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BasicInfoCard;
