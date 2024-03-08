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

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { testData } = useAppSelector((store: RootState) => store.dashboard);

  useEffect(() => {
    dispatch(GetTestData());
  }, [dispatch]);

  console.log(testData);

  const getPolicies = () => {
    const element = [
      {
        policyName: "Auto_Garage101",
        policyCode: "12AW1145G057",
        amount: "821",
        tenure: "02",
        vehicles: "02",
        status: "active",
        description: "Policy will auto renew in 12 days. cancel auto renewal",
      },
      {
        policyName: "House_02 Policy",
        policyCode: "12AW1145G057",
        amount: "821",
        tenure: "01",
        vehicles: "01",
        status: "active",
        description: "Policy will auto renew in 12 days. cancel auto renewal",
      },
      {
        policyName: "Home Protection",
        policyCode: "2Aa114530g7f",
        amount: "821",
        tenure: "01",
        vehicles: "01",
        status: "active",
        description: "Policy will auto renew in 12 days. cancel auto renewal",
      },
    ].map((item: any, index: number) => {
      return (
        <Card sx={DashboardStyle.card} key={item.policyName}>
          <CardMedia component="img" height="140" image="" alt="green iguana" />
          <CardContent sx={{ height: 200, display: "grid", gap: "10px" }}>
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {item.policyName}
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "bold", color: "grey" }}
            >
              {item.policyCode}
            </Typography>
            <Box
              sx={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <MoneyIcon /> ${item.amount}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <AccessTimeIcon /> {item.tenure}{" "}
                {item.tenure > 1 ? "Years" : "Year"}
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
                <DirectionsCarIcon /> {item.vehicles}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CheckCircleOutlineIcon /> {item.status}
              </Box>
            </Box>
            <Typography sx={{ fontSize: "0.8rem", color: "#666666" }}>
              {item.description}
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
    return element;
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
            gap: "2rem",
            "@media(max-width: 780px)": {
              flexDirection: "column",
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
