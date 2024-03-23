import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import billImage from "../../../assets/Bill.png";
import smartPhoneIcon from "../../../assets/smart_phone.svg";
import downloadIcon from "../../../assets/Download.svg";
import documentTabStyles, { DocumentTabStyles } from "./DocumentTabStyles";

const {
  imageContainer,
  buttonGroup,
  downloadButton,
  imageStyle,
  card,
  walletButton,
  documentContainer,
}: DocumentTabStyles = documentTabStyles;

const DocumentTabComponentItem: React.FC = () => {
  return (
    <Box aria-label="Policy Document" sx={documentContainer}>
      <Box sx={imageContainer}>
        <img src={billImage} alt="Bill" style={imageStyle} />
      </Box>
      <Card sx={card}>
        <Typography>Geico Insurance</Typography>
        <Box sx={buttonGroup} aria-label="Add to wallet">
          <Button sx={walletButton}>
            <img src={smartPhoneIcon} alt="smart Phone Icon" />
            {"Add to wallet"}
          </Button>

          <Button sx={downloadButton} aria-label="Download">
            <img src={downloadIcon} alt="download Icon" />
            {"Download"}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default DocumentTabComponentItem;
