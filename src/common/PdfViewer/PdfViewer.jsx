import { Box } from "@mui/material";
import { Document, Page } from "react-pdf";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";

const PdfViewer = ({ url }) => {
  const downloadPDF = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const url1 = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url1;
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
    <Box>
      <Box
        sx={{
          borderTop: "1px solid #cccccc",
          borderLeft: "1px solid #cccccc",
          borderRight: "1px solid #cccccc",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          padding: "5px",
          backgroundColor: "white",
        }}
      >
        <Document file={url}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={1}
            height={350}
          />
        </Document>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          border: "1px solid #cccccc",
          padding: "10px",
          gap: "10px",
          backgroundColor: "#cccccc",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <LocalPrintshopOutlinedIcon sx={{ color: "#000000" }} />
        </a>
        <DownloadForOfflineOutlinedIcon
          sx={{ cursor: "pointer" }}
          onClick={downloadPDF}
        />
      </Box>
    </Box>
  );
};

export default PdfViewer;
