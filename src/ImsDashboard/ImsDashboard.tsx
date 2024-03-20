import WelcomeCard from "./WelcomeCard/WelcomeCard";
import AttentionCardContainer from "./AttentionCard/AttensionCardContainer";
import { Box } from "@mui/material";
import PolicyContainer from "./PoliciesList/PolicyContainer";
import ReferenceBlogs from "./ReferenceBlogs/ReferenceBlogs";
import ImsDashboardStyle from "./ImsDashboardStyle";
import MyClaimsCard from "./MyClaimsCard/MyClaimsCard";

type Props = {};

const ImsDashboard: React.FC = () => {
  return (
    <Box sx={ImsDashboardStyle.container}>
      <WelcomeCard />
      <AttentionCardContainer />
      <MyClaimsCard />
      <PolicyContainer />
      <ReferenceBlogs />
    </Box>
  );
};

export default ImsDashboard;
