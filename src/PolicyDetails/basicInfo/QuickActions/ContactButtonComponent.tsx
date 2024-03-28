import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import mail from "../../../assets/mail.svg";
import phone from "../../../assets/phone.svg";
import ContactDetailsData from "../../../mockJson/CustomerDashboard/CarrierDetailsData.json";
import ContactComponentStyles from "./ContactComponentStyles";
import { agentDetails, businessAddress } from "../../../constants/Constants";

export interface ContactProps {
  MainLogoid: number;
  InsuranceCompany: string;
  ContactNumber: string;
  PhoneLogo: number;
  Mail: string;
  MailLogo: number;
  BusinessAddress: string;
  AgentName: string;
  AgentPhoneNumber: string;
  AgentMailId: string;
}

const ContactButtonComponent: React.FC = () => {
  const [contactData, setContactData] = useState<ContactProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setContactData(ContactDetailsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={ContactComponentStyles.contactContainer}>
      {contactData.map((data, id) => (
        <Box key={id}>
          <Box>
            <Typography
              variant="body1"
              sx={ContactComponentStyles.contactAgent}
            >
              {agentDetails}
            </Typography>
            <Typography
              variant="body1"
              sx={ContactComponentStyles.contactAgentName}
            >
              {data.AgentName}
            </Typography>
            <Box sx={ContactComponentStyles.contactContactNumber}>
              <Box sx={ContactComponentStyles.contactPhoneLogo}>
                {data.PhoneLogo === 1 && <img src={phone} alt="Phone" />}
              </Box>
              <Typography
                variant="body1"
                sx={ContactComponentStyles.contactNumber}
              >
                {data.AgentPhoneNumber}
              </Typography>
            </Box>
            <Box sx={ContactComponentStyles.contactContactNumber}>
              <Box sx={ContactComponentStyles.contactMailLogo}>
                {data.MailLogo === 1 && <img src={mail} alt="Mail" />}
              </Box>
              <Typography
                variant="body1"
                sx={ContactComponentStyles.contactNumber}
              >
                {data.AgentMailId}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h6"
            sx={ContactComponentStyles.contactInsuranceCompany}
          >
            {data.InsuranceCompany}
          </Typography>
          <Box sx={ContactComponentStyles.contactContactNumber}>
            <Box sx={ContactComponentStyles.contactPhoneLogo}>
              {data.PhoneLogo === 1 && <img src={phone} alt="Phone" />}
            </Box>
            <Typography
              variant="body1"
              sx={ContactComponentStyles.contactNumber}
            >
              {data.ContactNumber}
            </Typography>
          </Box>
          <Box sx={ContactComponentStyles.contactContactNumber}>
            <Box sx={ContactComponentStyles.contactMailLogo}>
              {data.MailLogo === 1 && <img src={mail} alt="Mail" />}
            </Box>
            <Typography
              variant="body1"
              sx={ContactComponentStyles.contactNumber}
            >
              {data.Mail}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={ContactComponentStyles.contactBusinessAddress}
            >
              {businessAddress}
            </Typography>
            <Typography
              variant="body1"
              sx={ContactComponentStyles.contactAddress}
            >
              {data.BusinessAddress}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ContactButtonComponent;
