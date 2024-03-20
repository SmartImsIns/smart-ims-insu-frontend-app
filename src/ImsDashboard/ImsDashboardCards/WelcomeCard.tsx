import React from "react";
import { Box, Card } from "@mui/material";
import DynamicTextDisplay from "../common/DynamicTextDisplay";
import ImsDashboardStyle from "../ImsDashboardStyle";
import roadsideAssistanceIcon from "../../assets/roadsideAssistanceIcon.svg";
// import paymentHistoryIcon from "../../assets/paymentHistoryIcon.svg";
import paymentHistoryIcon from "../../assets/Group 1000009236.svg";
import star from "../../assets/star.svg";
import learnAboutIcon from "../../assets/Group 1000009237.svg";
import DashBoardCardItem from "../common/DashBoardCardItem";

type Props = {};

const WelcomeCard = (props: Props) => {
  return (
    <Box sx={ImsDashboardStyle.welcomeCardsContainer}>
      <DynamicTextDisplay text="Good Morning, Mathew! Need Help Today?" />
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
          text="Learn About Insurance"
        />
      </Card>
    </Box>
  );
};

export default WelcomeCard;
