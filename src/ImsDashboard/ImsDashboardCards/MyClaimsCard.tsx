import React, { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";
import DynamicTextDisplay from "../common/DynamicTextDisplay";
import MyClaimCardItem from "../common/MyClaimCardItem";
import ActionButton from "../common/ActionButton";
import claimsData from "../../mockJson/CustomerDashboard/MyClaimsData.json";
import { formatNumber } from "../../utils/Utility";
import { MYCLAIM_ICON, CAR_ICON } from "../../constants/Constants";
import viewAllArrow from "../../assets/viewAllArrow.svg";
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
    <Box sx={ImsDashboardStyle.imsDashbardContainer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DynamicTextDisplay text={`My Claims (${formattedClaimCount})`} />
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            height: "15px",
            padding: "16px 12px 16px 12px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Noto Sans",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "19.8px",
              textAlign: "left",
              cursor: "pointer",
              "@media (min-width:360px) and (max-width:599px)": {
                fontSize: "14px",
                maxWidth: "290px",
                marginTop: "3px",
              },
            }}
          >
            {"View Past Claims"}
          </Typography>
          <Box
            sx={{
              img: {
                width: "15px",
                marginBottom: "2px",
              },
            }}
          >
            <img src={viewAllArrow} alt="view-all-arrow" />
          </Box>
        </Box>
      </Box>
      {claimdata?.map((claim, id) => (
        <Box key={id}>
          <Card sx={ImsDashboardStyle.myClaimsCardStyles}>
            {claim?.houseLoanData?.data?.map((item: any, index: number) => (
              <MyClaimCardItem
                key={index}
                headText={item.headText}
                contentText={item.contentText}
                icons={index === 0 ? MYCLAIM_ICON : "image not found"}
                icon={index === 0 ? MYCLAIM_ICON : undefined}
                parentClasses={
                  index === 0
                    ? ImsDashboardStyle.myClaimsCardWithIconStyles
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
                    ? ImsDashboardStyle.myClaimsCardWithIconStyles
                    : "none"
                }
              />
            ))}
            <Box sx={ImsDashboardStyle.trackYourClaimButton}>
              <ActionButton
                buttonText="Track Your Claim"
                sx={ImsDashboardStyle.myClaimsCardButtonStyles}
              />
            </Box>
            <Box sx={ImsDashboardStyle.trackYourClaimText}>
              <Typography sx={ImsDashboardStyle.trackYourClaim}>
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
