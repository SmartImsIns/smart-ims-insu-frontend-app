import React from "react";
import { Box, Card } from "@mui/material";
import DynamicTextDisplay from "../common/DynamicTextDisplay";
import ImsDashboardStyle from "../ImsDashboardStyle";
import DashBoardCardItem from "../common/DashBoardCardItem";
import {
  ASSISTANCE_ICON,
  learnAbout,
  LEARN_ICON,
  newClaim,
  paymentHistory,
  PAYMENT_ICON,
  roadSideAssistance,
  STAR_ICON,
} from "../../constants/Constants";

type Props = {};

const WelcomeCard: React.FC = (props: Props) => {
  return (
    <Box sx={ImsDashboardStyle.welcomeCardsContainer}>
      <DynamicTextDisplay text="Good Morning, Mathew! Need help today?" />
      <Card sx={ImsDashboardStyle.welcomeCardStyles}>
        <DashBoardCardItem
          src={STAR_ICON}
          alt="new-claim-icon"
          text={newClaim}
        />
        <DashBoardCardItem
          src={PAYMENT_ICON}
          alt="payment-history-icon"
          text={paymentHistory}
          // style={{ marginTop: "10px" }}
        />
        <DashBoardCardItem
          src={ASSISTANCE_ICON}
          alt="roadside-assistance-icon"
          text={roadSideAssistance}
        />
        <DashBoardCardItem
          src={LEARN_ICON}
          alt="Learn-About-icon"
          text={learnAbout}
        />
      </Card>
    </Box>
  );
};

export default WelcomeCard;
