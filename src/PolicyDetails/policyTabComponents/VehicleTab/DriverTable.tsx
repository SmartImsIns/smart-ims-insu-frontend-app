import React from "react";
import DriverData from "../../../mockJson/CustomerDashboard/DriverData.json";
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
import { driver } from "../../../constants/Constants";
import DriverLogo from "../../../assets/DriverLogo.svg";
function DriverTable() {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box sx={VehicleStyles.headingAndButton}>
        <Box sx={VehicleStyles.vehicleHeading}>
          <Box>
            <img
              src={DriverLogo}
              alt="driver logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Box>
          <Box>
            <Typography sx={VehicleStyles.HeadingText}>
              {driver} ({DriverData.length})
            </Typography>
          </Box>
        </Box>
        <Box sx={VehicleStyles.addVehicleButton}>Add Driver</Box>
      </Box>

      <TableContainer sx={VehicleStyles.tableContainer} component={Paper}>
        <Table>
          <TableHead sx={{ borderBottom: "2px solid rgba(63, 63, 63, 1)" }}>
            <TableRow>
              {Object.keys(DriverData[0]).map(
                (key, index) =>
                  key !== "id" &&
                  index !== Object.keys(DriverData[0]).length - 1 && (
                    <TableCell key={index} sx={VehicleStyles.tableHead}>
                      {key}
                    </TableCell>
                  )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {DriverData.map((row, index) => (
              <TableRow key={row.id} sx={VehicleStyles.row}>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowName,
                    borderBottom:
                      index === DriverData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.Name}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowLicense,
                    borderBottom:
                      index === DriverData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row["Driving License"]}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowDriverType,
                    borderBottom:
                      index === DriverData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row["Driver Type"]}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowGender,
                    borderBottom:
                      index === DriverData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.Gender}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowDob,
                    borderBottom:
                      index === DriverData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row["Date of Birth"]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {DriverData.map((driver) => (
        <Card key={driver.id} sx={VehicleStyles.mobileCard}>
          <Box sx={VehicleStyles.modelYear}>
            <Box sx={VehicleStyles.name}>{driver.Name}</Box>
            <Box sx={VehicleStyles.gender}>{driver.Gender}</Box>
            <Typography sx={VehicleStyles.line}>|</Typography>
            <Box sx={VehicleStyles.gender}>{driver["Date of Birth"]}</Box>
          </Box>
          <Box sx={VehicleStyles.drivingLicense}>
            {driver["Driving License"]}
          </Box>
          <Box>
            <Box sx={VehicleStyles.type}>
              Type :&nbsp;
              <Typography sx={VehicleStyles.vehicleType}>
                {driver.Type}
              </Typography>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default DriverTable;
