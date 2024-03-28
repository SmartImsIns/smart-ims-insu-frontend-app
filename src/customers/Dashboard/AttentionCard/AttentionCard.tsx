import { Box, Button, Card, Typography } from "@mui/material";
import AttentionsCardStyle from "./AttentionCardStyles";
import attentionsIcon from "../../../assets/svgs/attensionsIcon.svg";

const AttentionCard = () => {
  return (
    <Box sx={AttentionsCardStyle.attentionsCardContainer}>
      <Typography sx={AttentionsCardStyle.heading}>
        Things need your attenion
      </Typography>
      <Card sx={AttentionsCardStyle.attentionCard}>
        <img src={attentionsIcon} alt="attentions-icon" />
        <Box sx={AttentionsCardStyle.attentionCardItem}>
          <Typography sx={AttentionsCardStyle.attentionCardItemHeadingStyle}>
            Smart IMS life online saving plan child solutions
          </Typography>
          <Typography sx={AttentionsCardStyle.attentionCardItemContentStyle}>
            Due amount : $821 | Due Date : 22 Mar 2024
          </Typography>
        </Box>
        <Box sx={AttentionsCardStyle.attentionCardButtonContainer}>
          <Button
            variant="contained"
            sx={AttentionsCardStyle.attentionCardButton}
          >
            Pay Now
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default AttentionCard;
