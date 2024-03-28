import { Box, Typography } from "@mui/material";
import React from "react";
import {
  claimSubmitted,
  referenceNumber,
  contactAgent,
} from "../constants/Constants";
import AcknowledgementData from "../mockJson/CustomerDashboard/AcknowledgementData.json";
import ActionButton from "../ImsDashboard/commonComponents/ActionButton";
import AcknowledgementStyles from "./Acknowledgement";
const Acknowledgement = () => {
  return (
    <Box sx={AcknowledgementStyles.container}>
      <Box sx={AcknowledgementStyles.claimData}>
        <Typography>{claimSubmitted}</Typography>
        <Typography>{referenceNumber}</Typography>
        <Typography>{AcknowledgementData[0].referenceNumber}</Typography>
      </Box>
      <Box sx={AcknowledgementStyles.agentData}>
        <Typography>{contactAgent}</Typography>
        <Typography>{AcknowledgementData[0].name}</Typography>
        <Typography>{AcknowledgementData[0].phoneNumber}</Typography>
        <Typography>{AcknowledgementData[0].emailId}</Typography>
      </Box>
      <Box>
        <ActionButton buttonText={"Track Claim"} />
      </Box>
    </Box>
  );
};
export default Acknowledgement;
