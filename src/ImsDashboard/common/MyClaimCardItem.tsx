import { Box, Typography } from "@mui/material";
import React from "react";
import ImsDashboardStyle from "../ImsDashboardStyle";

interface MyClaimCardItemProps {
  headText: string;
  contentText: string;
}

const MyClaimCardItem: React.FC<MyClaimCardItemProps> = ({ headText, contentText }) => {
  return (
    <Box sx={ImsDashboardStyle.claimsData}>
      <Typography sx={ImsDashboardStyle.HeadStyle} >{headText}</Typography>
      <Typography sx={ImsDashboardStyle.ContentStyle}>{contentText}</Typography>
    </Box>
  );
};

export default MyClaimCardItem;