import React from "react";
import { Box, Button, Card, Tooltip, Typography } from "@mui/material";
import PolicyStyles from "./PolicyStyles";
import EllipsisMenu from "../EllipsisMenu/EllipsisMenu";
import car from "../../assets/car.svg";
import home from "../../assets/home.svg";
import ActionButton from "../commonComponents/ActionButton";
import { useNavigate } from "react-router-dom";

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
  const logo = getImage(data.id);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/policy-details");
  };

  return (
    <Card sx={PolicyStyles.oneCard} onClick={handleClick}>
      <Box sx={PolicyStyles.oneCardTopSection}>
        <Box sx={PolicyStyles.card}>
          <Box sx={PolicyStyles.cardIcon}>
            {logo && <img src={logo} alt="Policy Icon" />}
          </Box>
          <Box sx={PolicyStyles.cardTopLeft}>
            <Box>
              <Typography
                variant="body1"
                sx={PolicyStyles.cardTopPolicyHeading}
              >
                Policy Number
              </Typography>
              <Typography variant="body1" sx={PolicyStyles.cardTopPolicyNumber}>
                {data.policyNumber}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={PolicyStyles.cardTopStatusHeading}
              >
                Status
              </Typography>
              <Typography variant="body1" sx={PolicyStyles.cardTopStatusDate}>
                {data.status}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Tooltip title={data.plan}>
            <Typography variant="body1" sx={PolicyStyles.cardBodyHeading}>
              {data.plan}
            </Typography>
          </Tooltip>

          <Box sx={PolicyStyles.autoDeduct}>
            <Typography variant="body1" sx={PolicyStyles.cardBodyPremium}>
              Premium: {data.premium} | Term: {data.term}
            </Typography>
            <Box sx={PolicyStyles.cardBodyPremiumAuto}>
              <Typography
                sx={PolicyStyles.cardAutoText}
                component="span"
                variant="body1"
              >
                {data.autoDeduct ? "Auto Deduct" : ""}
              </Typography>
            </Box>
          </Box>
          <Box sx={PolicyStyles.card}>
            <Typography variant="body1" sx={PolicyStyles.cardBodyDueDate}>
              Due Date: {data.dueDate}
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
      </Box>
      <Box sx={PolicyStyles.button}>
        <Box>
          <ActionButton
            sx={PolicyStyles.cardBottomButton}
            buttonText={"Cancel Renewal"}
          />
        </Box>
        <Box sx={PolicyStyles.ellipsisButton}>
          <EllipsisMenu />
        </Box>
      </Box>
    </Card>
  );
};

export default PolicyCard;
