import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import ImsDashboardStyle from "../ImsDashboardStyle";
import DashBoardCardItem from "./DashBoardCardItem";
import myClaimsIcon from "../../assets/myClaimsIcon.svg";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

interface MyClaimCardItemProps {
  headText: string;
  contentText: string;
  icon?: ReactNode;
}

const MyClaimCardItem: React.FC<MyClaimCardItemProps> = ({
  headText,
  contentText,
  icon,
}) => {
  return (
    <>
      {icon ? (
        <DashBoardCardItem src={myClaimsIcon} alt="new-claim-icon" text="" />
      ) : null}
      <Box sx={ImsDashboardStyle.claimsData}>
        <Typography sx={ImsDashboardStyle.HeadStyle}>{headText}</Typography>
        <Typography sx={ImsDashboardStyle.ContentStyle}>
          {contentText}
        </Typography>
      </Box>
    </>
  );
};

export default MyClaimCardItem;
