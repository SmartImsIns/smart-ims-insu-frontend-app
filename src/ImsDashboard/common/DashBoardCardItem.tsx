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
        sx={{
          marginLeft: "20.19px",
          color: "#1D252B",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 300,
          lineHeight: "110%", // 22px
        }}
      >
        {text}
      </Typography>
}
    </Box>
  );
};

export default DashBoardCardItem;