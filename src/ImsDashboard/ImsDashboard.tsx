import WelcomeCard from "./ImsDashboardCards/WelcomeCard";
import MyClaimsCard from "./ImsDashboardCards/MyClaimsCard";
import AttentionCard from "./ImsDashboardCards/AttentionCard";
import { Box } from '@mui/material'
import PolicyContainer from './PoliciesList/PolicyContainer';
import ReferenceBlogs from './ReferenceBlogs/ReferenceBlogs';
import ImsDashboardStyle from "./ImsDashboardStyle";

type Props = {};

const ImsDashboard = (props: Props) => {
  return (
    <Box sx={ImsDashboardStyle.container}>
      <WelcomeCard />
      <AttentionCard />
      <MyClaimsCard/>
      <PolicyContainer/>
      <ReferenceBlogs />
    </Box>
  );
};

export default ImsDashboard;
