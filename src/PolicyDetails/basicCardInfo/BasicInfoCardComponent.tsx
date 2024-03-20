import React from "react";
import { Box } from "@mui/material";
import PolicyDetailsStyles from "../PolicyDetailsStyles";
import BasicInfoCard from "./BasicInfoCard";
import BasicInfoCardQuickActions from "./BasicInfoCardQuickActions";

const BasicInfoCardComponent: React.FC = () => {
  return (
    <Box
      sx={PolicyDetailsStyles.BasicInfoCard}
      aria-label="Basic Info Container"
    >
      <BasicInfoCard />
      <BasicInfoCardQuickActions />
    </Box>
  );
};

export default BasicInfoCardComponent;
