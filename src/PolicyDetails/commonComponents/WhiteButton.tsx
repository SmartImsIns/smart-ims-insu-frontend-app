import React from 'react';
import { Box, Button, SxProps } from '@mui/material';

interface ActionButtonProps {
  buttonText: string;
  buttonStyles?: SxProps; // Make the buttonStyles prop optional
}
// Define the button styles object
const defaultButtonStyles: SxProps = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexShrink: 0,
//   letterSpacing: 0.5,
  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.03)',
};


const WhiteButton: React.FC<ActionButtonProps> = ({ buttonText, buttonStyles }) => {
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
}

export default WhiteButton;
