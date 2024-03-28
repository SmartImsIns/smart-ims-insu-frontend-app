import React from "react";
import { Box, Typography } from "@mui/material";
import ClaimsTabStyles from "./ClaimsTabStyles";
import ClaimsItem from "./ClaimsItem";

const ClaimTabComponent: React.FC = () => {
  return (
    <Box aria-label="Claims Tab" sx={ClaimsTabStyles.container}>
      <Box
        aria-label="Active Claims"
        sx={ClaimsTabStyles.activeClaimsContainer}
      >
        <Typography sx={ClaimsTabStyles.titleText}>
          {"Active Claims"}
        </Typography>
        <ClaimsItem linkText={"Track Your Claim"} />
      </Box>
      <Box
        aria-label="Active Claims"
        sx={ClaimsTabStyles.activeClaimsContainer}
      >
        <Typography sx={ClaimsTabStyles.titleText}>{"Past Claims"}</Typography>
        <ClaimsItem linkText={"View Details"} />
      </Box>
    </Box>
  );
};

export default ClaimTabComponent;
