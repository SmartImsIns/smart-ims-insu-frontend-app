import React from 'react'
import { Box } from '@mui/material'
import PolicyBreadCrumbs from './common/PolicyBreadCrumbs'
import PolicyDetailsStyles from './PolicyDetailsStyles'
import BasicInfoCard from './BasicInfoCard'
import PolicyTab from './PolicyTab'


const PolicyDetails = () => {
  return (
   <Box sx={PolicyDetailsStyles.policyContainer}>
    <PolicyBreadCrumbs />
    <BasicInfoCard/>
    <PolicyTab/>
   </Box>
  )
}

export default PolicyDetails