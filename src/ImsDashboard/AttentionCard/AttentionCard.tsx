import React from "react";
import attentionsIcon from "../../assets/attensionsIcon.svg";
import DashBoardCardItem from "../commonComponents/DashBoardCardItem";
import ActionButton from "../commonComponents/ActionButton";
import { Box, Card, Typography, Tooltip } from "@mui/material";
import {
  renewalAmount,
  duesDate,
  terms,
  renewNow,
} from "../../constants/Constants";
import { AttentionCardStyles } from "./AttentionCardStyles";

interface AttentionCardData {
  headText: string;
  renewalPrice: string;
  dueDate: string;
  contentText: string;
}

interface AttentionCardProps {
  data: AttentionCardData;
}

const AttentionCard: React.FC<AttentionCardProps> = ({ data }) => {
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
            <Tooltip title={data.headText}>
              <Typography sx={AttentionCardStyles.HeadStyle}>
                {data.headText}
              </Typography>
            </Tooltip>
            <Box>
              <Typography sx={AttentionCardStyles.ContentStyle}>
                {renewalAmount} {data.renewalPrice} | {duesDate} {data.dueDate}
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
