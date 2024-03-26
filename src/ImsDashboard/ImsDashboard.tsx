import WelcomeCard from "./WelcomeCard/WelcomeCard";
import AttentionCardContainer from "./AttentionCard/AttensionCardContainer";
import { Box } from "@mui/material";
import ImsDashboardStyle from "./ImsDashboardStyle";
import MyClaimsCard from "./MyClaimsCard/MyClaimsCard";
import PolicyContainer from "./PoliciesList/PolicyContainer";
import ReferenceBlogs from "./ReferenceBlogs/ReferenceBlogs";

type Props = {};

const ImsDashboard: React.FC = (prop: Props) => {
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
