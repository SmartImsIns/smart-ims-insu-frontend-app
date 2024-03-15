import React from "react";
import { Box, Button } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";

interface ActionButtonProps {
  buttonText: string;
  classes?: Object;
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
