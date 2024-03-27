import { Box, Typography } from "@mui/material";
import discountsData from "../../../mockJson/CustomerDashboard/DiscountsData.json";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DiscountsLogo from "../../../assets/DiscountsLogo.svg";
import CoverageTabStyles from "./CoverageTabStyles";
const DiscountsTable = () => {
  console.log(discountsData);
  return (
    <Box sx={CoverageTabStyles.discounts}>
      <Box sx={CoverageTabStyles.discountsHeading}>
        <Box>
          <img src={DiscountsLogo} alt="discounts logo" />
        </Box>
        <Box>
          <Typography sx={CoverageTabStyles.discountsHeadingText}>
            Discounts
          </Typography>
        </Box>
      </Box>
      <TableContainer
        sx={CoverageTabStyles.discountsTableContainer}
        component={Paper}
      >
        <Table>
          <TableHead sx={{ borderBottom: "2px solid rgba(63, 63, 63, 1)" }}>
            <TableRow>
              {discountsData[0] &&
                Object.entries(discountsData[0]).map(
                  ([key, value], index) =>
                    key !== "id" && (
                      <TableCell key={index} sx={CoverageTabStyles.tableHead}>
                        {value}
                      </TableCell>
                    )
                )}
            </TableRow>
          </TableHead>
          <TableBody>
            {discountsData.slice(1).map((row) => (
              <TableRow sx={CoverageTabStyles.tableRows} key={row.id}>
                <TableCell
                  sx={CoverageTabStyles.tableBodyCell}
                  style={{ width: "70%" }}
                >
                  {row.Types}
                </TableCell>

                <TableCell sx={CoverageTabStyles.tableBodyCell}>
                  {row.Vechile1}
                </TableCell>
                <TableCell sx={CoverageTabStyles.tableBodyCell}>
                  {row.Vechile2}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default DiscountsTable;
