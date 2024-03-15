import { Box, Typography } from "@mui/material";
import premiumData from "../../../mockJson/CustomerDashboard/PremiumTableData.json";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CoverageTabStyles from "./CoverageTabStyles";
const PremiumTable = () => {
  console.log(premiumData);
  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px",padding:"0px 24px",width:"97%",border:"1px solid rgba(201, 225, 236, 1)" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {premiumData.map((row) => (
            <TableRow
              key={row.id}
              sx={
                row.id === "0"
                  ? { borderBottom: "2px solid rgba(63, 63, 63, 1)" }
                  : {}
              }
            >
              <TableCell component="th" scope="row" sx={CoverageTabStyles.premiumFirstRow}>
                <Typography sx={CoverageTabStyles.premiumFirstTitle}> {row.premium}</Typography>
               
              </TableCell>
              <Box sx={CoverageTabStyles.premiumTableCells}>
              <TableCell sx={CoverageTabStyles.premiumTableRowCells} align="left">
                <Box sx={CoverageTabStyles.premiumTableCellValue}>{row.value1}</Box>
                <Box sx={CoverageTabStyles.premiumTableCellVechile}>{row.Vechile1}</Box>
              </TableCell>
              <TableCell sx={CoverageTabStyles.premiumTableRowCells}  align="left">
                <Box  sx={CoverageTabStyles.premiumTableCellValue}>{row.value2 || ""}</Box>
                <Box  sx={CoverageTabStyles.premiumTableCellVechile}>{row.Vechile2 || ""}</Box>
              </TableCell>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PremiumTable;
