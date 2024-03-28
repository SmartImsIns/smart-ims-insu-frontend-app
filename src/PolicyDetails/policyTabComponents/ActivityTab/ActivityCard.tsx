import React, { useState, useEffect } from "react";
import { Box, Card, Typography } from "@mui/material";
import attensionsIcon from "../../../assets/attensionsIcon.svg";
import star from "../../../assets/star.svg";
import PolicyChange from "../../../assets/PolicyChange.svg";
import ClaimClosed from "../../../assets/ClaimClosed.svg";
import PolicyRenewal from "../../../assets/PolicyRenewal.svg";
import ActivityStyles from "./ActivityStyles";
import Download from "../../../assets/Download.svg";
import Document from "../../../assets/Document.svg";
import ellipsisDots from "../../../assets/ellipsisDots.svg";

export interface ActivityDetails {
  id: number;
  Heading: string;
  Description?: string;
  date: string;
  ClaimNumber?: string;
  ClosureReason?: string;
  PayoutAmount?: string;
}

interface Props {
  data: ActivityDetails;
}

const getActivityIcon = (id: number) => {
  switch (id) {
    case 1:
      return attensionsIcon;
    case 2:
      return PolicyRenewal;
    case 3:
      return PolicyChange;
    case 4:
      return ClaimClosed;
    case 5:
      return star;
    default:
      return null;
  }
};

const ActivityCard: React.FC<Props> = ({ data }) => {
  const [hover, setHover] = useState(false);
  const icon = getActivityIcon(data.id);

  return (
    <Box
      sx={ActivityStyles.oneCard}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box sx={ActivityStyles.logo}>
        {icon && <img src={icon} alt="Icon" />}
      </Box>
      <Box sx={ActivityStyles.cardContent}>
        <Typography variant="h5" component="h5" sx={ActivityStyles.heading}>
          {data.Heading}
        </Typography>
        {data.id <= 3 && (
          <Typography variant="body1" sx={ActivityStyles.description}>
            {data.Description}
          </Typography>
        )}
        {data.id === 4 && (
          <Box sx={ActivityStyles.claimNumberClosureReason}>
            <Typography variant="body1" sx={ActivityStyles.claimNumber}>
              Claim Number: {data.ClaimNumber}
            </Typography>
            <Typography sx={ActivityStyles.line}> | </Typography>
            <Typography variant="body1" sx={ActivityStyles.closureReason}>
              {" "}
              Closure Reason: {data.ClosureReason}
            </Typography>
          </Box>
        )}
        {data.id === 5 && (
          <Box sx={ActivityStyles.claimNumberClosureReason}>
            <Typography variant="body1" sx={ActivityStyles.claimNumber}>
              Claim Number: {data.ClaimNumber}
            </Typography>
            <Typography sx={{ margin: "10px 10px 0px 10px" }}> | </Typography>
            <Typography variant="body1" sx={ActivityStyles.payoutAmount}>
              {" "}
              Payout Amount: {data.PayoutAmount}
            </Typography>
          </Box>
        )}
        <Typography variant="body1" sx={ActivityStyles.date}>
          Date: {data.date}
        </Typography>
      </Box>

      {hover && (
        <Box sx={ActivityStyles.images}>
          <Box sx={ActivityStyles.hoveredImage1}>
            <img src={Download} alt="Download" />
          </Box>
          <Box sx={ActivityStyles.hoveredImage1}>
            <img src={Document} alt="Document" />
          </Box>
        </Box>
      )}
      <Typography sx={ActivityStyles.ellipsis }>
        <img src={ellipsisDots} alt="" />
      </Typography>
    </Box>
  );
};

export default ActivityCard;
