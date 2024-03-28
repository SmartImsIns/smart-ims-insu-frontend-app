import React from "react";
import { Button, SxProps } from "@mui/material";

interface ActionButtonProps {
  buttonText: string;
  buttonStyles?: SxProps;
}

const WhiteButton: React.FC<ActionButtonProps> = ({
  buttonText,
  buttonStyles,
}) => {
  return (
    <Button variant="text" sx={buttonStyles}>
      {buttonText}
    </Button>
  );
};

export default WhiteButton;
