import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import billImage from "../../../assets/bill.png";
import smartPhoneIcon from "../../../assets/smart_phone.svg";
import downloadIcon from "../../../assets/Download.svg";
import documentTabStyles from "./DocumentTabStyles";
import { addWallet, download, insurance } from "../../../constants/Constants";

const DocumentTabComponentItem: React.FC = () => {
  return (
    <Box aria-label="Policy Document" sx={documentTabStyles.documentContainer}>
      <Box sx={documentTabStyles.imageContainer}>
        <img src={billImage} alt="Bill" style={documentTabStyles.imageStyle} />
      </Box>
      <Card sx={documentTabStyles.card}>
        <Typography>{insurance}</Typography>
        <Box sx={documentTabStyles.buttonGroup} aria-label="Add to wallet">
          <Button sx={documentTabStyles.walletButton}>
            <img src={smartPhoneIcon} alt="smart Phone Icon" />
            {addWallet}
          </Button>

          <Button sx={documentTabStyles.downloadButton} aria-label="Download">
            <img src={downloadIcon} alt="download Icon" />
            {download}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default DocumentTabComponentItem;
