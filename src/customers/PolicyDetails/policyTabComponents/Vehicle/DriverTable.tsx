// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { Card, Box, Typography } from "@mui/material";
import VehicleStyles from "./VehicleStyles";
import { driver } from "../../../../constants/Constants";
import DriverLogo from "../../../../assets/DriverLogo.svg";
import {
  IPolicyDriver,
} from "../../../../models/customers/policyDetails/PolicyDetails";
import CustomTable from "../../../../common/CustomTable/CustomTable";

interface IProps {
  driverData: IPolicyDriver[];
}

function DriverTable(props: IProps) {
  const { driverData } = props;
  const columns = [
    {
      label: 'Name',
      accessorKey: 'givenName',
      Cell: (row: any) => {
        return `${row.givenName} ${row.surname || ''}`
      }
    },
    {
      label: 'Driving License',
      accessorKey: 'licenseNumber',
    },
    {
      label: 'Driver Type',
      accessorKey: 'driverStatusCd',
    },
    {
      label: 'Gender',
      accessorKey: 'genderCd',
    },
    {
      label: 'Date of Birth',
      accessorKey: 'birthDt',
    }
  ];
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
              {driver} ({driverData.length})
            </Typography>
          </Box>
        </Box>
        <Box sx={VehicleStyles.addVehicleButton}>Add Driver</Box>
      </Box>
      <CustomTable
        columns={columns}
        data={driverData}
      />
      {/* <TableContainer sx={VehicleStyles.tableContainer} component={Paper}>
        <Table>
          <TableHead sx={{ borderBottom: "2px solid rgba(63, 63, 63, 1)" }}>
            <TableRow>
              {['Name', 'Driving License', 'Driver Type', 'Gender', 'Date of Birth'].map(
                (key, index) =>
                <TableCell key={index} sx={VehicleStyles.tableHead}>
                  {key}
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {driverData.map((row: IPolicyDriver, index: number) => (
              <TableRow key={`driver-${index}`} sx={VehicleStyles.row}>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowName,
                    borderBottom:
                      index === driverData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {`${row.givenName} ${row.surname || ''}`}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowLicense,
                    borderBottom:
                      index === driverData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.licenseNumber}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowDriverType,
                    borderBottom:
                      index === driverData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.driverStatusCd}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowGender,
                    borderBottom:
                      index === driverData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.genderCd}
                </TableCell>
                <TableCell
                  sx={{
                    ...VehicleStyles.rowDob,
                    borderBottom:
                      index === driverData.length - 1
                        ? "transparent"
                        : "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  {row.birthDt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

      {driverData.map((driver: IPolicyDriver, index: number) => (
        <Card key={`dri-${index}`} sx={VehicleStyles.mobileCard}>
          <Box sx={VehicleStyles.modelYear}>
            <Box sx={VehicleStyles.name}>{`${driver.givenName} ${driver.surname || ''}`}</Box>
            <Box sx={VehicleStyles.gender}>{driver.genderCd}</Box>
            <Typography sx={VehicleStyles.line}>|</Typography>
            <Box sx={VehicleStyles.gender}>{driver.birthDt}</Box>
          </Box>
          <Box sx={VehicleStyles.drivingLicense}>
            {driver.licenseNumber}
          </Box>
          <Box>
            <Box sx={VehicleStyles.type}>
              Type :&nbsp;
              <Typography sx={VehicleStyles.vehicleType}>
                {driver.driverStatusCd}
              </Typography>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default DriverTable;
