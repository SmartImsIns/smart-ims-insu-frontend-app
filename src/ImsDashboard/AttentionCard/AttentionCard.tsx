import React from "react";
import { Box, Card, Typography } from "@mui/material";
import attentionsIcon from "../../assets/attensionsIcon.svg";
import DashBoardCardItem from "../commonComponents/DashBoardCardItem";
import ActionButton from "../commonComponents/ActionButton";
import {
  renewalAmount,
  duesDate,
  terms,
  renewNow,
} from "../../constants/Constants";
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
    <Box>
      <Card sx={AttentionCardStyles.AttentionCardStyles}>
        <Box sx={AttentionCardStyles.AttentionsCardBoxStyle}>
          <Box sx={AttentionCardStyles.icon}>
            <DashBoardCardItem
              src={attentionsIcon}
              alt={"attentions-icon"}
              text={""}
            />
          </Box>
          <Box sx={AttentionCardStyles.AttentionsCardTextStyle}>
            <Tooltip title={headText}>
              <Typography sx={AttentionCardStyles.HeadStyle}>
                {headText}
              </Typography>
            </Tooltip>
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
            buttonText={renewNow}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default AttentionCard;
