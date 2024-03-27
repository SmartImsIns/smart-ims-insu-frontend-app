import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import documentTabStyles from "./DocumentTabStyles";
import DocumentTabComponentItem from "./DocumentTabComponentItem";
import documentData from "../../../mockJson/CustomerDashboard/DocumentsData.json";

interface DocumentDataProps {
  id: number;
  insuranceName: string;
  img: string;
}

const DocumentsTabComponent: React.FC = () => {
  const [data, setData] = useState<DocumentDataProps[]>(
    documentData as DocumentDataProps[]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(documentData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const isMobile = useMediaQuery("(max-width:789px)");

  return (
    <>
      <Box
        sx={
          isMobile ? documentTabStyles.mobileBox : documentTabStyles.container
        }
      >
        {data.map((document) => (
          <DocumentTabComponentItem key={document.id} data={document} />
        ))}
      </Box>
    </>
  );
};

export default DocumentsTabComponent;
