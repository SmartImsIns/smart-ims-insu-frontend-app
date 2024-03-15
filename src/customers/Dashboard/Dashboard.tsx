import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { GetDashboardData } from "./DashboardAction";
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
import DashboardStyle from "./DashboardStyle";
import {
  IDashboardRequestParams,
  IPolicy,
} from "../../models/customers/dashboard/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import QuickReferences from "./QuickReferences/QuickReferences";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getCookie } from "../../utils/Utility";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const { userDetails } = useAppSelector((store: RootState) => store.login);
  const { dashboardData } = useAppSelector(
    (store: RootState) => store.dashboard
  );

  useEffect(() => {
    const requiredParams: IDashboardRequestParams = {
      customerId: getCookie("customerId"),
    };
    dispatch(GetDashboardData(requiredParams));
  }, [dispatch]);

  const getPolicies = () =>
    dashboardData?.policyList.map((Policy: IPolicy, index: number) => (
      <Card
        sx={DashboardStyle.policyCard}
        key={`${Policy.carrierPolicyNo}_${index}`}
      >
        <CardMedia component="img" height="140" image="" alt="green iguana" />
        <CardContent sx={DashboardStyle.policyCardContent}>
          <Typography sx={DashboardStyle.policyName}>
            {Policy.productName}
          </Typography>
          <Typography sx={DashboardStyle.policyNumber}>
            {Policy.carrierPolicyNo}
          </Typography>
          <Box sx={DashboardStyle.policyDetails}>
            <Box sx={DashboardStyle.policyDetail}>
              <MoneyIcon /> ${Policy.duePremium}
            </Box>
            <Box sx={DashboardStyle.policyDetail}>
              <AccessTimeIcon /> {Policy.tenure}
            </Box>
          </Box>
          <Box sx={DashboardStyle.policyDetails}>
            <Box sx={DashboardStyle.policyDetail}>
              {Policy.LOBCode === "1" ? <HomeIcon /> : <DirectionsCarIcon />}{" "}
              {Policy.riskCount}
            </Box>
            <Box sx={DashboardStyle.policyDetail}>
              {Policy.carrierPolicyStatus === "Active" ? (
                <CheckCircleIcon sx={{ color: "green" }} />
              ) : (
                <CancelIcon sx={{ color: "red" }} />
              )}
              {Policy.carrierPolicyStatus}
            </Box>
          </Box>
          <Typography sx={DashboardStyle.policyDescription}>
            Policy will auto renew in 12 days. cancel auto renewal
          </Typography>
        </CardContent>
        <CardActions sx={DashboardStyle.policyActions}>
          <Button sx={DashboardStyle.policyActionButton}>View Policy</Button>
        </CardActions>
        <IconButton sx={DashboardStyle.policyIconButton}>
          <MoreHorizIcon sx={DashboardStyle.policyMoreIcon} />
        </IconButton>
      </Card>
    ));

  return (
    <Box sx={DashboardStyle.dashboard}>
      <Box sx={DashboardStyle.left}>
        <Box sx={DashboardStyle.welcome}>
          <Typography sx={DashboardStyle.loggedInUsername}>
            Good Afternoon, {userDetails?.customerName} !
          </Typography>
          <Typography sx={DashboardStyle.NeedHelpText}>
            Need help today ?
          </Typography>
        </Box>
        <Box sx={DashboardStyle.policiesContainer}>
          <Box sx={DashboardStyle.policiesHeadingContainer}>
            <Typography sx={DashboardStyle.policiesHeading}>
              My Policies ({dashboardData?.policyCount})
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
          <Box sx={DashboardStyle.policies}>
            {dashboardData ? getPolicies() : <></>}
          </Box>
        </Box>
        <QuickReferences />
      </Box>
    </Box>
  );
};

export default Dashboard;
