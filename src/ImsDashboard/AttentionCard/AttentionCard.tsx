import React from "react";
import { Box, Card, Tooltip, Typography } from "@mui/material";
import DynamicTextDisplay from "../commonComponents/DynamicTextDisplay";
import attentionsIcon from "../../assets/attensionsIcon.svg";
import DashBoardCardItem from "../commonComponents/DashBoardCardItem";
import ActionButton from "../commonComponents/ActionButton";
import { renewalAmount, duesDate, terms } from "../../constants/Constants";
import { AttentionCardStyles } from "./AttentionCardStyles";

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
    <Box sx={AttentionCardStyles.Container}>
      <DynamicTextDisplay text="Things Need Your Attention" />
      <Card sx={AttentionCardStyles.AttentionCardStyles}>
        <Box sx={AttentionCardStyles.AttentionsCardBoxStyle}>
          <Box sx={{ marginBottom: "19px" }}>
            <DashBoardCardItem
              src={attentionsIcon}
              alt="attentions-icon"
              text=""
            />
          </Box>
          <Box sx={AttentionCardStyles.AttentionsCardTextStyle}>
            <Typography sx={AttentionCardStyles.HeadStyle}>
              {headText}
            </Typography>
            <Box>
              <Typography sx={AttentionCardStyles.ContentStyle}>
                {renewalAmount} {renewalPrice} | {duesDate} {dueDate}
                {terms}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={AttentionCardStyles.ActionButton}>
          <ActionButton
            sx={AttentionCardStyles.renewNowButton}
            buttonText="Renew Now"
          />
        </Box>
      </Card>
    </Box>
  );
};

export default AttentionCard;
