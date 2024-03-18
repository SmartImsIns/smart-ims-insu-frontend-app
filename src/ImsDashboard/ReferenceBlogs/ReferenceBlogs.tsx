import React from "react";
import ReferenceBlogsContainer from "./ReferenceBlogsContainer";
import { Box, Typography } from "@mui/material";
import ReferenceBlogsStyles from "./ReferenceBlogsStyles";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import * as blogsData from '../../mockJson/CustomerDashboard/ReferenceBlogsData.json';

const ReferenceBlogs: React.FC = () => {
  const parsedBlogsData = JSON.parse(JSON.stringify(blogsData)); // Parse JSON data
  const dataArray = Object.values(parsedBlogsData);
  console.log(dataArray)
  const maxItemsToMap = dataArray.length-2;

  return (
    <Box sx={{marginTop:'31px'}}>
      <Box sx={ReferenceBlogsStyles.container}>
        <Typography sx={ReferenceBlogsStyles.containerHeading}>
          Quick References For You
        </Typography>
        <Box sx={ReferenceBlogsStyles.cardsContainer}>
          {dataArray.slice(0, maxItemsToMap).map((blog: any, index: number) => (
            <ReferenceBlogsContainer key={index} data={blog} />
          ))}
        </Box>
      </Box>
      <Box sx={ReferenceBlogsStyles.carouselContainer}>
        <Typography sx={ReferenceBlogsStyles.containerHeading}>
          Quick References For You
        </Typography>
        <Box sx={ReferenceBlogsStyles.carousel}>
          <Carousel
            showArrows={false} 
            showStatus={false} 
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
          >
            {dataArray.slice(0, maxItemsToMap).map((blog: any, index: number) => (
              <ReferenceBlogsContainer key={index} data={blog} />
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default ReferenceBlogs;
