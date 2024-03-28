import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import { useEffect } from "react";
import { GetPolicyDrivers, GetPolicyVehicles } from "../PolicyDetailsActions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store/store";
import {
  IPolicyDriver,
  IPolicyVehicle,
} from "../../../models/customers/policyDetails/PolicyDetails";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const VehicleInformation = () => {
  const dispatch = useAppDispatch();
  const { policyRef } = useParams();

  const { policyVehicles, policyDrivers } = useAppSelector(
    (store: RootState) => store.policyDetails
  );

  useEffect(() => {
    if (policyRef) {
      dispatch(GetPolicyVehicles({ policyRef }));
      dispatch(GetPolicyDrivers({ policyRef }));
    }
  }, [policyRef, dispatch]);

  return (
    <Box sx={{ display: "grid", gap: "20px", padding: "0px 30px" }}>
      <Box sx={{ display: "grid", gap: "10px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <DirectionsCarFilledIcon />
            <Typography>Vehicles</Typography>
          </Box>
          <Button variant="outlined" sx={{ width: "155px" }}>
            Add Vehicle
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f0f0f0" }}>
              <TableRow>
                <TableCell>VIN</TableCell>
                <TableCell>Make/Model</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {policyVehicles.map((policyVehicle: IPolicyVehicle) => (
                <TableRow
                  key={policyVehicle.vehIdentificationNumber}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{policyVehicle.vehIdentificationNumber}</TableCell>
                  <TableCell>
                    {policyVehicle.manufacturer + " " + policyVehicle.model}
                  </TableCell>
                  <TableCell>{policyVehicle.modelYr}</TableCell>
                  <TableCell>{policyVehicle.typeCd}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ display: "grid", gap: "10px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <PersonOutlineIcon />
            <Typography>Drivers</Typography>
          </Box>
          <Button variant="outlined" sx={{ width: "155px" }}>
            Add Driver
          </Button>
        </Box>
        {policyDrivers ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#f0f0f0" }}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Driving License</TableCell>
                  <TableCell>Driver Type</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Date Of Birth</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {policyDrivers.map((policyDriver: IPolicyDriver) => (
                  <TableRow
                    key={policyDriver.licenseNumber}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {policyDriver.givenName + " " + policyDriver.surname}
                    </TableCell>
                    <TableCell>{policyDriver.licenseNumber}</TableCell>
                    <TableCell>{policyDriver.driverStatusCd}</TableCell>
                    <TableCell>{policyDriver.genderCd}</TableCell>
                    <TableCell>{policyDriver.birthDt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default VehicleInformation;
