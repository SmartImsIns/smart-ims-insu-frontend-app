import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import PolicyStyles from "./PolicyStyles";
import EllipsisMenu from "../EllipsisMenu/EllipsisMenu";
import { useNavigate } from "react-router-dom";
import car from "../../assets/car.svg";
import home from "../../assets/home.svg";

export interface PolicyData {
  id: string;
  policyNumber: string;
  status: string;
  plan: string;
  premium: string;
  term: string;
  autoDeduct: boolean;
  dueDate: string;
  days: string;
  type: string;
  insurance: string;
}

interface Props {
  data: PolicyData;
}

const getImage = (id: string) => {
  switch (id) {
    case "1":
      return home;
    case "2":
      return car;
    default:
      return "";
  }
};

const PolicyCard: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/policy-details");
    // console.info("You clicked on policy");
  };
  const logo = getImage(data.id);

  return (
    <Card sx={PolicyStyles.oneCard} onClick={handleClick}>
      <Box sx={PolicyStyles.card}>
        <Box sx={PolicyStyles.cardIcon}>
          {logo && <img src={logo} alt="Policy Icon" />}
        </Box>
        <Box sx={PolicyStyles.cardTopLeft}>
          <Box>
            <Typography variant="body1" sx={PolicyStyles.cardTopPolicyHeading}>
              Policy Number
            </Typography>
            <Typography variant="body1" sx={PolicyStyles.cardTopPolicyNumber}>
              {data.policyNumber}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={PolicyStyles.cardTopStatusHeading}>
              Status
            </Typography>
            <Typography variant="body1" sx={PolicyStyles.cardTopStatusDate}>
              {data.status}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" sx={PolicyStyles.cardBodyHeading}>
          {data.plan}
        </Typography>
        <Box sx={PolicyStyles.autoDeduct}>
          <Typography variant="body1" sx={PolicyStyles.cardBodyPremium}>
            premium: {data.premium} | term: {data.term}
          </Typography>
          <Box sx={PolicyStyles.cardBodyPremiumAuto}>
            <Typography component="span" variant="body1">
              {data.autoDeduct ? "auto deduct" : ""}
            </Typography>
          </Box>
        </Box>
        <Box sx={PolicyStyles.card}>
          <Typography variant="body1" sx={PolicyStyles.cardBodyDueDate}>
            due date: {data.dueDate}
          </Typography>
          {Number(data.days) <= 15 && (
            <Typography
              component="span"
              variant="body1"
              sx={PolicyStyles.cardBodyDay}
            >
              in {data.days} days
            </Typography>
          )}
        </Box>
        <Typography variant="body1" sx={PolicyStyles.cardBodyInsure}>
          {data.type} | {data.insurance}
        </Typography>
      </Box>
      <Box sx={PolicyStyles.button}>
        <Button
          variant="contained"
          color="secondary"
          sx={PolicyStyles.cardBottomButton}
        >
          Cancel Renewal
        </Button>
        <Box sx={PolicyStyles.ellipsisButton}>
          <EllipsisMenu />
        </Box>
      </Box>
    </Card>
  );
};

export default PolicyCard;
