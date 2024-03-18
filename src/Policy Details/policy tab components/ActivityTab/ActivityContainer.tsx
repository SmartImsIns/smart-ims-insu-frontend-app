import React from 'react'
import ActivityData from '../../../mockJson/CustomerDashboard/ActivityPageData.json'
import { Box, Card, Typography } from '@mui/material';
import ActivityStyles from './ActivityStyles'
import ActivityCard from './ActivityCard';




const ActivityContainer = () => {
  return (
    <Box sx={ActivityStyles.container}>
      {ActivityData.map((activity, index) => (
        <ActivityCard key={index} data={activity} />
      ))}
    </Box>
  )
}

export default ActivityContainer
