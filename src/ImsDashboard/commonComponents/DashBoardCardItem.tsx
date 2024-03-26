import React from "react";
import { Box, SxProps, Typography } from "@mui/material";
import { DashBoardCardItemStyles } from "./DashBoardCardItemStyles";
import { CSSProperties } from "@mui/material/styles/createMixins";

interface DashBoardCardItemProps {
  text: string;
  src: string | undefined;
  alt: string;
  textStyles?: SxProps;
  boxStyles?: SxProps;
  imgStyle?: CSSProperties;
}

const DashBoardCardItem: React.FC<DashBoardCardItemProps> = ({
  text,
  src,
  alt,
  boxStyles,
  textStyles,
  imgStyle,
}) => {
  return (
    <Box
      sx={{ ...boxStyles, ...DashBoardCardItemStyles.DashBoardCardItemStyles }}
    >
      <img src={src} alt={alt} style={imgStyle} />
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