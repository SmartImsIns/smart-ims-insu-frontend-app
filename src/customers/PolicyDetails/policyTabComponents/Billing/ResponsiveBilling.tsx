import { Box, Typography } from "@mui/material";
import billingData from "../../../../mockJson/CustomerDashboard/BillingData.json";
import BillingTabStyles from "./BillingStyles";
import downloadIcon from "../../../../assets/DownloadIcon.svg";
import filter from "../../../../assets/Filter1.svg";

function ResponsiveBilling() {
  return (
    <Box>
      <Box sx={BillingTabStyles.filterContainer}>
        <Box sx={BillingTabStyles.tableHeadingFilterImage}>
          <img src={filter} alt="filter" />
        </Box>
        <Typography sx={BillingTabStyles.tableHeadingFilterText}>
          Filter
        </Typography>
      </Box>
      {billingData.slice(1).map((e, index) => (
        <Box sx={BillingTabStyles.container} key={index}>
          <Box sx={BillingTabStyles.cardContent}>
            <Typography sx={BillingTabStyles.amount}>
              {e.billedAmount}
            </Typography>
            <Typography sx={BillingTabStyles.descriptionText}>
              Billing amount
            </Typography>
          </Box>
          <Box sx={BillingTabStyles.cardContent}>
            <Typography sx={BillingTabStyles.amount}>
              {e.billingDate}
            </Typography>
            <Typography sx={BillingTabStyles.descriptionText}>
              Billing date
            </Typography>
          </Box>
          <Box sx={BillingTabStyles.cardContent}>
            <Typography sx={BillingTabStyles.amount}>{e.paidAmount}</Typography>
            <Typography sx={BillingTabStyles.descriptionText}>
              Paid amount
            </Typography>
          </Box>
          <Box sx={BillingTabStyles.cardContent}>
            <Typography sx={BillingTabStyles.amount}>{e.dueDate}</Typography>
            <Typography sx={BillingTabStyles.descriptionText}>
              Due date
            </Typography>
          </Box>
          {e.paidOn ? (
            <Box sx={BillingTabStyles.cardContent}>
              <Typography sx={BillingTabStyles.amount}>{e.paidOn}</Typography>
              <Typography sx={BillingTabStyles.descriptionText}>
                Paid on
              </Typography>
            </Box>
          ) : (
            <Box sx={BillingTabStyles.cardContent}>Hello</Box>
          )}
          <Box sx={BillingTabStyles.downloadIcon}>
            <img src={downloadIcon} alt="download-icon" />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ResponsiveBilling;
