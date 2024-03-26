import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import documentTabStyles, { DocumentTabStyles } from "./DocumentTabStyles";
import DocumentTabComponentItem from "./DocumentTabComponentItem";
import WhiteButton from "../../common/WhiteButton";

const DocumentsTabComponent: React.FC = () => {
  const { container }: DocumentTabStyles = documentTabStyles;

  const isMobile = useMediaQuery("(max-width:789px)");

  return (
    <>
      {isMobile ? (
        <>
          <Box aria-label="mobile" sx={documentTabStyles.mobileBox}>
            <DocumentTabComponentItem />
            <DocumentTabComponentItem />
          </Box>
        </>
      ) : (
        <Box sx={container}>
          <DocumentTabComponentItem />
          <DocumentTabComponentItem />
        </Box>
      )}
    </>
  );
};

export default DocumentsTabComponent;
