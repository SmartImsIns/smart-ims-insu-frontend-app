import React from "react";
import { SEARCH, UP_DOWN_ARROW } from "../../../constants/Constants";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import leinholderData from "../../../mockJson/CustomerDashboard/LeinholderData.json";
import { LeinholderStyles } from "./LeinholderStyles";
import ResponsiveLeinholderTab from "./ResponsiveLeinholderTab";

// interface row {
//   name: string;
//   address: number;
//   contactNumber: number;
//   bankName: number;
//   accountNumber: number;
// }

const leinholderTabComponent: React.FC = () => {
  return (
    <Box
      aria-label="leinholder container"
      sx={{ marginTop: "25px", marginBottom: "69px" }}
    >
      <Box
        aria-label="search box"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "22px",
          }}
        >
          {"Search"}
        </Typography>
        <Box
          aria-label="search-input"
          sx={{
            width: "251px",
            display: "flex",
            alignItems: "left",
            borderRadius: "2px",
            border: "var(--none, 1px) solid var(--Neutral-5, #D9D9D9)",
            background: "var(--Neutral-1, #FFF)",
            padding: "5px 12px",
            gap: "var(--borderRadius, 4px)",
            flexShrink: 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "left", flex: "1 0 0" }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search By Name Bank Name"
            />
          </Box>
          <IconButton>
            <img src={SEARCH} />
          </IconButton>
        </Box>
      </Box>
      {/* <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{"Name"}</TableCell>
              <TableCell align="left">{"Address"}</TableCell>
              <TableCell align="left">{"Contact Number"}</TableCell>
              <TableCell align="left">{"Bank Name"}</TableCell>
              <TableCell align="left">{"Account Number"}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leinholderData.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.contactNumber}</TableCell>
                <TableCell align="left">{row.bankName}</TableCell>
                <TableCell align="left">{row.accountNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box> */}
      <Box
        sx={{
          "@media(max-width: 599px)": {
            display: "none",
          },
        }}
      >
        <TableContainer sx={LeinholderStyles.tableContainer} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {leinholderData[0] &&
                  Object.entries(leinholderData[0]).map(
                    ([key, value], index) =>
                      key !== "id" && (
                        <TableCell sx={LeinholderStyles.tableHead} key={index}>
                          <Box sx={LeinholderStyles.tableHeadCellContainer}>
                            <Typography sx={LeinholderStyles.tableHeadText}>
                              {value}
                            </Typography>
                            <img src={UP_DOWN_ARROW} alt="up-down arrow" />
                          </Box>
                        </TableCell>
                      )
                  )}
              </TableRow>
            </TableHead>
            <TableBody>
              {leinholderData.slice(1).map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={LeinholderStyles.tableBodyCells}>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.contactNumber}</TableCell>
                  <TableCell>{row.bankName}</TableCell>
                  <TableCell>{row.accountNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={LeinholderStyles.cardContainer}>
        <ResponsiveLeinholderTab />
      </Box>
    </Box>
  );
};

export default leinholderTabComponent;
