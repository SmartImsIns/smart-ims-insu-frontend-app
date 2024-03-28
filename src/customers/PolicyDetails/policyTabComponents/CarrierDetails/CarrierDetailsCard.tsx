// CarrierDetailsCard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import CarrierDetails from './CarrierDetailsStyles';
import InsuranceLogo from '../../../../assets/InsuranceLogo.svg';
import mail from '../../../../assets/mail.svg';
import phone from '../../../../assets/phone.svg';

export interface CarrierDetailsData {
  "MainLogoid": number;
  "InsuranceCompany": string;
  "ContactNumber": string;
  "PhoneLogo": number;
  "Mail": string;
  "MailLogo": number;
  "BusinessAddress": string;
  "AgentName": string;
  "AgentPhoneNumber": string;
  "AgentMailId": string;
}

interface Props {
  data: CarrierDetailsData;
}

const InsuranceIcon = (MainLogoid: number) => {
  switch (MainLogoid) {
    case 1:
      return InsuranceLogo;
    default:
      return null;
  }
};
const PhoneIcon = (PhoneLogo: number) => {
  switch (PhoneLogo) {
    case 1:
      return phone;
    default:
      return null;
  }
};
const MailIcon = (MailLogo: number) => {
  switch (MailLogo) {
    case 1:
      return mail;
    default:
      return null;
  }
};

const CarrierDetailsCard: React.FC<Props> = ({ data }) => {
  const InsuranceLogoIcon = InsuranceIcon(data.MainLogoid);
  const PhoneLogoIcon = PhoneIcon(data.PhoneLogo);
  const MailLogoIcon = MailIcon(data.MailLogo);

  return (
    <Box sx={CarrierDetails.carrierCard}>
      <Box sx={CarrierDetails.carrierHeading}>Carrier Details</Box>
      <Box sx={CarrierDetails.carrierInsuranceLogo}>{InsuranceLogoIcon && <img src={InsuranceLogoIcon} alt="" />}</Box>
      <Box>
        <Typography variant="h6" sx={CarrierDetails.carrierInsuranceCompany}>{data.InsuranceCompany}</Typography>
        <Box sx={CarrierDetails.carrierContactNumber}>
          <Box sx={CarrierDetails.carrierPhoneLogo}>
            {PhoneLogoIcon && <img src={PhoneLogoIcon} alt="" />}
          </Box>
          <Typography variant="body1" sx={CarrierDetails.carrierNumber}>{data.ContactNumber}</Typography>
        </Box>
        <Box sx={CarrierDetails.carrierContactNumber}>
          <Box sx={CarrierDetails.carrierPhoneLogo}>
            {MailLogoIcon && <img src={MailLogoIcon} alt="" />}
          </Box>
          <Typography variant="body1" sx={CarrierDetails.carrierNumber}>{data.Mail}</Typography>
        </Box>
      </Box>
      <Box >
        <Typography variant="body1" sx={CarrierDetails.carrierBusinessAddress}>Business Address</Typography>
        <Typography variant="body1" sx={CarrierDetails.carrierAddress}>{data.BusinessAddress}</Typography>
      </Box>
      <Box>
        <Typography variant="body1" sx={CarrierDetails.carrierAgent}>Agent Details</Typography>
        <Typography variant="body1" sx={CarrierDetails.carrierAgentName}>{data.AgentName}</Typography>
        <Box sx={CarrierDetails.carrierContactNumber}>
          <Box sx={CarrierDetails.carrierPhoneLogo}>
            {PhoneLogoIcon && <img src={PhoneLogoIcon} alt="" />}
          </Box>
          <Typography variant="body1" sx={CarrierDetails.carrierNumber}>{data.AgentPhoneNumber}</Typography>
        </Box>
        <Box sx={CarrierDetails.carrierContactNumber}>
          <Box sx={CarrierDetails.carrierPhoneLogo}>
            {MailLogoIcon && <img src={MailLogoIcon} alt="" />}
          </Box>
          <Typography variant="body1" sx={CarrierDetails.carrierNumber}>{data.AgentMailId}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CarrierDetailsCard;
