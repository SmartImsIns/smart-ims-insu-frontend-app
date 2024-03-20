import React, { useEffect } from "react";
import { Box } from "@mui/material";
import PolicyBreadCrumbs from "./BreadCrumb/PolicyBreadCrumbs";
import PolicyDetailsStyles from "./PolicyDetailsStyles";
import PolicyTab from "./PolicyTabComponents/PolicyTab";
import BasicInfoCardComponent from "./basicCardInfo/BasicInfoCardComponent";

const PolicyDetails: React.FC = () => {
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
