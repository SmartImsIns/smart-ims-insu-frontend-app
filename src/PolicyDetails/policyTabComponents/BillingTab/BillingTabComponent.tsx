import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ResponsiveBillingTabComponent from "./ResponsiveBillingTabCompoenent";
import filter from "../../../assets/Filter1.svg";
import BillingTabStyles from "./BillingTabStyles";
import billingData from "../../../mockJson/CustomerDashboard/BillingData.json";
import upDownArrow from "../../../assets/upDownArrow.svg";
import downloadIcon from "../../../assets/DownloadIcon.svg";
import ActionButton from "../../../ImsDashboard/commonComponents/ActionButton";
type Props = {};

const BillingTabComponent = (props: Props) => {
  console.log(billingData);

  return (
    <Box>
      <Box sx={BillingTabStyles.billingTable}>
        <Box sx={BillingTabStyles.tableHeading}>
          <Box sx={BillingTabStyles.tableHeadingFilterImage}>
            <img src={filter} alt="filter" />
          </Box>
          <Typography sx={BillingTabStyles.tableHeadingFilterText}>
            Filter
          </Typography>
        </Box>
        <Box>
          <TableContainer
            sx={BillingTabStyles.tableContainer}
            component={Paper}
          >
            <Table>
              <TableHead>
                <TableRow sx={BillingTabStyles.tableRow}>
                  {billingData[0] &&
                    Object.entries(billingData[0]).map(
                      ([key, value], index) =>
                        key !== "id" && (
                          <TableCell sx={{ border: "0px" }} key={index}>
                            <Box sx={BillingTabStyles.tableHeadCellContainer}>
                              <Typography sx={BillingTabStyles.tableHeadText}>
                                {value}
                              </Typography>
                              <img src={upDownArrow} alt="up-down arrow" />
                            </Box>
                          </TableCell>
                        )
                    )}
                </TableRow>
              </TableHead>
              <TableBody>
                {billingData.slice(1).map((row) => (
                  <TableRow sx={BillingTabStyles.billingTableRows} key={row.id}>
                    <TableCell sx={BillingTabStyles.tableBodyCells}>
                      {row.billingDate}
                    </TableCell>
                    <TableCell sx={BillingTabStyles.tableBodyCells}>
                      {row.dueDate}
                    </TableCell>
                    <TableCell sx={BillingTabStyles.tableBodyCells}>
                      {row.billedAmount}
                    </TableCell>
                    <TableCell sx={BillingTabStyles.tableBodyCells}>
                      {row.paidAmount}
                    </TableCell>
                    <TableCell sx={BillingTabStyles.tableBodyCells}>
                      {row.paidOn}
                    </TableCell>
                    {row.showPayIcon ? (
                      <TableCell sx={BillingTabStyles.payAndDownloadOptions}>
                        <ActionButton
                          sx={BillingTabStyles.payButton}
                          buttonText={"Pay"}
                        />
                        <img src={downloadIcon} alt="First icon" />
                      </TableCell>
                    ) : null}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box sx={BillingTabStyles.cardContainer}>
        <ResponsiveBillingTabComponent />
      </Box>
    </Box>
  );
};

export default BillingTabComponent;
