import { Box, Typography, Badge } from "@mui/material";
import React from "react";
import basicInfoCardStyles, {
  BasicInfoCardStyles,
} from "./BasicInfoCardStyles";

interface BasicInfoCardItemProps {
  headText?: string;
  firstContentText?: string;
  secondContentText?: string;
  thirdContentText?: string;
}

const BasicInfoCardItem: React.FC<BasicInfoCardItemProps> = ({
  headText,
  firstContentText,
  thirdContentText,
}) => {
  const { content }: BasicInfoCardStyles = basicInfoCardStyles;
  return (
    <Box sx={{ flexBasis: "45%" }}>
      <Box sx={{ marginBottom: "10px" }}>
        <Typography
          sx={{
            color: "#1D252B",
            fontFamily: "Noto Sans",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "110%",
          }}
        >
          {headText}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={content}>{firstContentText} </Typography>
        <Badge
          color="primary"
          variant="dot"
          sx={{ display: "flex", alignItems: "center" }}
        ></Badge>
        <Typography sx={{ paddingLeft: "20px", ...content }}>
          {thirdContentText}
        </Typography>
      </Box>
    </Box>
  );
};

export default BasicInfoCardItem;
