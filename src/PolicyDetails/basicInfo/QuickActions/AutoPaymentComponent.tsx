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
import { IconButton, InputLabel } from "@mui/material";
import { CLOSE } from "../../../constants/Constants";
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
      <Dialog open={open} onClose={onClose}>
        <Box>
          <DialogTitle>Turn-on Auto Payment</DialogTitle>
          <IconButton color="inherit" onClick={onClose} aria-label="close">
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
            <FormControl sx={{ mt: 2, minWidth: 500 }}>
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
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>{" "}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AutoPaymentComponent;
