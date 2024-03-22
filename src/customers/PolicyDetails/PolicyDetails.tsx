import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Overview from "./Overview/Overview";
import CoverageAndLimits from "./CoverageAndLimits/CoverageAndLimits";
import VehicleInformation from "./VehicleInformation/VehicleInformation";
import InsuranceDocuments from "./InsuranceDocuments/InsuranceDocuments";
import CarrierDetails from "./CarrierDetails/CarrierDetails";
import Invoices from "./Invoices/Invoices";
import Claims from "./Claims/Claims";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const PolicyDetails = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: "84.5vh",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <ChevronLeftIcon
            onClick={() => navigate("/customer/dashboard")}
            sx={{ cursor: "pointer" }}
          />
          <Typography>
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Auto_Garage101
            </span>{" "}
            <span style={{ color: "#818181" }}>| 12AW1145G057</span>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <CheckCircleIcon sx={{ color: "green" }} />
            <Typography>Active</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Button variant="outlined">File a claim</Button>
          <MoreVertIcon />
        </Box>
      </Box>
      <Box></Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="Policy Details Tabs"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab value={0} label="Overview" />
        <Tab value={1} label="Coverage and Limits" />
        <Tab value={2} label="Vehicle Information" />
        <Tab value={3} label="Insurance Documents   " />
        <Tab value={4} label="Carrier Details" />
        <Tab value={5} label="Invoices" />
        <Tab value={6} label="Claims" />
      </Tabs>
      <Box
        sx={{ border: "1px solid #cccccc", margin: "10px 0px 20px 0px" }}
      ></Box>
      {value === 0 ? (
        <Overview />
      ) : value === 1 ? (
        <CoverageAndLimits />
      ) : value === 2 ? (
        <VehicleInformation />
      ) : value === 3 ? (
        <InsuranceDocuments />
      ) : value === 4 ? (
        <CarrierDetails />
      ) : value === 5 ? (
        <Invoices />
      ) : value === 6 ? (
        <Claims />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default PolicyDetails;
