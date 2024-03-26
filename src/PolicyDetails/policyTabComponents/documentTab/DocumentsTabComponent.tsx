import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import documentTabStyles from "./DocumentTabStyles";
import DocumentTabComponentItem from "./DocumentTabComponentItem";

const DocumentsTabComponent: React.FC = () => {
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
        <Box sx={documentTabStyles.container}>
          <DocumentTabComponentItem />
          <DocumentTabComponentItem />
        </Box>
      )}
    </>
  );
};

export default DocumentsTabComponent;
