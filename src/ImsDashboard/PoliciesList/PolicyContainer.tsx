import React from "react";
import PolicyCard from "./PolicyCard";
import { Box, Typography } from "@mui/material";
import PolicyStyles from "./PolicyStyles";
import policyData from "../../mockJson/CustomerDashboard/PolicyCardData.json";
import viewAllArrow from "../../assets/viewAllArrow.svg";
import { policiesHeading, viewAll } from "../../constants/Constants";

const PolicyContainer: React.FC = () => {
  return (
    <Box>
      <Box sx={PolicyStyles.policyCardHead}>
        <Typography sx={PolicyStyles.policyCardHeading}>
          {policiesHeading}
        </Typography>
        {policyData.length > 2 && (
          <Box sx={PolicyStyles.policyCardViewAllBox}>
            <Typography sx={PolicyStyles.policyCardViewAll}>
              {viewAll}
            </Typography>
            <Box sx={PolicyStyles.rightArrow}>
              <img src={viewAllArrow} alt="view-all-arrow" />
            </Box>
          </Box>
        )}
      </Box>
      <Box sx={PolicyStyles.AllCards}>
        {policyData.slice(0, 2).map((policy, index) => (
          <PolicyCard key={index} data={policy} />
        ))}
      </Box>
    </Box>
  );
};

export default PolicyContainer;
