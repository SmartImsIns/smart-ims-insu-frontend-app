import { Box, Card, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import claimsData from "../../../mockJson/CustomerDashboard/ClaimsData.json";
import { MyClaimCardStyles } from "../../../ImsDashboard/MyClaimsCard/MyClaimsCardStyles";
import MyClaimCardItem from "../../../ImsDashboard/commonComponents/MyClaimCardItem";
import { MYCLAIM_ICON, CAR_ICON } from "../../../constants/Constants";
import ClaimsTabStyles from "./ClaimsTabStyles";

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
                imgStyle={MyClaimCardStyles.imgStyle}
                icons={index === 0 ? MYCLAIM_ICON : ""}
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
                imgStyle={MyClaimCardStyles.imgStyle}
                contentText={item.contentText}
                icons={index === 0 ? CAR_ICON : ""}
                icon={index === 0 ? CAR_ICON : undefined}
                parentClasses={
                  index === 0
                    ? MyClaimCardStyles.myClaimsCardWithIconStyles
                    : "none"
                }
              />
            ))}
            <Box sx={MyClaimCardStyles.trackYourClaimButton}>
              <Link href="#" sx={ClaimsTabStyles.linkStyle}>
                <Typography sx={MyClaimCardStyles.trackYourClaim}>
                  {linkText}
                </Typography>
              </Link>
            </Box>
            <Box sx={MyClaimCardStyles.trackYourClaimText}>
              <Link href="#" sx={ClaimsTabStyles.linkStyle}>
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
