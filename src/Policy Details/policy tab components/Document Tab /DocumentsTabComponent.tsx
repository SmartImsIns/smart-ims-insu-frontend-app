import React from "react";
import { Box} from "@mui/material";
import DocumentBarComponent from "./DocumentBarComponent";

type Props = {};

const styles = {
  marginTop: '20.5px',
    height: "423px",
    border:"1px solid  #C9E1EC",
    padding:"22px 0px 0px 31px",
    background: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
}

const DocumentsTabComponent = (props: Props) => {
  return (
    <Box sx={styles}>
      <Box sx={{display:"flex",gap:"15px"}}>
        <DocumentBarComponent/>
        <DocumentBarComponent/>
      </Box>
    </Box>
  );
};

export default DocumentsTabComponent; 
