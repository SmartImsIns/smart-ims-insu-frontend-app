import React from "react";
import { Box, SxProps, Typography } from "@mui/material";
import { DashBoardCardItemStyles } from "./DashBoardCardItemStyles";

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
    <Box sx={DashBoardCardItemStyles.DashBoardCardItemStyles}>
      <img src={src} alt={alt} />
      {text.length > 0 && (
        <Typography
          sx={{ ...style, ...DashBoardCardItemStyles.DashBoardCardText }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default DashBoardCardItem;
