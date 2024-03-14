import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
// import image1 from '../../assets/ReferenceBlogs/image1.jpg';
// import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ReferenceBlogsStyles from "./ReferenceBlogsStyles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import playIcon from "../../assets/Group 5717.svg";
export interface BlogData {
  image: string;
  description: string;
  videoUrl?: string;
}

const ReferenceBlogsContainer: React.FC<{ data: BlogData }> = ({ data }) => {
  return (
    <Card sx={ReferenceBlogsStyles.card}>
      <Box sx={ReferenceBlogsStyles.cardImage}>
        <img src={data.image} alt="cardImage" />
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
