import React from "react";
import { Box, SxProps, Typography } from "@mui/material";
import { DashBoardCardItemStyles } from "./DashBoardCardItemStyles";

interface DashBoardCardItemProps {
  text: string;
  src: string | undefined;
  alt: string;
  boxStyles?: SxProps;
  textStyles?: SxProps;
}

const DashBoardCardItem: React.FC<DashBoardCardItemProps> = ({
  text,
  src,
  alt,
  boxStyles,
  textStyles,
}) => {
  return (
    <Box
      sx={{ ...boxStyles, ...DashBoardCardItemStyles.DashBoardCardItemStyles }}
    >
      <img src={src} alt={alt} />
      {text.length > 0 && (
        <Typography
          sx={{ ...textStyles, ...DashBoardCardItemStyles.DashBoardCardText }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default DashBoardCardItem;
