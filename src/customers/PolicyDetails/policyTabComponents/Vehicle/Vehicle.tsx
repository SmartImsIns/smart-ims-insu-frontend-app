import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { GetPolicyDrivers, GetPolicyVehicles } from "../../PolicyDetailsActions";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import VehicleTable from "./VehicleTable";
import DriverTable from "./DriverTable";
import VehicleStyles from "./VehicleStyles";

const Vehicle = () => {
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
    <Box sx={VehicleStyles.discounts}>
      <VehicleTable vehicleData={policyVehicles} />
      <DriverTable driverData={policyDrivers} />
    </Box>
  );
}

export default Vehicle;
