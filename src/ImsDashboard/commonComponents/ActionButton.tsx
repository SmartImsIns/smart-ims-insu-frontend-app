import React from "react";
import { SxProps, Button } from "@mui/material";

interface ActionButtonProps {
  buttonText: string;
  sx?: SxProps;
}

const ActionButton: React.FC<ActionButtonProps> = ({ buttonText, sx }) => {
  return (
    <Button variant="contained" sx={{ ...sx }}>
      {buttonText}
    </Button>
  );
};

export default ActionButton;
