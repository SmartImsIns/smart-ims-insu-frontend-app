import React from "react";
import ReferenceBlogsContainer from "./ReferenceBlogsContainer";
import { Box, Typography } from "@mui/material";
import { BlogData } from "./ReferenceBlogsContainer";
import image1 from "../../assets/Mask group.svg";
import image2 from "../../assets/Mask group (1).svg";
import image3 from "../../assets/Mask group (2).svg";
import image4 from "../../assets/Mask group (3).svg";
import ReferenceBlogsStyles from "./ReferenceBlogsStyles";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ReferenceBlogs: React.FC = () => {
  const blogsData: BlogData[] = [
    {
      image: image2,
      description: "When to make an insurance claim?",
      videoUrl: "hiiii",
    },
    {
      image: image1,
      description: "Which type of insurance is best for your automobile life.",
    },
    {
      image: image3,
      description: "How to create your first proposal?",
      videoUrl: "hiiii",
    },
    {
      image: image4,
      description: "Make your insurance effective.",
    },
  ];

  return (
    <Box>
      <Box sx={ReferenceBlogsStyles.container}>
      <Typography sx={ReferenceBlogsStyles.containerHeading}>
          Quick References For You
        </Typography>
        <Box sx={ReferenceBlogsStyles.cardsContainer}>
          {blogsData.map((blog, index) => (
            <ReferenceBlogsContainer key={index} data={blog} />
          ))}
        </Box>
      </Box>

      <Box sx={ReferenceBlogsStyles.carousel}>
      <Typography sx={ReferenceBlogsStyles.containerHeading}>
          Quick References For You
        </Typography>
      <Carousel
        showArrows={false} 
        showStatus={false} 
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
      {blogsData.map((blog, index) => (
            <ReferenceBlogsContainer key={index} data={blog} />
          ))}
      </Carousel>
      </Box>
    </Box>
  );
};

export default ReferenceBlogs;
