import React from "react";
import { Box } from "@mui/material";
import BasicInfoCard from "./BasicInfoCard";
import BasicInfoCardQuickActions from "./BasicInfoCardQuickActions";
import { BasicInfoCardStyles } from "./BasicInfoCardStyles";

const BasicInfoCardComponent: React.FC = () => {
  return (
    <Box
      sx={BasicInfoCardStyles.BasicInfoCard}
      aria-label="Basic Info Container"
    >
      <BasicInfoCard />
      <BasicInfoCardQuickActions />
    </Box>
  );
};

export default BasicInfoCardComponent;
