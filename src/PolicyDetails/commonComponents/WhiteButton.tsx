import React from "react";
import { Box, Button, SxProps } from "@mui/material";

interface ActionButtonProps {
  buttonText: string;
  buttonStyles?: SxProps;
}
const defaultButtonStyles: SxProps = {
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.03)",
};

const WhiteButton: React.FC<ActionButtonProps> = ({
  buttonText,
  buttonStyles,
}) => {
  return (
    <Box>
      <Button
        variant="text"
        sx={{
          ...defaultButtonStyles,
          ...buttonStyles,
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default WhiteButton;
