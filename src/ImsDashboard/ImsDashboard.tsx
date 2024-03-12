import { Box } from "@mui/material";
import WelcomeCard from "./ImsDashboardCards/WelcomeCard";
import MyClaimsCard from "./ImsDashboardCards/MyClaimsCard";
import AttentionCard from "./ImsDashboardCards/AttentionCard";

type Props = {};

const ImsDashboard = (props: Props) => {
  return (
    <Box>
      <WelcomeCard />
      <AttentionCard />
      <MyClaimsCard/>
    </Box>
  );
};

export default ImsDashboard;
