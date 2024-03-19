import React, { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import ImsDashboardStyle from "../ImsDashboardStyle";
import myClaimsIcon from "../../assets/myClaimsIcon.svg";
import DynamicTextDisplay from "../common/DynamicTextDisplay";
import MyClaimCardItem from "../common/MyClaimCardItem";
import ActionButton from "../common/ActionButton";
import claimsData from "../../mockJson/CustomerDashboard/MyClaims.json"; // Adjusted import

interface MyClaim {
  houseLoanData?: {
    data: {
      id: number;
      headText: string;
      contentText: string;
    }[];
  };
}

const MyClaimsCard: React.FC = () => {
  const [claimdata, setClaimData] = useState<MyClaim[]>([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        console.log(claimsData);
        setClaimData(claimsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={ImsDashboardStyle.imsDashbardContainer}>
      {claimdata?.map((claim, id) => (
        <Box key={id}>
          <DynamicTextDisplay text={`My Claims ${claimdata.length}`} />{" "}
          {claimdata.length > 0 && (
            <Card sx={ImsDashboardStyle.myClaimsCardStyles}>
              {claim?.houseLoanData?.data?.map((item: any, index: number) => (
                <MyClaimCardItem
                  key={index}
                  headText={item.headText}
                  contentText={item.contentText}
                  icon={index === 0 ? myClaimsIcon : undefined}
                  parentClasses={ImsDashboardStyle.myClaimsCardWithIconStyles}
                />
              ))}
              <MyClaimCardItem
                headText="Verification"
                contentText="Claim Stage"
              />
              <MyClaimCardItem headText="15/02/2024" contentText="Updated On" />
              <MyClaimCardItem
                headText="12/02/2024"
                contentText="Claim Initiated"
              />
              <MyClaimCardItem
                headText="John Doe"
                contentText="Contact Person"
              />
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
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MyClaimsCard;
