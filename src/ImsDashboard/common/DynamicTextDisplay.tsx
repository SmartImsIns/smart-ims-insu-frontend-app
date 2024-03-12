import React from 'react';
import { Typography } from '@mui/material';
import ImsDashboardStyle from '../ImsDashboardStyle';

interface DynamicTextDisplayProps {
  text: string;
}

const DynamicTextDisplay: React.FC<DynamicTextDisplayProps> = ({ text }) => {
  return (
    <Typography sx={ImsDashboardStyle.welcomeTextStyle}>
      {text}
    </Typography>
  );
};

export default DynamicTextDisplay;
