import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import PoliciesStyles from "./PoliciesStyles";
import {
  IDashboardRequestParams,
  IPolicy,
} from "../../../models/customers/dashboard/Dashboard";
import { getCookie } from "../../../utils/Utility";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { GetDashboardData } from "../DashboardAction";
import { RootState } from "../../../store/store";
import PolicyCard from "./PolicyCard/PolicyCard";

const Policies = () => {
  const dispatch = useAppDispatch();

  const { dashboardData } = useAppSelector(
    (store: RootState) => store.dashboard
  );

  useEffect(() => {
    const requiredParams: IDashboardRequestParams = {
      customerId: getCookie("customerId"),
    };
    dispatch(GetDashboardData(requiredParams));
  }, [dispatch]);

  return (
    <Box
      sx={{
        padding: "10px",
        "@media(max-width: 780px)": {
          padding: "0px",
        },
      }}
    >
      <Box sx={PoliciesStyles.policiesContainer}>
        <Typography sx={PoliciesStyles.heading}>
          Here is your list of policies !
        </Typography>
        {dashboardData?.policyList ? (
          <Box sx={PoliciesStyles.policies}>
            {dashboardData.policyList
              .slice(0, 3)
              .map((policy: IPolicy, index: number) => (
                <PolicyCard policy={policy} key={policy.policyRef} />
              ))}
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default Policies;
