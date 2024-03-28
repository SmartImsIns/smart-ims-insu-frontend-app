import React from "react";
import { Box, useMediaQuery, Typography } from "@mui/material";
import ActivityStyles from "./ActivityStyles";
import ActivityCard from "./ActivityCard";
import filter from "../../../assets/filter.svg";
import ActivityData from "../../../mockJson/CustomerDashboard/ActivityPageData.json";

const ActivityContainer = () => {
  const isMobile = useMediaQuery("(max-width:1024px)");

  return (
    <Box sx={ActivityStyles.container}>
      {ActivityData.slice(0, isMobile ? 4 : 5).map((activity, index) => (
        <ActivityCard
          key={index}
          data={activity}
          isLast={index === (isMobile ? 3 : 4)}
        />
      ))}
    </Box>
  );
};

export default ActivityContainer;
