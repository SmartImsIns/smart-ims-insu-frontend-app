import React from 'react'
import { Box, Card} from '@mui/material'
import ImsDashboardStyle from '../ImsDashboardStyle'
import myClaimsIcon from "../../assets/myClaimsIcon.svg"
import ActionButton from '../common/ActionButton'
import DynamicTextDisplay from '../common/DynamicTextDisplay'
import  DashBoardCardItem from '../common/DashBoardCardItem'
import MyClaimCardItem from '../common/MyClaimCardItem'

type Props = {}

const MyClaimsCard = (props: Props) => {
    

  return (
    <Box sx={ImsDashboardStyle.imsDashbardContainer}>
        <DynamicTextDisplay text="My Claims(01)" />
        <Card sx={ImsDashboardStyle.myClaimsCardStyles}>
        <DashBoardCardItem src={myClaimsIcon} alt="new-claim-icon" text="" />
          <Box sx={ImsDashboardStyle.ClaminsContent}>
          <MyClaimCardItem headText="Home_Protection" contentText="12AW1145G057" />
          <MyClaimCardItem headText="Verification" contentText="Claim Stage" />
          <MyClaimCardItem headText="15/02/2024" contentText="Updated On" />
          <MyClaimCardItem headText="12/02/2024" contentText="Claim Initiated" />
          <MyClaimCardItem headText="John Doe" contentText="Contact Person" />
          </Box>
          <ActionButton buttonText="Track Your Claim"  />

        </Card>
      </Box>
  )
}

export default MyClaimsCard