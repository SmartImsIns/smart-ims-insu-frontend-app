import React from 'react'
import { Box, Typography } from '@mui/material'
import car from '../../assets/car.svg'
import tick from '../../assets/tick.svg'


interface BasicInfoMockProp {
  headName?: string;
  vechileName?: string;
  numberOfVEchiles?: string;
  price?: string;
  dueDate?: string;
  annaulPrice?: string;
  term?: string;
  vaild?: string;
}

const BasicInfoMock = {
  PolicyDetails:{
    headName:"Policy Details",
    vechileName :"Elena Rodriguez",
    numberOfVEchiles:"2"
  },
  BillingDetails: {
    headName:"Billing Details",
    price:"821.00 ",
    dueDate:"01 Mar’24"
  },
  PremiumDetails:{
    headName:"Premium & term  Details",
    annaulPrice:"2917.00",
    term:"1 Year",
    vaild:"02 Mar ‘23 - 01 Mar’24"
  }
  
}


const BasicInfoCard : React.FC <BasicInfoMockProp>= () =>{
  return (
    <Box sx={{justifyContent:'space-between', display:'flex'}} aria-label='Basic card info details'>
      <Box sx={{padding:'30px', display:'flex'}}>
        <Box >
          <img src={car} alt="car-logo"/>
          <Box sx={{display:'flex', gap:'6.5px'}}>
          <img src={tick} alt="car-logo"/>
         <Typography color="#56CF66" fontSize={'16px'} fontWeight={400} fontFamily={"Noto Sans"} >{'Active'}</Typography>
         </Box>
        </Box>
        <Box sx={{marginLeft:'69px', display:'grid', gridTemplateColumns:'repeat(2,1fr)', columnGap:"101px",rowGap:'30px'}}>
        <Box>
         <Typography sx={{fontSize:'18px',fontWeight:'300',fontFamily:'Noto sans', color:'#1D252B'}}>{BasicInfoMock.PolicyDetails.headName}</Typography>
         <Typography  sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Noto sans', color:'#1D252B'}}>{BasicInfoMock.PolicyDetails.vechileName}  .  {BasicInfoMock.PolicyDetails.numberOfVEchiles} vehicles</Typography>
        </Box>
        <Box>
         <Typography sx={{fontSize:'18px',fontWeight:'300',fontFamily:'Noto sans', color:'#1D252B'}}>{BasicInfoMock.BillingDetails.headName}</Typography>
         <Typography  sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Noto sans', color:'#1D252B'}}>$ {BasicInfoMock.BillingDetails.price}  .  Due on {BasicInfoMock.BillingDetails.dueDate}</Typography>
        </Box>
        <Box>
         <Typography  sx={{fontSize:'18px',fontWeight:'300',fontFamily:'Noto sans', color:'#1D252B'}}>{BasicInfoMock.PremiumDetails.headName}</Typography>
         <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Noto sans', color:'#1D252B'}}>$ {BasicInfoMock.PremiumDetails.annaulPrice}  .  {BasicInfoMock.PremiumDetails.vaild}</Typography>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BasicInfoCard