import { Box,  Typography } from "@mui/material";
import coverageLinksData from "../../../mockJson/CustomerDashboard/CoverageAndLinksData.json";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CoveragesLogo from "../../../assets/CoveragesLogo.svg";
import CoverageTabStyles from "./CoverageTabStyles";
const CoverageAndLinks = () => {
  console.log(coverageLinksData);
  const tableHead = coverageLinksData.find((row) => row.id === "0");

  if (!tableHead) return null;

  const { Coverages, Limit, Deductible, Vechile1, Vechile2 } = tableHead;

  return (
    <Box sx={CoverageTabStyles.coverageAndLinks}>
      <Box sx={CoverageTabStyles.coverageAndLinksHeading}>
        <Box>
          <img src={CoveragesLogo} alt="coverages logo" />
        </Box>
        <Box>
        <Typography sx={CoverageTabStyles.coverageAndLinksHeadingText}>Coverage and links</Typography></Box>
      </Box>
      <TableContainer sx={{padding:"0px 24px", width:"97%",border:"1px solid rgba(201, 225, 236, 1)"}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid rgba(63, 63, 63, 1)", }}>
              <TableCell sx={CoverageTabStyles.tableHead}>{Coverages}</TableCell>
              <TableCell sx={CoverageTabStyles.tableHead}>{Limit}</TableCell>
              <TableCell sx={CoverageTabStyles.tableHead}>{Deductible}</TableCell>
              <TableCell sx={CoverageTabStyles.tableHead}>{Vechile1}</TableCell>
              <TableCell sx={CoverageTabStyles.tableHead}>{Vechile2}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coverageLinksData
              .filter((row) => row.id !== "0")
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={CoverageTabStyles.tableBodyCell} component="th" scope="row">
                    {row.Coverages}
                  </TableCell>
                  <TableCell sx={CoverageTabStyles.tableBodyCell}>{row.Limit}</TableCell>
                  <TableCell sx={CoverageTabStyles.tableBodyCell}>{row.Deductible}</TableCell>
                  <TableCell sx={CoverageTabStyles.tableBodyCell}>{row.Vechile1}</TableCell>
                  <TableCell sx={CoverageTabStyles.tableBodyCell}>{row.Vechile2}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default CoverageAndLinks;
