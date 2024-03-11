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
          sx={DashboardStyle.card}
          key={`${Policy.CarrierPolicyNo}_${index}`}
        >
          <CardMedia component="img" height="140" image="" alt="green iguana" />
          <CardContent sx={{ height: 200, display: "grid", gap: "10px" }}>
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {Policy.CarrierPolicyStatus}
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "bold", color: "grey" }}
            >
              {Policy.CarrierPolicyNo}
            </Typography>
            <Box
              sx={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <MoneyIcon /> ${Policy.DuePremium}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <AccessTimeIcon /> {Policy.Tenure}{" "}
                {parseInt(Policy.Tenure) > 1 ? "Years" : "Year"}
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                {Policy.LOBCode === "1" ? <DirectionsCarIcon /> : <HomeIcon />}{" "}
                {Policy.RiskCount}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CheckCircleOutlineIcon /> {Policy.CarrierPolicyStatus}
              </Box>
            </Box>
            <Typography sx={{ fontSize: "0.8rem", color: "#666666" }}>
              {Policy.CarrierPolicyNo}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                fontSize: "0.7rem",
                width: "50%",
                borderRadius: "10px",
                ":hover": {
                  backgroundColor: "#000000",
                },
              }}
            >
              View Policy
            </Button>
          </CardActions>
          <IconButton
            sx={{ position: "absolute", bottom: "12px", right: "0px" }}
          >
            <MoreHorizIcon
              sx={{
                border: "3px solid #000000",
                borderRadius: "5rem",
                padding: "2px",
                fontSize: "1rem",
                color: "#000000",
              }}
            />
          </IconButton>
        </Card>
      );
    });
  };

  return (
    <Box>
      <Box>
        <Typography>Good Morning</Typography>
        <Typography></Typography>
      </Box>
      <Box
        sx={{
          width: "75%",
          "@media(max-width: 780px)": {
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            My Policies (05)
          </Typography>
          <Box sx={{ display: "flex" }}>
            <IconButton>
              <AddCircleOutlineIcon sx={{ fontSize: "2rem", color: "black" }} />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ fontSize: "0.8rem", textDecorationLine: "underline" }}
              >
                View All
              </Typography>
              <IconButton>
                <ArrowRightAltIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2%",
            "@media(max-width: 780px)": {
              flexDirection: "column",
              gap: "2rem",
            },
          }}
        >
          {getPolicies()}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
