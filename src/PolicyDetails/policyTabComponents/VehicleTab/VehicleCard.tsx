import React from "react";
import VehicleData from "../../../mockJson/CustomerDashboard/VehiclesData.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import VehicleStyles from "./VehicleStyles";
import car from "../../../assets/car.svg";
import VehicleTable from "./VehicleTable";
import DriverTable from "./DriverTable";

function VehicleCard() {
  return (
    <Box sx={VehicleStyles.discounts}>
      <VehicleTable />
      <DriverTable />
    </Box>
  );
}

export default VehicleCard;
