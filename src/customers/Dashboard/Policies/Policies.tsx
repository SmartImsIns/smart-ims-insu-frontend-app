import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
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

  const [viewAllPoliciesDialogOpen, setViewAllPolicesDialogOpen] =
    useState(false);

  const handleViewAllClick = () => {
    setViewAllPolicesDialogOpen(true);
  };

  const handleViewAllPoliciesModalClose = () => {
    setViewAllPolicesDialogOpen(false);
  };

  const getPolicies = () => {
    if (dashboardData && dashboardData.policyList) {
      let policies = [...dashboardData.policyList];
      policies = policies.sort((a, b) => {
        if (
          a.carrierPolicyStatus.toLowerCase() <
          b.carrierPolicyStatus.toLowerCase()
        ) {
          return -1;
        }
        if (
          a.carrierPolicyStatus.toLowerCase() >
          b.carrierPolicyStatus.toLowerCase()
        ) {
          return 1;
        }
        return 0;
      });
      if (policies.length > 0) {
        return policies;
      } else {
        return dashboardData.policyList;
      }
    } else {
      return [];
    }
  };

  useEffect(() => {
    const requiredParams: IDashboardRequestParams = {
      customerId: getCookie("customerId"),
    };
    dispatch(GetDashboardData(requiredParams));
  }, [dispatch]);

  return (
    <>
      <Box sx={PoliciesStyles.policiesContainer}>
        <Box sx={PoliciesStyles.policiesContainerHeader}>
          <Typography sx={PoliciesStyles.heading}>
            Here is your list of policies
          </Typography>
          {dashboardData && parseInt(dashboardData.policyCount) > 2 ? (
            <Box sx={PoliciesStyles.viewAll} onClick={handleViewAllClick}>
              <Typography sx={PoliciesStyles.viweAllText}>View All</Typography>
              <img src={rightArrowIcon} alt="right-arrow-icon" />
            </Box>
          ) : (
            <></>
          )}
        </Box>
        {getPolicies().length > 1 ? (
          <Box sx={PoliciesStyles.policies}>
            {getPolicies()
              .slice(0, 2)
              .map((policy: IPolicy, index: number) => (
                <PolicyCard policy={policy} key={policy.policyRef} />
              ))}
          </Box>
        ) : (
          <Card sx={PoliciesStyles.noPoliciesCard}>
            <Typography sx={PoliciesStyles.noPoliciesText}>
              No Policies Available
            </Typography>
          </Card>
        )}
      </Box>
      <Dialog
        fullWidth={true}
        maxWidth={"xl"}
        open={viewAllPoliciesDialogOpen}
        onClose={handleViewAllPoliciesModalClose}
      >
        <DialogTitle>All Policies</DialogTitle>
        <Divider />
        <DialogContent sx={PoliciesStyles.viwAllPoliciesDialogContent}>
          {dashboardData && dashboardData.policyList.length > 1 ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                "@media(max-width: 992px)": {
                  gridTemplateColumns: "1fr",
                },
              }}
            >
              {getPolicies().map((policy: IPolicy, index: number) => (
                <PolicyCard policy={policy} key={policy.policyRef} />
              ))}
            </Box>
          ) : (
            <></>
          )}
        </DialogContent>
        <Divider />
        <DialogActions sx={{ padding: "10px" }}>
          <Button onClick={handleViewAllPoliciesModalClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Policies;
