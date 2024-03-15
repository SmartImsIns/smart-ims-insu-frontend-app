import React from 'react'
import CoverageAndLinks from './CoverageAndLinksTable';
import DiscountsTable from './DiscountsTable';
import PremiumTable from './PremiumTable';
import { Box } from "@mui/material";
import CoverageTabStyles from './CoverageTabStyles';
type Props = {}

const CoverageComponent = (props: Props) => {
  return (
    <Box sx={CoverageTabStyles.container}>
     <PremiumTable />
   <CoverageAndLinks />
   <DiscountsTable />
   </Box>
  )
}

export default CoverageComponent