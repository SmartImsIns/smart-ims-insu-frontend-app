import React from "react";
import { Typography } from "@mui/material";
import { DynamicTextDisplayStyles } from "./DynamicTextDisplayStyles";

interface DynamicTextDisplayProps {
  text: string;
}

const DynamicTextDisplay: React.FC<DynamicTextDisplayProps> = ({ text }) => {
  return <Typography sx={DynamicTextDisplayStyles}>{text}</Typography>;
};

export default DynamicTextDisplay;
