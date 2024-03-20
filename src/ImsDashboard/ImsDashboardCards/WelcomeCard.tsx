import React from "react";
import { Box, Card } from "@mui/material";
import DynamicTextDisplay from "../common/DynamicTextDisplay";
import ImsDashboardStyle from "../ImsDashboardStyle";
import DashBoardCardItem from "../common/DashBoardCardItem";
import {
  ASSISTANCE_ICON,
  LEARN_ABOUT,
  LEARN_ICON,
  NEW_CLAIM,
  PAYMENT_HISTORY,
  PAYMENT_ICON,
  ROADSIDE_ASSISATANCE,
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
          text={NEW_CLAIM}
        />
        <DashBoardCardItem
          src={PAYMENT_ICON}
          alt="payment-history-icon"
          text={PAYMENT_HISTORY}
          // style={{ marginTop: "10px" }}
        />
        <DashBoardCardItem
          src={ASSISTANCE_ICON}
          alt="roadside-assistance-icon"
          text={ROADSIDE_ASSISATANCE}
        />
        <DashBoardCardItem
          src={LEARN_ICON}
          alt="Learn-About-icon"
          text={LEARN_ABOUT}
        />
      </Card>
    </Box>
  );
};

export default WelcomeCard;
