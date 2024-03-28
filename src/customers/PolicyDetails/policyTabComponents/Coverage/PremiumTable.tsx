import { Box, Typography } from "@mui/material";
import premiumData from "../../../../mockJson/CustomerDashboard/PremiumTableData.json";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CoverageTabStyles from "./CoverageStyles";
const PremiumTable = () => {
  console.log(premiumData);
  return (
    <TableContainer
      component={Paper}
      sx={CoverageTabStyles.premiumTableContainer}
    >
      <Table aria-label="simple table">
        <TableBody>
          {premiumData.map((row) => (
            <TableRow
              key={row.id}
              sx={
                row.id === "0"
                  ? {
                      borderBottom: "2px solid rgba(63, 63, 63, 1)",
                    }
                  : {}
              }
            >
              <Box sx={CoverageTabStyles.tableInnerContainer}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={CoverageTabStyles.premiumFirstRow}
                >
                  <Typography sx={CoverageTabStyles.premiumFirstTitle}>
                    {" "}
                    {row.premium}
                  </Typography>
                </TableCell>
                <Box
                  sx={{
                    ...CoverageTabStyles.premiumTableCells,
                    gap: row.value2 ? "28px" : "0px",
                  }}
                >
                  {row.value1 !== "" && ( 
                    <TableCell
                      sx={{
                        ...CoverageTabStyles.premiumTableRowCells,
                        alignSelf: "flex-end",
                      }}
                      align="left"
                    >
                      <Box sx={CoverageTabStyles.premiumTableCellValue}>
                        {row.value1}
                      </Box>
                      <Box sx={CoverageTabStyles.premiumTableCellVechile}>
                        {row.Vechile1}
                      </Box>
                    </TableCell>
                  )}
                  {row.value2 !== "" && ( 
                    <TableCell
                      sx={CoverageTabStyles.premiumTableRowCells}
                      align="left"
                    >
                      <Box sx={CoverageTabStyles.premiumTableCellValue}>
                        {row.value2}
                      </Box>
                      <Box sx={CoverageTabStyles.premiumTableCellVechile}>
                        {row.Vechile2}
                      </Box>
                    </TableCell>
                  )}
                </Box>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PremiumTable;
