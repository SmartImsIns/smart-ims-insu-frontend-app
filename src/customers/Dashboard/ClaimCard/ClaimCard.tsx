import { Box, Button, Card, Typography } from "@mui/material";
import ClaimCardStyles from "./CalimCardStyles";
import myClaimsIcon from "../../../assets/svgs/myClaimsIcon.svg";
import rightArrowIcon from "../../../assets/viewAllArrow.svg";

const ClaimsCard = () => {
  return (
    <Box sx={ClaimCardStyles.claimCardContainer}>
      <Box sx={ClaimCardStyles.claimCardsContainerHeader}>
        <Typography sx={ClaimCardStyles.heading}>My Claims (01)</Typography>
        <Box sx={ClaimCardStyles.viewAll}>
          <Typography sx={ClaimCardStyles.viweAllText}>
            View Past Claims
          </Typography>
          <img src={rightArrowIcon} alt="right-arrow-icon" />
        </Box>
      </Box>
      <Card sx={ClaimCardStyles.claimsCard}>
        <Box sx={ClaimCardStyles.claimPolicyName}>
          <img src={myClaimsIcon} alt="" />
          <Box sx={ClaimCardStyles.claimsCardItem}>
            <Typography sx={ClaimCardStyles.claimsCardItemHeading}>
              Home_Protection
            </Typography>
            <Typography sx={ClaimCardStyles.claimsCartItemContent}>
              12AW1145G057
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...ClaimCardStyles.claimsCardItem,
            "@media (max-width:992px)": {
              gridArea: "verification",
            },
          }}
        >
          <Typography sx={ClaimCardStyles.claimsCardItemHeading}>
            Verification
          </Typography>
          <Typography sx={ClaimCardStyles.claimsCartItemContent}>
            Claim Stage
          </Typography>
        </Box>
        <Box
          sx={{
            ...ClaimCardStyles.claimsCardItem,
            "@media (max-width:992px)": {
              gridArea: "updatedOn",
            },
          }}
        >
          <Typography sx={ClaimCardStyles.claimsCardItemHeading}>
            15/02/2024
          </Typography>
          <Typography sx={ClaimCardStyles.claimsCartItemContent}>
            Updated On
          </Typography>
        </Box>
        <Box
          sx={{
            ...ClaimCardStyles.claimsCardItem,
            "@media (max-width:992px)": {
              gridArea: "claimInitiated",
            },
          }}
        >
          <Typography sx={ClaimCardStyles.claimsCardItemHeading}>
            12/02/2024
          </Typography>
          <Typography sx={ClaimCardStyles.claimsCartItemContent}>
            Claim Initiated
          </Typography>
        </Box>
        <Box
          sx={{
            ...ClaimCardStyles.claimsCardItem,
            "@media (max-width:992px)": {
              gridArea: "contactPerson",
            },
          }}
        >
          <Typography sx={ClaimCardStyles.claimsCardItemHeading}>
            John Doe
          </Typography>
          <Typography sx={ClaimCardStyles.claimsCartItemContent}>
            Contact Person
          </Typography>
        </Box>
        <Box sx={ClaimCardStyles.claimsCardButtonContainer}>
          <Button variant="contained" sx={ClaimCardStyles.claimsCardButton}>
            Track Your Claim
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ClaimsCard;
