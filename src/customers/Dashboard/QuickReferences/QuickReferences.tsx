import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { videoUrl } from '../../../constants/Constants';
import QuickReferencesStyle from "./QuickReferencesStyle";
import img1 from "../../../assets/svgs/group1.svg";
import img2 from "../../../assets/svgs/group2.svg";
// import img3 from "../../../assets/svgs/group3.svg";
import img4 from "../../../assets/svgs/group4.svg";
// import playIcon from "../../../assets/svgs/playIcon.svg";

interface quickReference {
  imgSrc: string;
  description: string;
  type: string;
}

const QuickReferences = () => {
  const getQuickReferences = () => {
    return [
      {
        imgSrc: img1,
        description: "When to make an insurance claim?",
        type: "",
      },
      {
        imgSrc: img2,
        description:
          "Which type of insurance is best for your automobile life.",
        type: "",
      },
      {
        imgSrc: 'https://www.youtube.com/embed/JFjOpajKeOw',
        description: "",
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
        {item.type === "video" && (
          <CardMedia component="iframe" 
            src={videoUrl}
            sx={{
              aspectRatio: "16/9",
              height: 'inherit',
              border: 0
            }}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
        {item.type !== "video" && (
          <>
            <CardMedia
              sx={QuickReferencesStyle.qucikReferencesCardMedia}
              component="img"
              src={item.imgSrc}
              alt="green iguana"
            />
            <CardContent sx={QuickReferencesStyle.quickReferencesCardContent}>
              <Typography sx={QuickReferencesStyle.quickReferencesCardContentText}>
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
    </Box>
  );
};

export default QuickReferences;
