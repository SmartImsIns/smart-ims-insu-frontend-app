import React from "react";
import { Box, Button } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";

interface ActionButtonProps {
  buttonText: string;
  classes?: Record<string, string>;
}

const ActionButton: React.FC<ActionButtonProps> = ({ buttonText, classes }) => {
  return (
    <Button
      variant="contained"
      sx={{ ...ImsDashboardStyle.ActionButtonStyles, ...classes }}
    >
      {buttonText}
    </Button>
  );
};

export default ActionButton;
