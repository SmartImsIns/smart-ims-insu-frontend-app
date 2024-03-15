import React, { useEffect } from "react";
import { Box } from "@mui/material";
import PolicyBreadCrumbs from "./common/PolicyBreadCrumbs";
import PolicyDetailsStyles from "./PolicyDetailsStyles";
import PolicyTab from "./PolicyTab";
import BasicInfoCardComponent from "./basicCardInfo/BasicInfoCardComponent";

const PolicyDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={PolicyDetailsStyles.policyContainer}>
      <PolicyBreadCrumbs />
      <BasicInfoCardComponent />
      <PolicyTab />
    </Box>
  );
};

export default PolicyDetails;
