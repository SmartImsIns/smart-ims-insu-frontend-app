import { Box, Typography } from "@mui/material";
import coverageAndLinksData from "../../../mockJson/CustomerDashboard/CoverageAndLinksData.json";
import premiumData from "../../../mockJson/CustomerDashboard/PremiumTableData.json";
import CoverageTabStyles from "./CoverageTabStyles";
import horizontalArrow from "../../../assets/horizontalArrow.svg";
const ResponsiveCoverageTab = () => {
  console.log(premiumData);
  return (
    <Box>
      <Box sx={CoverageTabStyles.responsiveContainer}>
        <Box sx={CoverageTabStyles.cardpremiums}>
          <Typography>{premiumData[0].premium}</Typography>
          <Typography>{premiumData[0].value1}</Typography>
        </Box>
        <Box sx={CoverageTabStyles.cardTotalPremiums}>
          <Typography>{premiumData[1].premium}</Typography>
          <Box sx={CoverageTabStyles.vechilePremiumValues}>
            <Box>
              <Typography>{premiumData[1].value1}</Typography>
              <Typography>{premiumData[1].Vechile1}</Typography>
            </Box>
            <Box>
              <Typography>{premiumData[1].value2}</Typography>
              <Typography>{premiumData[1].Vechile2}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography></Typography>
        </Box>
        <Box sx={CoverageTabStyles.coverages}>
          <Typography sx={CoverageTabStyles.headText}>Coverages</Typography>
          <Box>
            {coverageAndLinksData
              .filter((item) => item.id !== "0")
              .map((e, index) => (
                <Box key={index} sx={CoverageTabStyles.coveragesCard}>
                  <Box sx={CoverageTabStyles.coveragesHead}>
                    <Box>
                      <Typography sx={CoverageTabStyles.coveragesTextHeading}>{e.Coverages}</Typography>
                      <Typography sx={CoverageTabStyles.perItemText}>{e.perThing}</Typography>
                    </Box>
                    <Box>
                      <img src={horizontalArrow} alt="Horizontal-arrow" />
                    </Box>
                  </Box>
                  <Box sx={CoverageTabStyles.limits}>
                    <Typography sx={CoverageTabStyles.limitsText}>Limit</Typography>
                    <Typography sx={CoverageTabStyles.limitsCount}>{e.Limit}</Typography>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ResponsiveCoverageTab;
