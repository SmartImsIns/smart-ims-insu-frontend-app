import WelcomeCard from "./ImsDashboardCards/WelcomeCard";
import AttentionCardContainer from "./ImsDashboardCards/AttensionCardContainer";
import { Box } from "@mui/material";
import PolicyContainer from "./PoliciesList/PolicyContainer";
import ReferenceBlogs from "./ReferenceBlogs/ReferenceBlogs";
import ImsDashboardStyle from "./ImsDashboardStyle";
import MyClaimsCard from "./ImsDashboardCards/MyClaimsCard";

type Props = {};

const ImsDashboard = (props: Props) => {
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
