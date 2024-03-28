import React, { useEffect } from "react";
import { Box } from "@mui/material";
import PolicyDetailsStyles from "./PolicyDetailsStyles";
import PolicyTab from "./policyTabComponents/PolicyTab";
import BreadCrumb from "./breadCrumb/BreadCrumbs";
import { breadcrumbText } from "../constants/Constants";
import BasicInfoCardComponent from "./basicInfo/BasicInfoCardComponent";

const PolicyDetails: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={PolicyDetailsStyles.policyContainer}>
      <BreadCrumb breadCrumbText={breadcrumbText} />
      <BasicInfoCardComponent />
      <PolicyTab />
    </Box>
  );
};

export default PolicyDetails;
