import React from 'react';
import { Box, Button } from '@mui/material';
import ImsDashboardStyle from '../ImsDashboardStyle'

interface ActionButtonProps {
  buttonText: string;
  
}

const ActionButton: React.FC<ActionButtonProps> = ({ buttonText }) => {
  return (
    <Box >
      <Button
        variant="contained"
        sx={ImsDashboardStyle.ActionButtonStyles}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default ActionButton;