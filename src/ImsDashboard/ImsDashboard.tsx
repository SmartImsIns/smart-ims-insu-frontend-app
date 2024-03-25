import WelcomeCard from "./WelcomeCard/WelcomeCard";
import AttentionCardContainer from "./AttentionCard/AttensionCardContainer";
import { Box } from "@mui/material";
import PolicyContainer from "./PoliciesList/PolicyContainer";
import ReferenceBlogs from "./ReferenceBlogs/ReferenceBlogs";
import AttentionCard from "./AttentionCard/AttentionCard";
import ImsDashboardStyle from "./ImsDashboardStyle";

type Props = {};

const ImsDashboard: React.FC = () => {
  return (
    <Box sx={ImsDashboardStyle.container}>
      <WelcomeCard />
      <PolicyContainer/>
      <ReferenceBlogs />
    </Box>
  );
};

export default ImsDashboard;
