import WelcomeCard from "./ImsDashboardCards/WelcomeCard";
import MyClaimsCard from "./ImsDashboardCards/MyClaimsCard";
import AttentionCard from "./ImsDashboardCards/AttentionCard";
import { Box, Typography } from '@mui/material'
import star from "../assets/star.svg";
import PolicyContainer from './PoliciesList/PolicyContainer';


type Props = {};

const ImsDashboard = (props: Props) => {
  return (
    <Box>
      <WelcomeCard />
      <AttentionCard />
      <MyClaimsCard/>
        <PolicyContainer></PolicyContainer>
    </Box>
  );
};

export default ImsDashboard;
