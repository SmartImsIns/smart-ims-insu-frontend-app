import React from "react";
import VehicleData from "../../../mockJson/CustomerDashboard/VehiclesData.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card, Box, Typography } from "@mui/material";
import VehicleStyles from "./VehicleStyles";
import car from "../../../assets/car.svg";
import { vehicle } from "../../../constants/Constants";

function VehicleTable() {
  return (
    <Box>
      <Box sx={VehicleStyles.headingAndButton}>
        <Box sx={VehicleStyles.vehicleHeading}>
          <Box>
            <img
              src={car}
              alt="discounts logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Box>
          <Box>
            <Typography sx={VehicleStyles.HeadingText}>
              {vehicle} ({VehicleData.length})
            </Typography>
          </Box>
        </Box>
        <Box sx={VehicleStyles.addVehicleButton}>Add Vehicle</Box>
      </Box>

      <TableContainer sx={VehicleStyles.tableContainer} component={Paper}>
        <Table>
          <TableHead sx={{ borderBottom: "2px solid rgba(63, 63, 63, 1)" }}>
            <TableRow>
              {Object.keys(VehicleData[0]).map(
                (key, index) =>
                  key !== "id" && (
                    <TableCell key={index} sx={VehicleStyles.tableHead}>
                      {key}
                    </TableCell>
                  )
              )}
              <TableCell sx={VehicleStyles.rowEmpty}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {VehicleData.map((row, index) => (
              <TableRow key={row.id} sx={VehicleStyles.row}>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowOne,
                    borderBottom:
                      index === VehicleData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.VIN}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowTwo,
                    borderBottom:
                      index === VehicleData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.Model}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowThree,
                    borderBottom:
                      index === VehicleData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.Year}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowFour,
                    borderBottom:
                      index === VehicleData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.Type}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowEmpty,
                    borderBottom:
                      index === VehicleData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                ></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {VehicleData.map((vehicle) => (
        <Card key={vehicle.id} sx={VehicleStyles.mobileCard}>
          <Box sx={VehicleStyles.vin}>{vehicle.VIN}</Box>
          <Box sx={VehicleStyles.modelYear}>
            <Box sx={VehicleStyles.model}>{vehicle.Model}</Box>
            <Box sx={VehicleStyles.year}>{vehicle.Year}</Box>
          </Box>
          <Box>
            <Box sx={VehicleStyles.type}>
              Type :&nbsp;{" "}
              <Typography sx={VehicleStyles.vehicleType}>
                {vehicle.Type}
              </Typography>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default VehicleTable;
