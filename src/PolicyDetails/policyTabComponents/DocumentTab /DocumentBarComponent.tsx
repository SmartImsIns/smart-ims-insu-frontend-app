import React from "react";
import { Box, Card, Typography } from "@mui/material";
import smartPhone from "../../../assets/samrtPhone.svg";
import download from "../../../assets/download.svg";
import Bill from "../../../assets/Bill.png";

type Props = {};

const DocumentFileComponent = (props: Props) => {
  return (
    <Box  aria-label=" Policy Document" sx={{ height: "370px", display: "flex", flexDirection: "column" ,border: "1px solid #C9E1EC", maxWidth:"327px",borderRadius: "10px" }}>
          <Box
          sx={{
           height: "265px",backgroundColor:'#000',borderRadius: "10px 10px 0 0"
          }}
        >
          <img src={Bill} alt="Bill" style={{ height: "265px",width:"327px",backgroundColor: "#000",opacity: 0.7,borderRadius: "10px 10px 0 0"}}/>
      </Box>
      <Card
        sx={{
          display: "flex",
          padding: "21px 27px 20px 22px ",
          flexDirection: "column",
          borderRadius: "0px 0px 10px 10px",
          filter: "drop-shadow(0px -3px 4px rgba(0, 0, 0, 0.31))",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.01)",
        }}
      >
        <Box>
          <Typography>Geico Insurance</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "22px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <img src={smartPhone} alt="smart Phone Icon" />
            <Typography>{"Add to wallet"}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <img src={download} alt="download Icon" />
            <Typography>{"Download"}</Typography>
          </Box>
        </Box>
      </Card>
      </Box>
  );
};

export default DocumentFileComponent;
