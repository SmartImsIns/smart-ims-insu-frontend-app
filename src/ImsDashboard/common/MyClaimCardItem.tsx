import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import ImsDashboardStyle from "../ImsDashboardStyle";
import DashBoardCardItem from "./DashBoardCardItem";
import myClaimsIcon from "../../assets/myClaimsIcon.svg";

interface MyClaimCardItemProps {
  headText: string;
  contentText: string;
  icon?: ReactNode;
  parentClasses?: Object;
}

const MyClaimCardItem: React.FC<MyClaimCardItemProps> = ({
  headText,
  contentText,
  icon,
  parentClasses,
}) => {
  return (
    <Box
      sx={{ ...ImsDashboardStyle.claimsCardWrapperStyles, ...parentClasses }}
    >
      {icon ? (
        <DashBoardCardItem src={myClaimsIcon} alt="new-claim-icon" text="" />
      ) : null}
      <Box sx={ImsDashboardStyle.claimsData}>
        <Typography sx={ImsDashboardStyle.HeadStyle}>{headText}</Typography>
        <Typography sx={ImsDashboardStyle.ContentStyle}>
          {contentText}
        </Typography>
      </Box>
    </Box>
  );
};

export default MyClaimCardItem;
