import WelcomeCard from "./WelcomeCard/WelcomeCard";
import AttentionCardContainer from "./AttentionCard/AttensionCardContainer";
import { Box } from "@mui/material";
import ImsDashboardStyle from "./ImsDashboardStyle";
import MyClaimsCard from "./MyClaimsCard/MyClaimsCard";

type Props = {};

const ImsDashboard: React.FC = () => {
  return (
    <Box sx={ImsDashboardStyle.container}>
      <WelcomeCard />
      <AttentionCardContainer />
      <MyClaimsCard />
    </Box>
  );
};

export default ImsDashboard;
