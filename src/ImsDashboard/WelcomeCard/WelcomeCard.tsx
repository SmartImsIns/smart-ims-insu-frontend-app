import React from "react";
import { Box } from "@mui/material";
import DynamicTextDisplay from "../commonComponents/DynamicTextDisplay";
import DashBoardCardItem from "../commonComponents/DashBoardCardItem";
import { WelcomeCardStyles } from "./WelcomCardStyles";
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
    <Box
      sx={WelcomeCardStyles.welcomeCardContainer}
      aria-label="welcome Card Container"
    >
      <DynamicTextDisplay text={`Good Morning, ${name}! Need Help Today?`} />
      <Box sx={WelcomeCardStyles.welcomeCardStyles} aria-label="welcome Card">
        <DashBoardCardItem
          src={STAR_ICON}
          alt="new-claim-icon"
          text={newClaim}
          style={WelcomeCardStyles.startIconText}
        />
        <DashBoardCardItem
          src={PAYMENT_ICON}
          alt="payment-history-icon"
          text={paymentHistory}
          style={WelcomeCardStyles.paymentIconText}
        />
        <DashBoardCardItem
          src={ASSISTANCE_ICON}
          alt="roadside-assistance-icon"
          text={roadSideAssistance}
          style={WelcomeCardStyles.roadSideIconText}
        />
        <DashBoardCardItem
          src={LEARN_ICON}
          alt="Learn-About-icon"
          text={learnAbout}
          style={WelcomeCardStyles.learnIconText}
        />
      </Box>
    </Box>
  );
};

export default WelcomeCard;
