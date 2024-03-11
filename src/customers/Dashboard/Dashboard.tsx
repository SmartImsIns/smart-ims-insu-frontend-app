import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { GetTestData } from "./DashboardAction";
import { Box, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoneyIcon from "@mui/icons-material/Money";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DashboardStyle from "./DashboardStyle";
import { IPolicy } from "../../models/customers/dashboard/Dashboard";
import HomeIcon from "@mui/icons-material/Home";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { dashboardData } = useAppSelector(
    (store: RootState) => store.dashboard
  );

  useEffect(() => {
    dispatch(GetTestData());
  }, [dispatch]);

  const getPolicies = () => {
    return dashboardData?.PolicyList.map((Policy: IPolicy, index: number) => {
      return (
        <Card
          sx={DashboardStyle.policyCard}
          key={`${Policy.CarrierPolicyNo}_${index}`}
        >
          <CardMedia component="img" height="140" image="" alt="green iguana" />
          <CardContent sx={DashboardStyle.policyCardContent}>
            <Typography sx={DashboardStyle.policyName}>
              {Policy.CarrierPolicyStatus}
            </Typography>
            <Typography sx={DashboardStyle.policyNumber}>
              {Policy.CarrierPolicyNo}
            </Typography>
            <Box sx={DashboardStyle.policyDetails}>
              <Box sx={DashboardStyle.policyDetail}>
                <MoneyIcon /> ${Policy.DuePremium}
              </Box>
              <Box sx={DashboardStyle.policyDetail}>
                <AccessTimeIcon /> {Policy.Tenure}{" "}
                {parseInt(Policy.Tenure) > 1 ? "Years" : "Year"}
              </Box>
            </Box>
            <Box sx={DashboardStyle.policyDetails}>
              <Box sx={DashboardStyle.policyDetail}>
                {Policy.LOBCode === "1" ? <DirectionsCarIcon /> : <HomeIcon />}{" "}
                {Policy.RiskCount}
              </Box>
              <Box sx={DashboardStyle.policyDetail}>
                <CheckCircleOutlineIcon /> {Policy.CarrierPolicyStatus}
              </Box>
            </Box>
            <Typography sx={DashboardStyle.policyDescription}>
              {Policy.CarrierPolicyNo}
            </Typography>
          </CardContent>
          <CardActions sx={DashboardStyle.policyActions}>
            <Button sx={DashboardStyle.policyActionButton}>View Policy</Button>
          </CardActions>
          <IconButton sx={DashboardStyle.policyIconButton}>
            <MoreHorizIcon sx={DashboardStyle.policyMoreIcon} />
          </IconButton>
        </Card>
      );
    });
  };

  return (
    <Box sx={DashboardStyle.dashboard}>
      <Box sx={DashboardStyle.left}>
        <Box sx={DashboardStyle.welcome}>
          <Typography sx={DashboardStyle.name}>
            Good Morning, {dashboardData?.PolicyCustomerList[0]?.CustomerName} !{" "}
          </Typography>
          <Typography sx={DashboardStyle.help}>Need help today ?</Typography>
        </Box>
        <Box sx={DashboardStyle.policiesContainer}>
          <Box sx={DashboardStyle.policiesHeadingContainer}>
            <Typography sx={DashboardStyle.policiesHeading}>
              My Policies ({dashboardData?.PolicyCount})
            </Typography>
            <Box sx={DashboardStyle.viewAllContainer}>
              <IconButton>
                <AddCircleOutlineIcon sx={DashboardStyle.addIcon} />
              </IconButton>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={DashboardStyle.viewAll}>View All</Typography>
                <IconButton>
                  <ArrowRightAltIcon sx={DashboardStyle.arrowIcon} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box sx={DashboardStyle.policies}>{getPolicies()}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
