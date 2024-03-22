import { Box } from "@mui/material";
import DashboardStyle from "./DashboardStyle";
import QuickReferences from "./QuickReferences/QuickReferences";
import WelcomeCard from "./WelcomeCard/WelcomeCard";
import AttentionCard from "./AttentionsCard/AttentionsCard";
import ClaimsCard from "./ClaimsCard/ClaimsCard";
import Policies from "./Policies/Policies";

const Dashboard = () => {
  return (
    <Box sx={DashboardStyle.dashboard}>
      <WelcomeCard />
      <AttentionCard />
      <ClaimsCard />
      <Policies />
      <QuickReferences />
    </Box>
  );
};

export default Dashboard;
