import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import QuickReferencesStyle from "./QuickReferencesStyle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const QuickReferences = () => {
  const getQuickReferences = () => {
    return [1, 2, 3].map((item: number, index: number) => (
      <Card
        key={`QucikReference_${index}`}
        sx={QuickReferencesStyle.qucikReferencesCard}
      >
        <CardMedia
          sx={QuickReferencesStyle.qucikReferencesCardMedia}
          component="img"
          image=""
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
