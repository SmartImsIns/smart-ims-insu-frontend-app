import React from "react";
// import VehicleData from "../../../../mockJson/CustomerDashboard/VehiclesData.json";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { Card, Box, Typography } from "@mui/material";
import VehicleStyles from "./VehicleStyles";
import car from "../../../../assets/car.svg";
import { vehicle } from "../../../../constants/Constants";
import {
  IPolicyVehicle,
} from "../../../../models/customers/policyDetails/PolicyDetails";
import CustomTable from "../../../../common/CustomTable/CustomTable";

interface IProps {
  vehicleData: IPolicyVehicle[];
}

function VehicleTable(props: IProps) {
  const { vehicleData } = props;
  // console.log(vehicleData)

  const columns = [
    {
      label: 'VIN',
      accessorKey: 'vehIdentificationNumber',
    },
    {
      label: 'Model',
      accessorKey: 'model',
    },
    {
      label: 'Year',
      accessorKey: 'modelYr',
    },
    {
      label: 'Type',
      accessorKey: 'typeCd',
      Cell: (row: any) => {
        return row.typeCd === 'PrivatePassengerAuto' ? 'P' : '';
      }
    }
  ];

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
              {vehicle} ({vehicleData.length})
            </Typography>
          </Box>
        </Box>
        <Box sx={VehicleStyles.addVehicleButton}>Add Vehicle</Box>
      </Box>
      <CustomTable columns={columns} data={vehicleData} />
      {/* <TableContainer sx={VehicleStyles.tableContainer} component={Paper}>
        <Table>
          <TableHead sx={{ borderBottom: "2px solid rgba(63, 63, 63, 1)" }}>
            <TableRow>
              {['VIN', 'Model', 'Year', 'Type'].map(
                (key, index) =>
                <TableCell key={index} sx={VehicleStyles.tableHead}>
                {key}
              </TableCell>
              )}
              <TableCell sx={VehicleStyles.rowEmpty}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicleData.map((row: IPolicyVehicle, index: number) => (
              <TableRow key={`vehicle-${index}`} sx={VehicleStyles.row}>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowOne,
                    borderBottom:
                      index === vehicleData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.vehIdentificationNumber}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowTwo,
                    borderBottom:
                      index === vehicleData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.model}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowThree,
                    borderBottom:
                      index === vehicleData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.modelYr}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowFour,
                    borderBottom:
                      index === vehicleData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.typeCd === 'PrivatePassengerAuto' ? 'P' : ''}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowEmpty,
                    borderBottom:
                      index === vehicleData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                ></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      {vehicleData.map((vehicle: IPolicyVehicle, index: number) => (
        <Card key={`veh-${index}`} sx={VehicleStyles.mobileCard}>
          <Box sx={VehicleStyles.vin}>{vehicle.vehIdentificationNumber}</Box>
          <Box sx={VehicleStyles.modelYear}>
            <Box sx={VehicleStyles.model}>{vehicle.model}</Box>
            <Box sx={VehicleStyles.year}>{vehicle.modelYr}</Box>
          </Box>
          <Box>
            <Box sx={VehicleStyles.type}>
              Type :&nbsp;{" "}
              <Typography sx={VehicleStyles.vehicleType}>
                {vehicle.typeCd}
              </Typography>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default VehicleTable;
