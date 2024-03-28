import { Box, Button, Card, Typography } from "@mui/material";
import PolicyCardStyles from "./PolicyCardStyles";
import EllipsisMenu from "../../../../common/EllipsisMenu/EllipsisMenu";
import { IPolicy } from "../../../../models/customers/dashboard/Dashboard";
import { FC } from "react";
import home from "../../../../assets/svgs/home.svg";
import car from "../../../../assets/svgs/car.svg";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface props {
  policy: IPolicy;
}

const PolicyCard: FC<props> = ({ policy }) => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate(`/customer/policyDetails/${policy.policyRef}`);
  };

  return (
    <Card sx={PolicyCardStyles.policyCard}>
      <Box sx={PolicyCardStyles.containerOne}>
        <Box sx={PolicyCardStyles.policyNumber}>
          {policy.lineCode === "1" ? (
            <img src={car} alt="car-icon" />
          ) : (
            <img src={home} alt="home-icon" />
          )}
          <Box>
            <Typography sx={PolicyCardStyles.cardTopPolicyHeading}>
              Policy Number
            </Typography>
            <Typography sx={PolicyCardStyles.cardTopPolicyNumber}>
              {policy.carrierPolicyNo}
            </Typography>
          </Box>
        </Box>
        <Box sx={PolicyCardStyles.policyStatusContainer}>
          <Typography sx={PolicyCardStyles.policyStatusHeading}>
            Status
          </Typography>
          <Typography sx={PolicyCardStyles.policyStatus}>
            {policy.carrierPolicyStatus}
          </Typography>
        </Box>
        <Typography sx={PolicyCardStyles.productName}>
          {policy.productName}
        </Typography>
      </Box>
      <Box sx={PolicyCardStyles.premium}>
        <Typography sx={PolicyCardStyles.cardBodyPremium}>
          Premium:{" "}
          <span style={{ fontWeight: "bold" }}>
            $
            {Math.floor(
              parseFloat(policy.writtenFeeAmt) +
                parseFloat(policy.writtenPremium)
            )}
          </span>{" "}
          | Term: <span style={{ fontWeight: "bold" }}>{policy.tenure}</span>
        </Typography>
      </Box>
      <Typography sx={PolicyCardStyles.dueDate}>
        Due date:22 Mar 2024 in 8 days
      </Typography>
      <Typography sx={PolicyCardStyles.dueDate}>
        <span style={PolicyCardStyles.vehicleCount}>
          {policy.riskCount}{" "}
          {policy.lineCode === "1"
            ? policy.riskCount > 1
              ? "Vehicles"
              : "Vehicle"
            : policy.riskCount > 1
            ? "Houses"
            : "House"}{" "}
        </span>
        | Prefered Risk Insurance
      </Typography>
      <Box sx={PolicyCardStyles.autoDebitActive}>
        <CheckCircleOutlineIcon sx={PolicyCardStyles.checkCircleIcon} />
        <Typography sx={PolicyCardStyles.cardBodyPremiumAuto}>
          Auto Debit Active
        </Typography>
      </Box>
      <Box sx={PolicyCardStyles.actions}>
        <Button
          variant="contained"
          sx={PolicyCardStyles.viewPolicy}
          onClick={redirectToDetails}
        >
          View Policy
        </Button>
        <EllipsisMenu />
      </Box>
    </Card>
  );
};

export default PolicyCard;
