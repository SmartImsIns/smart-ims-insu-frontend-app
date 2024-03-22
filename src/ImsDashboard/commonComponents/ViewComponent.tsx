import React from "react";
import { Box, Typography } from "@mui/material";
import { ViewComponentStyles } from "./ViewComponentStyles";

interface ViewComponentProps {
  src?: string;
  viewText?: string;
}

const ViewComponent: React.FC<ViewComponentProps> = ({ src, viewText }) => {
  return (
    <Box sx={ViewComponentStyles.box}>
      <Typography sx={ViewComponentStyles.headTypo}>{viewText}</Typography>
      <Box sx={ViewComponentStyles.arrowImgBox}>
        <img src={src} alt={viewText} />
      </Box>
    </Box>
  );
};

export default ViewComponent;
