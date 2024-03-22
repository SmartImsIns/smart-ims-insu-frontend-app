import { Box } from "@mui/material";
import { Document, Page } from "react-pdf";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

const PdfViewer = ({ url }) => {
  const downloadPDF = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "dummy.pdf");
      document.body.appendChild(link);
      link.click();
      if (link.parentNode) {
        link?.parentNode.removeChild(link);
      } else {
        throw new Error("Something went wrong while downloading pdf");
      }
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <Box
      sx={{
        borderTo: "1px solid #cccccc",
        borderRadius: "10px",
        padding: "5px",
      }}
    >
      <Document file={url}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={1}
          height={400}
        />
      </Document>
      <Box
        sx={{ height: "30px", display: "flex", border: "1px solid #cccccc" }}
      >
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <LocalPrintshopOutlinedIcon />
        </a>
        <button onClick={downloadPDF}>Download</button>
      </Box>
    </Box>
  );
};

export default PdfViewer;
