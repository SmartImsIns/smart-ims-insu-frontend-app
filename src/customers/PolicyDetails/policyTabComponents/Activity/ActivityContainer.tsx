import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import ActivityStyles from "./ActivityStyles";
import ActivityCard from "./ActivityCard";
import ActivityData from "../../../../mockJson/CustomerDashboard/ActivityPageData.json";

const ActivityContainer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
      <Box sx={ActivityStyles.container}>
        {ActivityData.slice(0, isMobile ? 4 : 5).map((activity, index) => (
          <ActivityCard key={index} data={activity} />
        ))}
      </Box>
  );
};

export default ActivityContainer;
