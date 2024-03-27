import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import QuickReferencesStyle from "./QuickReferencesStyle";
import img1 from "../../../assets/svgs/group1.svg";
import img2 from "../../../assets/svgs/group2.svg";
import img3 from "../../../assets/svgs/group3.svg";
import img4 from "../../../assets/svgs/group4.svg";
import playIcon from "../../../assets/svgs/playIcon.svg";
import Slider from "react-slick";

interface quickReference {
  imgSrc: string;
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
        imgSrc: img1,
        description: "When to make an insurance claim?",
        type: "video",
      },
      {
        imgSrc: img2,
        description:
          "Which type of insurance is best for your automobile life.",
        type: "",
      },
      {
        imgSrc: img3,
        description: "How to create your first proposal?",
        type: "video",
      },
      {
        imgSrc: img4,
        description: "Make your insurance effective",
        type: "",
      },
    ].map((item: quickReference, index: number) => (
      <Card
        key={`QucikReference_${index}`}
        sx={QuickReferencesStyle.qucikReferencesCard}
      >
        <CardMedia
          sx={{ height: "160px" }}
          component="img"
          src={item.imgSrc}
          alt="green iguana"
        />
        <CardContent sx={QuickReferencesStyle.quickReferencesCardContent}>
          <Typography sx={QuickReferencesStyle.quickReferencesCardContentText}>
            {item.description}
          </Typography>
          {item.type === "video" ? (
            <Box>
              <img src={playIcon} alt="" />
            </Box>
          ) : (
            <Box>
              <Button variant="outlined" sx={QuickReferencesStyle.readMoreBtn}>
                Read More
              </Button>
            </Box>
          )}
        </CardContent>
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
    </Box>
  );
};

export default QuickReferences;
