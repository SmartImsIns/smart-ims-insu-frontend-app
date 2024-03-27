import { Box } from "@mui/material";
import DashboardStyle from "./DashboardStyle";
import QuickReferences from "./QuickReferences/QuickReferences";
import WelcomeCard from "./WelcomeCard/WelcomeCard";
import ClaimsCard from "./ClaimCard/ClaimCard";
import Policies from "./Policies/Policies";
import AttentionCard from "./AttentionCard/AttentionCard";

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
