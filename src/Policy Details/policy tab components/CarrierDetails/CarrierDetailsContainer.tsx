import React from 'react'
import { Box, Card, Typography } from '@mui/material';
import CarrierDetailsCard from './CarrierDetailsCard';
import CarrierDetailsData from '../../../mockJson/CustomerDashboard/CarrierDetailsData.json'

function CarrierDetailsContainer() {
  return (
    <>
      {CarrierDetailsData.map((Carrier, index) => (
        <CarrierDetailsCard key={index} data={Carrier} />
      ))}
    </>
  )
}

export default CarrierDetailsContainer
