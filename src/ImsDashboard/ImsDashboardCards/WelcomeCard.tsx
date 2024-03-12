import React from "react";
import { Box, Card } from "@mui/material";
import DynamicTextDisplay from "../common/DynamicTextDisplay";
import ImsDashboardStyle from "../ImsDashboardStyle";
import roadsideAssistanceIcon from "../../assets/roadsideAssistanceIcon.svg";
import paymentHistoryIcon from "../../assets/paymentHistoryIcon.svg";
import star from "../../assets/star.svg";
import learnAboutIcon from "../../assets/learnAboutIcon.svg";
import DashBoardCardItem from "../common/DashBoardCardItem";

type Props = {};

const WelcomeCard = (props: Props) => {
  return (
    <Box sx={ImsDashboardStyle.imsDashbardContainer}>
      <DynamicTextDisplay text="Good Morning, Mathew! Need help today?" />
      <Card sx={ImsDashboardStyle.welcomeCardStyles}>
        <DashBoardCardItem src={star} alt="new-claim-icon" text="New Claim" />
        <DashBoardCardItem
          src={paymentHistoryIcon}
          alt="payment-history-icon"
          text="Payment History"
        />
        <DashBoardCardItem
          src={roadsideAssistanceIcon}
          alt="roadside-assistance-icon"
          text="Roadside Assistance"
        />
        <DashBoardCardItem
          src={learnAboutIcon}
          alt="Learn-About-icon"
          text="Learn about Insurance"
        />
      </Card>
    </Box>
  );
};

export default WelcomeCard;
