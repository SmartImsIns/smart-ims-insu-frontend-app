import React from "react";
import { Button, SxProps } from "@mui/material";

interface WhiteButtonProps {
  buttonText: string;
  buttonStyles?: SxProps;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({
  buttonText,
  buttonStyles,
  onClick,
}) => {
  return (
    <Button variant="text" sx={buttonStyles} onClick={onClick}>
      {buttonText}
    </Button>
  );
};

export default WhiteButton;
