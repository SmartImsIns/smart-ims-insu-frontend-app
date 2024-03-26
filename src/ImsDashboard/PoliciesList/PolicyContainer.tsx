import React, { useState }from "react";
import PolicyCard, { PolicyData } from "./PolicyCard";
import { Box, Typography, useMediaQuery } from "@mui/material";
import PolicyStyles from "./PolicyStyles";
import policyData from "../../mockJson/CustomerDashboard/PolicyCardData.json";
import viewAllArrow from "../../assets/viewAllArrow.svg";
import { VIEW_ARROW, policiesHeading, viewAll } from "../../constants/Constants";
import ViewComponent from "../commonComponents/ViewComponent";

const PolicyContainer: React.FC = () => {

  

  return (
    // <Box sx={PolicyStyles.policyCardHead}>
    <Box>
      <Box sx={PolicyStyles.policyCardHead}>
        <Typography sx={PolicyStyles.policyCardHeading}>
          {policiesHeading}
        </Typography>
        
        {policyData.length > 2 && ( 
          // <Box sx={PolicyStyles.policyCardViewAllBox}>
          //   <Typography sx={PolicyStyles.policyCardViewAll}>{viewAll}</Typography>
          //   <Box sx={PolicyStyles.rightArrow}>
          //     <img src={viewAllArrow} alt="view-all-arrow" />
          //   </Box>
          // </Box>
          <Box sx={PolicyStyles.viewAll}>
            <ViewComponent src={VIEW_ARROW} viewText={viewAll} />
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
