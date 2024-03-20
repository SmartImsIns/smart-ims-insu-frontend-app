import React from "react";
import { Box, Card, Typography } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";
import DynamicTextDisplay from "../common/DynamicTextDisplay";
import attentionsIcon from "../../assets/attensionsIcon.svg";
import DashBoardCardItem from "../common/DashBoardCardItem";
import ActionButton from "../common/ActionButton";
import { renewalAmount, duesDate, terms } from "../../constants/Constants";

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
}) => {
  return (
    <Box sx={ImsDashboardStyle.imsDashbardContainer}>
      <DynamicTextDisplay text="Things Need Your Attention" />
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
                {renewalAmount} {renewalPrice} | {duesDate} {dueDate}
                {terms}
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
