import React from "react";
import { Box } from "@mui/material";
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
  name,
} from "../../constants/Constants";

const WelcomeCard: React.FC = () => {
  return (
    <Box sx={ImsDashboardStyle.welcomeCardsContainer}>
      <DynamicTextDisplay text={`Good Morning, ${name}! Need Help Today?`} />
      <Box sx={ImsDashboardStyle.welcomeCardStyles}>
        <DashBoardCardItem
          src={STAR_ICON}
          alt="new-claim-icon"
          text={newClaim}
        />
        <DashBoardCardItem
          src={PAYMENT_ICON}
          alt="payment-history-icon"
          text={paymentHistory}
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
      </Box>
    </Box>
  );
};

export default WelcomeCard;
