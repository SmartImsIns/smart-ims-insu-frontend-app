import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { useParams } from "react-router-dom";
import { GetInsuranceDocuments } from "../PolicyDetailsActions";
import PdfViewer from "../../../common/PdfViewer/PdfViewer";
import { Box } from "@mui/material";

const InsuranceDocuments = () => {
  const { policyRef } = useParams();
  const dispatch = useAppDispatch();
  const elements = [
    "https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf",
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",
        padding: "0px 30px",
      }}
    >
      {elements.map((url) => (
        <PdfViewer url={url} />
      ))}
    </Box>
  );
};

export default InsuranceDocuments;
