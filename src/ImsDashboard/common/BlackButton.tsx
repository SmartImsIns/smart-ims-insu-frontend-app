import React from "react";
import { Button, SxProps } from "@mui/material";

interface ActionButtonProps {
  buttonText: string;
  sx?: SxProps;
}

const BlackButton: React.FC<ActionButtonProps> = ({ buttonText, sx }) => {
  return (
    <Button variant="contained" sx={{ ...sx }}>
      {buttonText}
    </Button>
  );
};

export default BlackButton;
