import React from "react";
import CoverageAndLinks from "./CoverageAndLinksTable";
import DiscountsTable from "./DiscountsTable";
import PremiumTable from "./PremiumTable";
import { Box } from "@mui/material";
import CoverageTabStyles from "./CoverageTabStyles";
import ResponsiveCoverageTab from "./ResponsiveCoveragesTab";
type Props = {};

const CoverageComponent = (props: Props) => {
  return (
    <Box>
      <Box sx={CoverageTabStyles.container}>
        <PremiumTable />
        <CoverageAndLinks />
        <DiscountsTable />
      </Box>
      <Box sx={CoverageTabStyles.container2}>
        <ResponsiveCoverageTab />
      </Box>
    </Box>
  );
};

export default CoverageComponent;
