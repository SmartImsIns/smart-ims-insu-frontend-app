import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { IconButton, InputLabel, Typography } from "@mui/material";
import { CLOSE } from "../../../constants/Constants";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
interface AutoPaymentProps {
  onClose: () => void;
  open: boolean;
}

const AutoPaymentComponent: React.FC<AutoPaymentProps> = ({
  onClose,
  open,
}) => {
  // const [focused, setFocused] = React.useState(true);
  // const [selectValue, setValue] = React.useState("");

  // const handleFocus = () => {
  //   setFocused(false);
  // };
  // const handleBlur = () => {
  //   setFocused(true);
  // };
  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose} aria-label="dialog box">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 20px 0px 20px",
          }}
        >
          <DialogTitle sx={{ padding: "0px" }}>
            Turn-on Auto Payment
          </DialogTitle>
          <IconButton
            color="inherit"
            onClick={onClose}
            aria-label="close"
            sx={{
              paddingRight: "20px",
              padding: "0px",
              "& :hover": {
                boxShadow: " 2px rgba(0,0,0,0.3)",
              },
            }}
          >
            <img src={CLOSE} />
          </IconButton>
        </Box>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <Typography>Payment Method</Typography>
            <FormControl sx={{ mt: 2, width: "301px" }}>
              {/* {focused && ( */}
              <InputLabel id="Select Payment Method">
                Select Payment Method
              </InputLabel>

              {/* )} */}
              <Select
                // onBlur={handleBlur}
                // onFocus={handleFocus}
                id="Select Payment Method"
                // autoFocus
                // value={selectValue}
                // onChange={(e: any) => setValue(e.target.value)}
              >
                <MenuItem value="Credit">Credit Card</MenuItem>
                <MenuItem value="sm">Debit Card</MenuItem>
                <MenuItem value="Debit">Cash</MenuItem>
                <MenuItem value="Rupay">Rupay</MenuItem>
                <MenuItem value="Phone">Phone pay</MenuItem>
              </Select>
              <Box
                sx={{
                  paddingTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <AddCircleOutlineIcon />
                <Typography>Payment Method</Typography>
              </Box>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={onClose}>
            save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AutoPaymentComponent;
