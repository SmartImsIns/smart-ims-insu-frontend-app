import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import QuickReferencesStyle from "./QuickReferencesStyle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";

const QuickReferences = () => {
  const getQuickReferences = () => {
    return [img1, img2, img3].map((item: any, index: number) => (
      <Card
        key={`QucikReference_${index}`}
        sx={QuickReferencesStyle.qucikReferencesCard}
      >
        <CardMedia
          sx={QuickReferencesStyle.qucikReferencesCardMedia}
          component="img"
          src={item}
          alt="green iguana"
        />
        <CardContent sx={QuickReferencesStyle.quickReferencesCardContent}>
          <Typography sx={QuickReferencesStyle.quickReferencesContentText}>
            When to make an insurance claim?{" "}
          </Typography>
          <Typography sx={QuickReferencesStyle.quickReferencesContentText}>
            05min
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  return (
    <Box sx={QuickReferencesStyle.quickReferences}>
      <Box sx={QuickReferencesStyle.quickReferencesHeadingContainer}>
        <Typography sx={QuickReferencesStyle.quickReferencesHeading}>
          QuickReferences
        </Typography>
        <Box sx={QuickReferencesStyle.viewAllContainer}>
          <Typography sx={QuickReferencesStyle.viewAll}>View All</Typography>
          <ArrowRightAltIcon sx={QuickReferencesStyle.rightIcon} />
        </Box>
      </Box>
      <Box sx={QuickReferencesStyle.qucikReferencesCards}>
        {getQuickReferences()}
      </Box>
    </Box>
  );
};

export default QuickReferences;
