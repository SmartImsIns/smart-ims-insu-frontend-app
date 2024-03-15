import React from "react";
import ActivityContainer from "./ActivityTab/ActivityContainer";
import { Box, Card, Typography } from "@mui/material";
import CarrierDetailsContainer from "./CarrierDetails/CarrierDetailsContainer";
import ActivityTabStyles from "./ActivityTabStyles";
import filter from "../../assets/filter.svg";

type Props = {};

const ActivityTabComponent = (props: Props) => {
  return (
    <Box>
      <Box sx={ActivityTabStyles.filter}>
        <Box sx={ActivityTabStyles.tableHeadingFilterImage}>
          <img src={filter} alt="filter" />
        </Box>
        <Typography sx={ActivityTabStyles.tableHeadingFilterText}>
          Filter
        </Typography>
      </Box>
      <Card sx={ActivityTabStyles.container}>
        <Box sx={ActivityTabStyles.active}>
          <ActivityContainer />
        </Box>
        <Box sx={ActivityTabStyles.carrier}>
          <CarrierDetailsContainer />
        </Box>
      </Card>
    </Box>
  );
};

export default ActivityTabComponent;
