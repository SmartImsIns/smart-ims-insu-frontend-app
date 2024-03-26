import { Box, Typography } from "@mui/material";
import coverageAndLinksData from "../../../mockJson/CustomerDashboard/CoverageAndLinksData.json";
import premiumData from "../../../mockJson/CustomerDashboard/PremiumTableData.json";
import discountsData from "../../../mockJson/CustomerDashboard/DiscountsData.json";
import CoverageTabStyles from "./CoverageTabStyles";
import horizontalArrow from "../../../assets/horizontalArrow.svg";
import CoveragesLogo from "../../../assets/CoveragesLogo.svg";
import DiscountsLogo from "../../../assets/DiscountsLogo.svg";
import React, { useState } from "react";
import coveragesAndLinksData from "../../../mockJson/CustomerDashboard/CoverageAndLinksData.json";

import downArrow from "../../../assets/downArrow.svg";
const ResponsiveCoverageTab = () => {
  const [expandedItems, setExpandedItems] = useState<(boolean | undefined)[]>(
    []
  );
  const [expandedDiscounts, setExpandedDiscounts] = useState<
    (boolean | undefined)[]
  >([]);

  const handleClick = (index: number) => {
    setExpandedItems((prevExpandedItems) => {
      const newExpandedItems = [...prevExpandedItems];
      newExpandedItems[index] = !newExpandedItems[index];
      for (let i = 0; i < newExpandedItems.length; i++) {
        if (i !== index) {
          newExpandedItems[i] = false;
        }
      }
      return newExpandedItems;
    });
  };
  const handleDiscountsClick = (index: number) => {
    setExpandedDiscounts((prevExpandedDiscounts) => {
      const newExpandedDiscounts = [...prevExpandedDiscounts];
      newExpandedDiscounts[index] = !newExpandedDiscounts[index];
      for (let i = 0; i < newExpandedDiscounts.length; i++) {
        if (i !== index) {
          newExpandedDiscounts[i] = false;
        }
      }
      return newExpandedDiscounts;
    });
  };

  return (
    <Box sx={CoverageTabStyles.totalContainer}>
      <Box sx={CoverageTabStyles.responsiveContainer}>
        <Box sx={CoverageTabStyles.cardpremiums}>
          <Typography sx={CoverageTabStyles.premiumText}>
            {premiumData[0].premium}
          </Typography>
          <Typography sx={CoverageTabStyles.premiumValueText}>
            {premiumData[0].value1}
          </Typography>
        </Box>
        <Box sx={CoverageTabStyles.cardTotalPremiums}>
          <Typography sx={CoverageTabStyles.premiumText}>
            {premiumData[1].premium}
          </Typography>
          <Box sx={CoverageTabStyles.vechilePremiumValues}>
            <Box sx={CoverageTabStyles.vechilePremiumTextValues}>
              <Typography sx={CoverageTabStyles.vechileValueText}>
                {premiumData[1].value1}
              </Typography>
              <Typography sx={CoverageTabStyles.vechileNameText}>
                {premiumData[1].Vechile1}
              </Typography>
            </Box>
            <Box sx={CoverageTabStyles.vechilePremiumTextValues}>
              <Typography sx={CoverageTabStyles.vechileValueText}>
                {premiumData[1].value2}
              </Typography>
              <Typography sx={CoverageTabStyles.vechileNameText}>
                {premiumData[1].Vechile2}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={CoverageTabStyles.coverageAndLinksHeading}>
          <Box>
            <img src={CoveragesLogo} alt="coverages logo" />
          </Box>
          <Box>
            <Typography sx={CoverageTabStyles.coverageHeadingText}>
              Coverage and links
            </Typography>
          </Box>
        </Box>
        <Box sx={CoverageTabStyles.coverages}>
          <Typography sx={CoverageTabStyles.headText}>Coverages</Typography>
          <Box>
            {coverageAndLinksData
              .filter((item) => item.id !== "0")
              .map((e, index) => (
                <Box
                  key={index}
                  sx={{
                    ...CoverageTabStyles.coveragesCard,
                    backgroundColor: expandedItems[index]
                      ? "#F5FAFC"
                      : "#FFFFFF",
                    width: expandedItems[index] ? "100%" : "auto",
                    marginLeft: expandedItems[index] ? "-10px" : "0px",
                    boxShadow: expandedItems[index]
                      ? "0px 2px 4px 0px #00000017 inset"
                      : "none",
 
                  }}
                >
                  <Box sx={CoverageTabStyles.coveragesHead}>
                    <Box>
                      <Typography sx={CoverageTabStyles.coveragesTextHeading}>
                        {e.Coverages}
                      </Typography>
                      <Typography sx={CoverageTabStyles.perItemText}>
                        {e.perThing}
                      </Typography>
                    </Box>
                    <img
                      onClick={() => handleClick(index)}
                      src={expandedItems[index] ? downArrow : horizontalArrow}
                      alt={
                        expandedItems[index] ? "Down-arrow" : "Horizontal-arrow"
                      }
                    />
                  </Box>
                  <Box sx={CoverageTabStyles.limits}>
                    <Typography sx={CoverageTabStyles.limitsText}>
                      Limit
                    </Typography>
                    <Typography sx={CoverageTabStyles.limitsCount}>
                      {e.Limit}
                    </Typography>
                  </Box>
                  {expandedItems[index] && (
                    <Box sx={CoverageTabStyles.expandedItemsContainer}>
                      <Box sx={CoverageTabStyles.expandedItems}>
                        <Typography sx={CoverageTabStyles.expanededItemkeyText}>
                          {
                            coverageAndLinksData.find((item) => item.id === "0")
                              ?.Deductible
                          }
                        </Typography>
                        <Typography
                          sx={CoverageTabStyles.expanededItemvalueText}
                        >
                          {e.Deductible}
                        </Typography>
                      </Box>
                      <Box sx={CoverageTabStyles.expandedItems}>
                        <Typography sx={CoverageTabStyles.expanededItemkeyText}>
                          {
                            coverageAndLinksData.find((item) => item.id === "0")
                              ?.Vechile1
                          }
                        </Typography>
                        <Typography
                          sx={CoverageTabStyles.expanededItemvalueText}
                        >
                          {e.Vechile1}
                        </Typography>
                      </Box>
                      <Box sx={CoverageTabStyles.expandedItems}>
                        <Typography sx={CoverageTabStyles.expanededItemkeyText}>
                          {
                            coverageAndLinksData.find((item) => item.id === "0")
                              ?.Vechile2
                          }
                        </Typography>
                        <Typography
                          sx={CoverageTabStyles.expanededItemvalueText}
                        >
                          {e.Vechile2}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={CoverageTabStyles.discountsHeading}>
          <Box>
            <img src={DiscountsLogo} alt="discounts logo" />
          </Box>
          <Box>
            <Typography sx={CoverageTabStyles.discountsText}>
              Discounts
            </Typography>
          </Box>
        </Box>
        <Box sx={CoverageTabStyles.discountsCard}>
          <Typography sx={CoverageTabStyles.discountsCardTypesText}>
            Type
          </Typography>
          {discountsData
            .filter((item) => item.id !== "0")
            .map((e, index) => (
              <Box
                key={index}
                sx={{
                  ...CoverageTabStyles.discountCardContext,
                  backgroundColor: expandedDiscounts[index]
                    ? "#F5FAFC"
                    : "#FFFFFF",
                  width: expandedDiscounts[index] ? "96.7%" : "auto",
                  marginLeft: expandedDiscounts[index] ? "-10px" : "0px",
                  boxShadow: expandedDiscounts[index]
                    ? "0px 2px 4px 0px #00000017 inset"
                    : "none",
                  borderRadius: expandedDiscounts[index] ? "10px" : "0px"
                }}
              >
                <Box sx={CoverageTabStyles.discountHeadText}>
                  <Typography sx={CoverageTabStyles.typesText}>
                    {e.Types}
                  </Typography>
                  <img
                    onClick={() => handleDiscountsClick(index)}
                    src={expandedDiscounts[index] ? downArrow : horizontalArrow}
                    alt={
                      expandedDiscounts[index]
                        ? "Down-arrow"
                        : "Horizontal-arrow"
                    }
                  />
                </Box>
                <Box sx={CoverageTabStyles.discountContentText}>
                  <Typography sx={CoverageTabStyles.discountText}>
                    Discount
                  </Typography>
                  <Typography sx={CoverageTabStyles.vechileText}>
                    {e.Vechile1}
                  </Typography>
                </Box>
                {expandedDiscounts[index] && (
                  <Box sx={CoverageTabStyles.expandedItemsContainer}>
                    <Box sx={CoverageTabStyles.expandedItems}>
                      <Typography sx={CoverageTabStyles.expanededItemkeyText}>
                        {
                          discountsData.find((item) => item.id === "0")
                            ?.Vechile1
                        }
                      </Typography>
                      <Typography sx={CoverageTabStyles.expanededItemvalueText}>
                        {e.Vechile1}
                      </Typography>
                    </Box>
                    <Box sx={CoverageTabStyles.expandedItems}>
                      <Typography sx={CoverageTabStyles.expanededItemkeyText}>
                        {
                          discountsData.find((item) => item.id === "0")
                            ?.Vechile2
                        }
                      </Typography>
                      <Typography sx={CoverageTabStyles.expanededItemvalueText}>
                        {e.Vechile2}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};
export default ResponsiveCoverageTab;
