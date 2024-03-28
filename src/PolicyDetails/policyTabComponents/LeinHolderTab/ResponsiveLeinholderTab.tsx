import { Box, Typography } from "@mui/material";
import leinholderData from "../../../mockJson/CustomerDashboard/LeinholderData.json";
import { LeinholderStyles } from "./LeinholderStyles";
import { FILTER } from "../../../constants/Constants";

const ResponsiveLeinholderTabComponent = () => {
  return (
    <Box>
      <Box sx={LeinholderStyles.filterContainer}>
        <Box sx={LeinholderStyles.tableHeadingFilterImage}>
          <img src={FILTER} alt="filter" />
        </Box>
        <Typography sx={LeinholderStyles.tableHeadingFilterText}>
          {"Filter"}
        </Typography>
      </Box>
      {leinholderData.slice(1).map((e, index) => (
        <Box sx={LeinholderStyles.container} key={index}>
          <Box sx={LeinholderStyles.cardContent}>
            <Typography sx={LeinholderStyles.descriptionText}>
              {"Name"}
            </Typography>
            <Typography sx={LeinholderStyles.amount}>{e.name}</Typography>
          </Box>
          <Box sx={LeinholderStyles.cardContent}>
            <Typography sx={LeinholderStyles.descriptionText}>
              {"Contact Number"}
            </Typography>
            <Typography sx={LeinholderStyles.amount}>
              {e.contactNumber}
            </Typography>
          </Box>
          <Box sx={LeinholderStyles.cardContent}>
            <Typography sx={LeinholderStyles.descriptionText}>
              {"Bank Name"}
            </Typography>
            <Typography sx={LeinholderStyles.amount}>{e.bankName}</Typography>
          </Box>
          <Box sx={LeinholderStyles.cardContent}>
            <Typography sx={LeinholderStyles.descriptionText}>
              {"Account Number"}
            </Typography>
            <Typography sx={LeinholderStyles.amount}>
              {e.accountNumber}
            </Typography>
          </Box>
          <Box sx={LeinholderStyles.cardContent}>
            <Typography sx={LeinholderStyles.descriptionText}>
              {"Address"}
            </Typography>
            <Typography sx={LeinholderStyles.amount}>{e.address}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ResponsiveLeinholderTabComponent;
