import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import smartPhoneIcon from "../../../assets/smart_phone.svg";
import downloadIcon from "../../../assets/Download.svg";
import documentTabStyles from "./DocumentTabStyles";
import { addWallet, download } from "../../../constants/Constants";
import billImage from "../../../assets/bill.png";

interface DocumentData {
  id: number;
  insuranceName: string;
  img: string;
}

interface DocumentDataProps {
  data: DocumentData;
}

const DocumentTabComponentItem: React.FC<DocumentDataProps> = ({ data }) => {
  return (
    <Box aria-label="Policy Document" sx={documentTabStyles.documentContainer}>
      <Box sx={documentTabStyles.imageContainer}>
        <img src={billImage} alt="Bill" />
      </Box>
      <Card sx={documentTabStyles.card}>
        <Typography sx={documentTabStyles.insuranceText}>
          {data.insuranceName}
        </Typography>
        <Box sx={documentTabStyles.buttonGroup} aria-label="Add to wallet">
          <Button sx={documentTabStyles.walletButton}>
            <img src={smartPhoneIcon} alt="smart Phone Icon" />
            <Typography sx={documentTabStyles.text}>{addWallet}</Typography>
          </Button>
          <Button sx={documentTabStyles.downloadButton} aria-label="Download">
            <img src={downloadIcon} alt="download Icon" />
            <Typography sx={documentTabStyles.text}>{download}</Typography>
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default DocumentTabComponentItem;
