import React from "react";
import { Box, Card, Typography } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";
import DynamicTextDisplay from "../common/DynamicTextDisplay";
import attentionsIcon from "../../assets/attensionsIcon.svg";
import DashBoardCardItem from "../common/DashBoardCardItem";
import ActionButton from "../common/ActionButton";
import { DUE_DATE, RENEWAL_AMOUNT, TERMS } from "../../constants/Constants";

interface AttentionCardProps {
  headText: string;
  renewalPrice: string;
  dueDate: string;
  contentText: string;
}

const AttentionCard: React.FC<AttentionCardProps> = ({
  headText,
  renewalPrice,
  dueDate,
  contentText,
}) => {
  return (
    <Box sx={ImsDashboardStyle.imsDashbardContainer}>
      <DynamicTextDisplay text="Things needs your Attentions" />
      <Card sx={ImsDashboardStyle.AttentionCardStyles}>
        <Box sx={ImsDashboardStyle.AttentionsCardBoxStyle}>
          <Box>
            <DashBoardCardItem
              src={attentionsIcon}
              alt="attentions-icon"
              text=""
            />
          </Box>
          <Box sx={ImsDashboardStyle.AttentionsCardTextStyle}>
            <Typography sx={ImsDashboardStyle.HeadStyle}>{headText}</Typography>
            <Box>
              <Typography sx={ImsDashboardStyle.ContentStyle}>
                {RENEWAL_AMOUNT} {renewalPrice} | {DUE_DATE} {dueDate}
                {TERMS}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={ImsDashboardStyle.ActionButton}>
          <ActionButton
            sx={ImsDashboardStyle.renewNowButton}
            buttonText="Renew Now"
          />
        </Box>
      </Card>
    </Box>
  );
};

export default AttentionCard;
