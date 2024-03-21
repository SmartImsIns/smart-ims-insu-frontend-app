import React from "react";
import ReferenceBlogsContainer from "./ReferenceBlogsContainer";
import { Box, Typography } from "@mui/material";
import ReferenceBlogsStyles from "./ReferenceBlogsStyles";
// import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
// import Carousel from '@mui/lab/Carousel';
import viewAllArrow from "../../assets/viewAllArrow.svg";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as blogsData from "../../mockJson/CustomerDashboard/ReferenceBlogsData.json";
import { quickReferences, viewAll } from "../../constants/Constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ReferenceBlogs: React.FC = () => {
  const parsedBlogsData = JSON.parse(JSON.stringify(blogsData));
  const dataArray = Object.values(parsedBlogsData);
  console.log(dataArray);
  const maxItemsToMap = dataArray.length - 2;
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dotsClass: "slickDots",
  };
  return (
    <Box sx={ReferenceBlogsStyles.referenceBlogContainer}>
      <Box sx={ReferenceBlogsStyles.container}>
        <Box sx={ReferenceBlogsStyles.innerContainer}>
          <Typography sx={ReferenceBlogsStyles.containerHeading}>
            {quickReferences}
          </Typography>
        </Box>
        <Box sx={ReferenceBlogsStyles.cardsContainer}>
          {dataArray.slice(0, maxItemsToMap).map((blog: any, index: number) => (
            <ReferenceBlogsContainer key={index} data={blog} />
          ))}
        </Box>
      </Box>
      <Box sx={ReferenceBlogsStyles.carouselContainer}>
        <Typography sx={ReferenceBlogsStyles.containerHeading}>
          {quickReferences}
        </Typography>
        <Box sx={ReferenceBlogsStyles.carousel}>
          <Slider {...slickSettings}>
            {dataArray
              .slice(0, maxItemsToMap)
              .map((blog: any, index: number) => (
                <ReferenceBlogsContainer key={index} data={blog} />
              ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default ReferenceBlogs;
