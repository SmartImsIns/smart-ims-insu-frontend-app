import { Box, Card, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import claimsData from "../../../mockJson/CustomerDashboard/ClaimsData.json";
import ActionButton from "../../../ImsDashboard/commonComponents/ActionButton";
import { MyClaimCardStyles } from "../../../ImsDashboard/MyClaimsCard/MyClaimsCardStyles";
import MyClaimCardItem from "../../../ImsDashboard/commonComponents/MyClaimCardItem";
import { MYCLAIM_ICON, CAR_ICON } from "../../../constants/Constants";

interface ClaimsDataItem {
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

interface ClaimsItemProps {
  linkText: string;
}

const ClaimsItem: React.FC<ClaimsItemProps> = ({ linkText }) => {
  const [claimData, setClaimData] = useState<ClaimsDataItem[]>([]);

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

  return (
    <>
      {claimData.map((claim, id) => (
        <Box key={id}>
          <Card sx={MyClaimCardStyles.myClaimsCardStyles}>
            {claim.houseLoanData?.data?.map((item, index) => (
              <MyClaimCardItem
                key={index}
                headText={item.headText}
                contentText={item.contentText}
                icons={index === 0 ? MYCLAIM_ICON : undefined}
                icon={index === 0 ? MYCLAIM_ICON : undefined}
                parentClasses={
                  index === 0
                    ? MyClaimCardStyles.myClaimsCardWithIconStyles
                    : "none"
                }
              />
            ))}
            {claim.carLoanData?.data?.map((item, index) => (
              <MyClaimCardItem
                key={index}
                headText={item.headText}
                contentText={item.contentText}
                icons={index === 0 ? CAR_ICON : undefined}
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
                buttonText={linkText}
                sx={MyClaimCardStyles.myClaimsCardButtonStyles}
              />
            </Box>
            <Box sx={MyClaimCardStyles.trackYourClaimText}>
              <Link href="#">
                <Typography sx={MyClaimCardStyles.trackYourClaim}>
                  {linkText}
                </Typography>
              </Link>
            </Box>
          </Card>
        </Box>
      ))}
    </>
  );
};

export default ClaimsItem;
