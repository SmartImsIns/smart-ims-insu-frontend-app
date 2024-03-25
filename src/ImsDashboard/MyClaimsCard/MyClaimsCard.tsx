import React, { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import claimsData from "../../mockJson/CustomerDashboard/MyClaimsData.json";
import { formatNumber } from "../../utils/Utility";
import {
  MYCLAIM_ICON,
  CAR_ICON,
  viewPast,
  VIEW_ARROW,
} from "../../constants/Constants";
import { MyClaimCardStyles } from "./MyClaimsCardStyles";
import ActionButton from "../commonComponents/ActionButton";
import DynamicTextDisplay from "../commonComponents/DynamicTextDisplay";
import MyClaimCardItem from "../commonComponents/MyClaimCardItem";
import ViewComponent from "../commonComponents/ViewComponent";
import { CSSProperties } from "@mui/material/styles/createMixins";
interface claimsData {
  houseLoanData?: {
    data: {
      id: number;
      headText: string;
      contentText: string;
    }[];
  };
  carLoanData?: {
    data: {
      id: number;
      headText: string;
      contentText: string;
    }[];
  };
}

const MyClaimsCard: React.FC = () => {
  const [claimdata, setClaimData] = useState<claimsData[]>([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        setClaimData(claimsData.flat());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formattedClaimCount = formatNumber(claimdata.length);

  return (
    <Box sx={MyClaimCardStyles.Container} aria-label="MyClaims Card Container">
      <Box sx={MyClaimCardStyles.container1}>
        <DynamicTextDisplay text={`My Claims(${formattedClaimCount})`} />
        <ViewComponent src={VIEW_ARROW} viewText={viewPast} />
      </Box>
      {claimdata?.map((claim, id) => (
        <Box key={id}>
          <Card sx={MyClaimCardStyles.myClaimsCardStyles}>
            {claim?.houseLoanData?.data?.map((item: any, index: number) => (
              <MyClaimCardItem
                key={index}
                headText={item.headText}
                contentText={item.contentText}
                icons={index === 0 ? MYCLAIM_ICON : "image not found"}
                imgStyle={MyClaimCardStyles.imgStyle}
                icon={index === 0 ? MYCLAIM_ICON : undefined}
                parentClasses={
                  index === 0
                    ? MyClaimCardStyles.myClaimsCardWithIconStyles
                    : "none"
                }
              />
            ))}
            {claim?.carLoanData?.data?.map((item: any, index: number) => (
              <MyClaimCardItem
                key={index}
                headText={item.headText}
                contentText={item.contentText}
                icons={index === 0 ? CAR_ICON : "image not found"}
                icon={index === 0 ? CAR_ICON : undefined}
                imgStyle={MyClaimCardStyles.imgStyle}
                parentClasses={
                  index === 0
                    ? MyClaimCardStyles.myClaimsCardWithIconStyles
                    : "none"
                }
              />
            ))}
            <Box sx={MyClaimCardStyles.trackYourClaimButton}>
              <ActionButton
                buttonText="Track Your Claim"
                sx={MyClaimCardStyles.myClaimsCardButtonStyles}
              />
            </Box>
            <Box sx={MyClaimCardStyles.trackYourClaimText}>
              <Typography sx={MyClaimCardStyles.trackYourClaim}>
                Track Your Claim
              </Typography>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default MyClaimsCard;
