import React from "react";
import PolicyCard, { PolicyData } from "./PolicyCard";
import { Box, Typography, useMediaQuery } from "@mui/material";
import PolicyStyles from "./PolicyStyles";
import policyData from "../../mockJson/CustomerDashboard/PolicyCardData.json";
import viewAllArrow from "../../assets/viewAllArrow.svg";
const PolicyContainer: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:1024px)");

  return (
    <Box>
      <Box sx={PolicyStyles.policyCardHead}>
        <Typography sx={PolicyStyles.policyCardHeading}>
          Here is your list of policies
        </Typography>
        <Box sx={PolicyStyles.policyCardViewAllBox}>
          <Typography sx={PolicyStyles.policyCardViewAll}>
            View All Policy
          </Typography>
          <img src={viewAllArrow} alt="view-all-arrow" />
        </Box>
      </Box>
      <Box sx={PolicyStyles.AllCards}>
        {policyData.slice(0, isMobile ? 1 : 2).map((policy, index) => (
          <PolicyCard key={index} data={policy} />
        ))}
      </Box>
    </Box>
  );
};

export default PolicyContainer;
