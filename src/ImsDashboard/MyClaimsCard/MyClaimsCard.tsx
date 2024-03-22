import React, { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";
import claimsData from "../../mockJson/CustomerDashboard/MyClaimsData.json";
import { formatNumber } from "../../utils/Utility";
import { MYCLAIM_ICON, CAR_ICON } from "../../constants/Constants";
import viewAllArrow from "../../assets/viewAllArrow.svg";
import { MyClaimCardStyles } from "./MyClaimsCardStyles";
import ActionButton from "../commonComponents/ActionButton";
import DynamicTextDisplay from "../commonComponents/DynamicTextDisplay";
import MyClaimCardItem from "../commonComponents/MyClaimCardItem";
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DynamicTextDisplay text={`My Claims (${formattedClaimCount})`} />
        <Box sx={MyClaimCardStyles.box}>
          <Typography sx={MyClaimCardStyles.headTypo}>
            {"View Past Claims"}
          </Typography>
          <Box sx={MyClaimCardStyles.arrowImgBox}>
            <img src={viewAllArrow} alt="view-all-arrow" />
          </Box>
        </Box>
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
