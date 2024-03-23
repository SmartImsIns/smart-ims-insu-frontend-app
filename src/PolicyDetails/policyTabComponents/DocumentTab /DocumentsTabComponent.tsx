import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import documentTabStyles, { DocumentTabStyles } from "./DocumentTabStyles";
import DocumentTabComponentItem from "./DocumentTabComponentItem";
import WhiteButton from "../../commonComponents/WhiteButton";

const DocumentsTabComponent: React.FC = () => {
  const { container }: DocumentTabStyles = documentTabStyles;

  const isMobile = useMediaQuery("(max-width:1024px)");

  return (
    <>
      {isMobile ? (
        <>
          <Box>
            <DocumentTabComponentItem />
            <DocumentTabComponentItem />
            <WhiteButton
              buttonStyles={{
                display: "flex",
                width: "294px",
                height: "40px",
                padding: "16px 12px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
              buttonText={"Download Policy"}
            />
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
