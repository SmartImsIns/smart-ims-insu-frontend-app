import React from 'react'
import { Box } from '@mui/material'
import PolicyDetailsStyles from '../PolicyDetailsStyles'
import BasicInfoCardQuickActions from './BasicInfoCardQuickActions'
import BasicInfoCard from './BasicInfoCard'


type Props = {}

const BasicInfoCardComponent = (props: Props) => {
  return (
    <Box sx={PolicyDetailsStyles.BasicInfoCard} aria-label='Basic Info card Container'>
      <BasicInfoCard />
      <BasicInfoCardQuickActions/>
    </Box>
  )
}

export default BasicInfoCardComponent