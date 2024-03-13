import React from 'react';
import PolicyCard, { PolicyData } from './PolicyCard';
import { Box, Typography, useMediaQuery } from '@mui/material';
import PolicyStyles from './PolicyStyles';
import home from '../../assets/home.svg';
import car from '../../assets/car.svg'


const PolicyContainer: React.FC = () => {
  const policyData: PolicyData[] = [
    {
        logo:home,
        policyNumber: '12AW1145G057',
        status: 'Active till 22 Feb 2025',
        plan: 'Smart IMS life online saving plan',
        premium: '$821',
        term: '2 years',
        autoDeduct: true,
        dueDate: '22 Mar 2024',
        days: '8',
        type: '01 House',
        insurance: 'Carrier Abc Insure'
    },
    {
        logo:car,
        policyNumber: '12AW1145G057',
        status: 'Active till 22 Feb 2025',
        plan: 'Smart IMS life online saving plan child solutions ',
        premium: '$821',
        term: '2 years',
        autoDeduct: false,
        dueDate: '22 Mar 2024',
        days: '19',
        type: '02 vehicles',
        insurance: 'Carrier Abc Insure'
      },
      {
        logo:home,
        policyNumber: '12AW1145G057',
        status: 'Active till 22 Feb 2025',
        plan: 'Smart IMS life online saving plan child solutions ',
        premium: '$821',
        term: '2 years',
        autoDeduct: true,
        dueDate: '22 Mar 2024',
        days: '8',
        type: '02 vehicles',
        insurance: 'Carrier Abc Insure'
      },
    
  ];

  const isMobile = useMediaQuery('(max-width:1024px)');

  return (
    <Box>
        <Box>
            <Typography sx={PolicyStyles.policyCardHeading}>Here is your list of policies</Typography>
        </Box>
        <Box sx={PolicyStyles.AllCards}>
            {policyData.slice(0,isMobile? 1 : 2).map((policy, index) => (
                <PolicyCard key={index} data={policy} />
            ))}
        </Box>
    </Box>
    
  );
};

export default PolicyContainer;
