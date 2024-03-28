import { Box, Typography } from "@mui/material";
import React from "react";
import {
  claimSubmitted,
  referenceNumber,
  contactAgent,
} from "../constants/Constants";
import AcknowledgementData from "../mockJson/CustomerDashboard/AcknowledgementData.json";
import ActionButton from "../ImsDashboard/commonComponents/ActionButton";
import AcknowledgementStyles from "./AcknowledgementStyles";
import success from '../assets/success.svg';
import emailIcon from '../assets/mail-1.svg';
import mobileIcon from '../assets/phone-1.svg'
const Acknowledgement = () => {
  return (
    <Box sx={AcknowledgementStyles.container}>
        <Box sx={AcknowledgementStyles.successImage}>
            <img src={success} alt="success" />
        </Box>
      <Box sx={AcknowledgementStyles.claimData}>
        <Typography sx={AcknowledgementStyles.claimSubmittedText}>{claimSubmitted}</Typography>
        <Typography sx={AcknowledgementStyles.referenceNumberText}>{referenceNumber}</Typography>
        <Typography sx={AcknowledgementStyles.referenceNumber}>{AcknowledgementData[0].referenceNumber}</Typography>
      </Box>
      <Box sx={AcknowledgementStyles.agentData}>
        <Typography sx={AcknowledgementStyles.contactAgentText}>{contactAgent}</Typography>
        <Typography sx={AcknowledgementStyles.agentName}>{AcknowledgementData[0].name}</Typography>
        <Box sx={AcknowledgementStyles.agentContact}>
            <img src={mobileIcon} alt="mobile-icon" />
        <Typography sx={AcknowledgementStyles.agentNumber}>{AcknowledgementData[0].phoneNumber}</Typography>
        </Box>
        <Box sx={AcknowledgementStyles.agentemailContact}>
        <img src={emailIcon} alt="mobile-icon" />
        <Typography sx={AcknowledgementStyles.agentMailId}>{AcknowledgementData[0].emailId}</Typography>
        </Box>
      </Box>
      <Box>
        <ActionButton sx={AcknowledgementStyles.button} buttonText={"Track Claim"} />
      </Box>
    </Box>
  );
};
export default Acknowledgement;
