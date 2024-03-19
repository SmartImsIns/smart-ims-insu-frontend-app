import React from "react";
import { Box, Card } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";
import myClaimsIcon from "../../assets/myClaimsIcon.svg";
import DynamicTextDisplay from "../common/DynamicTextDisplay";
import MyClaimCardItem from "../common/MyClaimCardItem";
import BlackButton from "../common/BlackButton";

type Props = {};

const MyClaimsCard = (props: Props) => {
  return (
    <Box sx={ImsDashboardStyle.imsDashbardContainer}>
      <DynamicTextDisplay text="My Claims(01)" />
      <Box>
        <Card sx={ImsDashboardStyle.myClaimsCardStyles}>
          <MyClaimCardItem
            headText="Home_Protection"
            contentText="12AW1145G057"
            icon={myClaimsIcon}
            parentClasses={ImsDashboardStyle.myClaimsCardWithIconStyles}
          />
          <MyClaimCardItem headText="Verification" contentText="Claim Stage" />
          <MyClaimCardItem headText="15/02/2024" contentText="Updated On" />
          <MyClaimCardItem
            headText="12/02/2024"
            contentText="Claim Initiated"
          />
          <MyClaimCardItem headText="John Doe" contentText="Contact Person" />
          <BlackButton
            buttonText="Track Your Claim"
            sx={ImsDashboardStyle.myClaimsCardButtonStyles}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default MyClaimsCard;
