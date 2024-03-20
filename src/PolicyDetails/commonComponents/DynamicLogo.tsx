import React, { CSSProperties } from "react";
import { Box } from "@mui/material";

interface DashBoardCardItemProps {
  src: string;
  alt: string;
  styles: CSSProperties;
}

const DynamicLogo: React.FC<DashBoardCardItemProps> = ({
  src,
  alt,
  styles,
}) => {
  return (
    <Box sx={styles}>
      <img src={src} alt={alt} />
    </Box>
  );
};

export default DynamicLogo;
