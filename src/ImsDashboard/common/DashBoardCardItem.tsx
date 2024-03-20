
import React from "react";
import { Box, SxProps, Typography } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";

interface DashBoardCardItemProps {
  text: string;
  src: string;
  alt: string;
  style?: SxProps;
}

const DashBoardCardItem: React.FC<DashBoardCardItemProps> = ({
  text,
  src,
  alt,
  style,
}) => {
  return (
    <Box sx={ImsDashboardStyle.DashBoardCardItemStyles}>
      <img src={src} alt={alt} />
      {text.length > 0 && (
        <Typography sx={{ ...style, ...ImsDashboardStyle.DashBoardCardText }}>
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default DashBoardCardItem;
