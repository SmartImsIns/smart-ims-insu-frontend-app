import { Box, Button, Card, Typography } from "@mui/material";
import ClaimsCardStyles from "./ClaimsCardStyles";
import myClaimsIcon from "../../../assets/svgs/myClaimsIcon.svg";

const ClaimsCard = () => {
  return (
    <Box sx={{ padding: "0px 30px" }}>
      <Typography sx={ClaimsCardStyles.heading}>My Claims (01)</Typography>
      <Card sx={ClaimsCardStyles.claimsCard}>
        <img src={myClaimsIcon} alt="" />
        <Box sx={ClaimsCardStyles.claimsCardItem}>
          <Typography sx={ClaimsCardStyles.claimsCardItemHeading}>
            Home_Protection
          </Typography>
          <Typography sx={ClaimsCardStyles.claimsCartItemContent}>
            12AW1145G057
          </Typography>
        </Box>
        <Box sx={ClaimsCardStyles.claimsCardItem}>
          <Typography sx={ClaimsCardStyles.claimsCardItemHeading}>
            Verification
          </Typography>
          <Typography sx={ClaimsCardStyles.claimsCartItemContent}>
            Claim Stage
          </Typography>
        </Box>
        <Box sx={ClaimsCardStyles.claimsCardItem}>
          <Typography sx={ClaimsCardStyles.claimsCardItemHeading}>
            15/02/2024
          </Typography>
          <Typography sx={ClaimsCardStyles.claimsCartItemContent}>
            Updated On
          </Typography>
        </Box>
        <Box sx={ClaimsCardStyles.claimsCardItem}>
          <Typography sx={ClaimsCardStyles.claimsCardItemHeading}>
            12/02/2024
          </Typography>
          <Typography sx={ClaimsCardStyles.claimsCartItemContent}>
            Claim Initiated
          </Typography>
        </Box>
        <Box sx={ClaimsCardStyles.claimsCardItem}>
          <Typography sx={ClaimsCardStyles.claimsCardItemHeading}>
            John Doe
          </Typography>
          <Typography sx={ClaimsCardStyles.claimsCartItemContent}>
            Contact Person
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={ClaimsCardStyles.claimsCardButton}>
            Track Your Claim
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ClaimsCard;
