import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import PolicyBreadCrumbs from './PolicyBreadCrumbs'
import PolicyDetailsStyles from './PolicyDetailsStyles'
import BasicInfoCardComponent from './basic card Info/BasicInfoCardComponent'
import PolicyTab from './PolicyTab'


const PolicyDetails = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
   <Box sx={PolicyDetailsStyles.policyContainer}>
    <PolicyBreadCrumbs />
    <BasicInfoCardComponent/>
    <PolicyTab/>
   </Box>
  )
}

export default PolicyDetails