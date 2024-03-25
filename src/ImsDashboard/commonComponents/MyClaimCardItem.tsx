import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import DashBoardCardItem from "./DashBoardCardItem";
import { MyClaimCardItemStyles } from "./MyClaimCardItemStyles";
import { CSSProperties } from "@mui/material/styles/createMixins";

interface MyClaimCardItemProps {
  headText: string;
  contentText: string;
  icon?: ReactNode;
  parentClasses?: Object;
  icons: string;
  imgStyle: CSSProperties;
}

const MyClaimCardItem: React.FC<MyClaimCardItemProps> = ({
  headText,
  contentText,
  icon,
  parentClasses,
  icons,
  imgStyle,
}) => {
  return (
    <Box
      sx={{
        ...MyClaimCardItemStyles.claimsCardWrapperStyles,
        ...parentClasses,
      }}
    >
      {icon ? (
        <DashBoardCardItem
          src={icons}
          alt={"new-claim-icon"}
          text=""
          imgStyle={imgStyle}
        />
      ) : null}
      <Box sx={MyClaimCardItemStyles.claimsData}>
        <Typography sx={MyClaimCardItemStyles.HeadStyle}>{headText}</Typography>
        <Typography sx={MyClaimCardItemStyles.ContentStyle}>
          {contentText}
        </Typography>
      </Box>
    </Box>
  );
};

export default MyClaimCardItem;
