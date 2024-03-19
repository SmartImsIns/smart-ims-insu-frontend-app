import React from "react";
import { Box, SxProps, Button } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";

interface ActionButtonProps {
  buttonText: string;
  sx?: SxProps;
}

const ActionButton: React.FC<ActionButtonProps> = ({ buttonText, sx }) => {
  return (
    // <Button
    //   variant="contained"
      // sx={{ ...ImsDashboardStyle.ActionButtonStyles, ...classes }}
    // >
    <Button variant="contained" sx={{ ...sx }}>
      {buttonText}
    </Button>
  );
};

export default ActionButton;
