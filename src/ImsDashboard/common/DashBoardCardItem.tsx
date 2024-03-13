import React from "react";
import { Box, Typography } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";

interface DashBoardCardItemProps {
  text: string;
  src: string;
  alt: string;
}

const DashBoardCardItem : React.FC<DashBoardCardItemProps> = ({ text, src, alt }) => {
  return (
    <Box sx={ImsDashboardStyle.DashBoardCardItemStyles}>
      <img src={src} alt={alt} />
      {text.length > 0 &&
      <Typography
        sx={ImsDashboardStyle.TextCardStyles}
      >
        {text}
      </Typography>
}
    </Box>
  );
};

export default DashBoardCardItem;