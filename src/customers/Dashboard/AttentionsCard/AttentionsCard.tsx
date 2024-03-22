import { Box, Button, Card, Typography } from "@mui/material";
import AttentionsCardStyle from "./AttentionsCardStyle";
import attentionsIcon from "../../../assets/svgs/attensionsIcon.svg";

const AttentionCard = () => {
  return (
    <Box sx={{ padding: "0px 30px" }}>
      <Typography sx={AttentionsCardStyle.heading}>
        Things need your attenion
      </Typography>
      <Card sx={AttentionsCardStyle.attentionsCard}>
        <img src={attentionsIcon} alt="attentions-icon" />
        <Box sx={AttentionsCardStyle.attentionsCardItem}>
          <Typography
            sx={{
              overflow: "hidden",
              color: "#1D252B",
              textOverflow: "ellipsis",
              fontSize: "18px",
              fontFamily: "Noto Sans",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "110%",
            }}
          >
            Smart IMS life online saving plan child solutions
          </Typography>
          <Typography
            sx={{
              textOverflow: "ellipsis",
              color: "#1D252B",
              fontSize: "18px",
              fontStyle: "normal",
              fontFamily: "Noto Sans",
              fontWeight: "300",
              lineHeight: "110%",
            }}
          >
            Renewal amount : $821 | due date : 22 Mar 2024 : Tax and Fee may
            apply.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={AttentionsCardStyle.attentionCardButton}
        >
          Renew Now
        </Button>
      </Card>
    </Box>
  );
};

export default AttentionCard;
