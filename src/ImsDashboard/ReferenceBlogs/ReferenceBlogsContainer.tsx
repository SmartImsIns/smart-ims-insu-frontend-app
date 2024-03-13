
import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ReferenceBlogsStyles from "./ReferenceBlogsStyles";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import playIcon from "../../assets/Group 5717.svg";
import image1 from '../../assets/ReferenceBlogImage1.svg';
import image2 from '../../assets/ReferenceBlogImage2.svg';
import image3 from '../../assets/ReferenceBlogImage3.svg';
import image4 from '../../assets/ReferenceBlogImage4.svg';

export interface BlogData {
  id: string; 
  image?: string;
  description: string;
  videoUrl?: string;
}

const getImageForId = (id: string): string => {
  switch (id) {
    case '1':
      return image1;
    case '2':
      return image2;
    case '3':
      return image3;
    case '4':
      return image4;
    default:
      return ''; 
  }
};

const ReferenceBlogsContainer: React.FC<{ data: BlogData }> = ({ data }) => {
  const imageSrc = data.image || getImageForId(data.id);
  return (
    <Card sx={ReferenceBlogsStyles.card}>
      <Box sx={ReferenceBlogsStyles.cardImage}>
        <img src={imageSrc} alt="cardImage" />
      </Box>
      <Box sx={ReferenceBlogsStyles.cardDescription}>
        <Typography>{data.description}</Typography>
        <Box sx={ReferenceBlogsStyles.cardButtonIcon}>
          {data.videoUrl ? (
            <Button sx={ReferenceBlogsStyles.playButton}>
              <img src={playIcon} alt="playIcon" />
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              sx={ReferenceBlogsStyles.cardBottomButton}
            >
              Read More
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default ReferenceBlogsContainer;
