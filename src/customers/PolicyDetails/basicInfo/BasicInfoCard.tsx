import React from "react";
import { Box, Typography } from "@mui/material";
import car from "../../../assets/car.svg";
import tickIcon from "../../../assets/tick.svg";
import { BasicInfoCardStyles } from "./BasicInfoCardStyles";
import {
  annaulPrice,
  billingHead,
  dueDate,
  dueOn,
  numberOfVEchiles,
  policyDetailsHead,
  premiumHead,
  price,
  status,
  term,
  vaild,
  vehicleName,
  vehicles,
} from "../../../constants/Constants";

const BasicInfoCard: React.FC = () => {
  return (
    <Box
      sx={BasicInfoCardStyles.container}
      aria-label="Basic card info details container"
    >
      <Box sx={BasicInfoCardStyles.logoContainer}>
        <img src={car} alt="car-logo" />
        <Box sx={BasicInfoCardStyles.imageBox}>
          <img src={tickIcon} alt="tick-logo" />
          <Typography sx={BasicInfoCardStyles.statusText}>{status}</Typography>
        </Box>
      </Box>
      <Box sx={BasicInfoCardStyles.container1}>
        <Box sx={BasicInfoCardStyles.box} aria-label="Basic card info details">
          <Box sx={BasicInfoCardStyles.container2} aria-label="Basic details">
            <Typography sx={BasicInfoCardStyles.head}>
              {`${policyDetailsHead}`}
            </Typography>
            <Box sx={BasicInfoCardStyles.container3}>
              <Typography sx={BasicInfoCardStyles.content}>
                {vehicleName}
              </Typography>
              <Typography sx={BasicInfoCardStyles.content}>
                &bull; {` ${numberOfVEchiles} ${vehicles}`}
              </Typography>
            </Box>
          </Box>
          <Box sx={BasicInfoCardStyles.container2}>
            <Typography
              sx={BasicInfoCardStyles.head}
            >{`${billingHead}`}</Typography>
            <Box sx={BasicInfoCardStyles.container3}>
              <Typography
                sx={BasicInfoCardStyles.content}
              >{`$ ${price} `}</Typography>
              <Typography sx={BasicInfoCardStyles.content}>
                &bull; {` ${dueOn} ${dueDate}`}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={BasicInfoCardStyles.container4}>
          <Typography
            sx={BasicInfoCardStyles.head}
          >{`${premiumHead}`}</Typography>
          <Box sx={BasicInfoCardStyles.container5}>
            <Typography sx={BasicInfoCardStyles.content}>
              {`$ ${annaulPrice} / ${term}`}
            </Typography>
            <Typography
              sx={{
                ...BasicInfoCardStyles.content,
                ...BasicInfoCardStyles.container6,
              }}
            >
              &bull;
            </Typography>
            <Typography sx={BasicInfoCardStyles.content}>
              {`${vaild}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BasicInfoCard;
