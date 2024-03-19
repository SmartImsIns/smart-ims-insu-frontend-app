import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import ImsDashboardStyle from '../ImsDashboardStyle'
import DynamicTextDisplay from '../common/DynamicTextDisplay'
import attentionsIcon from "../../assets/attensionsIcon.svg";
import ActionButton from '../common/ActionButton';
import DashBoardCardItem  from '../common/DashBoardCardItem';


type Props = {}

const AttentionCard = (props: Props) => {

  return (
    <Box sx={ImsDashboardStyle.imsDashbardContainer}>
    <DynamicTextDisplay text="Things needs your Attentions" />
    <Card sx={ImsDashboardStyle.AttentionCardStyles}>
      <Box sx={ImsDashboardStyle.AttentionsCardBoxStyle} >
        <Box>
      <DashBoardCardItem src={attentionsIcon} alt="attentions-icon" text="" />
      </Box>
      <Box sx={ImsDashboardStyle.AttentionsCardTextStyle}>
        <Typography
          sx={ImsDashboardStyle.HeadStyle}
          >
          Smart IMS life online saving plan child solutions
        </Typography>
        <Typography
          sx={ImsDashboardStyle.ContentStyle}
          >
          Renewal amount : $821 | due date : 22 Mar 2024 : Tax and Fee may
          apply.
        </Typography>
          </Box>
      </Box>
      <Box  sx={ImsDashboardStyle.ActionButton}>
      <ActionButton sx={ImsDashboardStyle.renewNowButton} buttonText="Renew Now"  />
      </Box>
    </Card>
  </Box>
  )
}

export default AttentionCard