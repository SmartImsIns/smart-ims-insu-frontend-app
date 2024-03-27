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
import rightArrowIcon from "../../../assets/viewAllArrow.svg";

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
    <Box sx={PoliciesStyles.policiesContainer}>
      <Box sx={PoliciesStyles.policiesContainerHeader}>
        <Typography sx={PoliciesStyles.heading}>
          Here is your list of policies
        </Typography>
        <Box sx={PoliciesStyles.viewAll}>
          <Typography sx={PoliciesStyles.viweAllText}>View All</Typography>
          <img src={rightArrowIcon} alt="right-arrow-icon" />
        </Box>
      </Box>
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
  );
};

export default Policies;
