import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { videoUrl, youtubeVideoUrl } from "../../../constants/Constants";
import QuickReferencesStyle from "./QuickReferencesStyle";
import img2 from "../../../assets/svgs/group2.svg";
import img4 from "../../../assets/svgs/group4.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface quickReference {
  src: string;
  description: string;
  type: string;
}

const QuickReferences = () => {
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

  const getQuickReferences = () => {
    return [
      {
        src: videoUrl,
        description: "Navigating Auto Liability Limits.",
        type: "video",
      },
      {
        src: img2,
        description:
          "Which type of insurance is best for your automobile life.",
        type: "",
      },
      {
        src: youtubeVideoUrl,
        description: "Navigating Auto Liability Limits.",
        type: "video",
      },
      {
        src: img4,
        description: "Make your insurance effective",
        type: "",
      },
    ].map((item: quickReference, index: number) => (
      <Card
        key={`QucikReference_${index}`}
        sx={QuickReferencesStyle.qucikReferencesCard}
      >
        {item.type === "video" && (
          <>
            <CardMedia
              component="iframe"
              src={item.src}
              sx={{
                aspectRatio: "16/9",
                height: "inherit",
                border: 0,
              }}
              allowFullScreen
              allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoPlay=0"
            />
            <CardContent sx={QuickReferencesStyle.quickReferencesCardContent}>
              <Typography
                sx={QuickReferencesStyle.quickReferencesCardContentText}
              >
                {item.description}
              </Typography>
            </CardContent>
          </>
        )}
        {item.type !== "video" && (
          <>
            <CardMedia component="img" src={item.src} alt="green iguana" />
            <CardContent sx={QuickReferencesStyle.quickReferencesCardContent}>
              <Typography
                sx={QuickReferencesStyle.quickReferencesCardContentText}
              >
                {item.description}
              </Typography>
              <Button variant="outlined" sx={QuickReferencesStyle.readMoreBtn}>
                Read More
              </Button>
            </CardContent>
          </>
        )}
      </Card>
    ));
  };

  return (
    <Box sx={QuickReferencesStyle.quickReferences}>
      <Typography sx={QuickReferencesStyle.quickReferencesHeading}>
        Quick References For You
      </Typography>
      <Box sx={QuickReferencesStyle.qucikReferencesCards}>
        {getQuickReferences()}
      </Box>
      <Box sx={QuickReferencesStyle.carousel}>
        <Slider {...slickSettings}>{getQuickReferences()}</Slider>
      </Box>
    </Box>
  );
};

export default QuickReferences;
