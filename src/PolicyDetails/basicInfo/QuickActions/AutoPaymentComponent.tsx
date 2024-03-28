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
import { Divider, IconButton, InputLabel, Typography } from "@mui/material";
import { CLOSE } from "../../../constants/Constants";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Padding } from "@mui/icons-material";
interface AutoPaymentProps {
  onClose: () => void;
  open: boolean;
}

const AutoPaymentComponent: React.FC<AutoPaymentProps> = ({
  onClose,
  open,
}) => {
  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose} aria-label="dialog box">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 0px 0px 20px",
          }}
        >
          <DialogTitle
            sx={{
              padding: "0px",
              fontFamily: "Playfair Display",
              fontSize: "16px",
              lineHeight: "110%",
            }}
          >
            Turn-on Auto Payment
          </DialogTitle>
          <Box
            onClick={onClose}
            aria-label="close"
            sx={{
              padding: "0px 20px 0px 20px",
            }}
          >
            <img src={CLOSE} />
          </Box>
        </Box>
        <Divider sx={{ paddingTop: "15px" }}></Divider>
        <DialogContent sx={{ padding: "0px" }}>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "fit-content",
              padding: "17px 20px 30px 20px ",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Noto Sans",
                fontSize: "16px",
                lineHeight: "110%",
              }}
            >
              Payment Method
            </Typography>
            <FormControl sx={{ mt: 2, width: "301px" }}>
              <InputLabel
                id="Select Payment Method"
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: "16px",
                  lineHeight: "110%",
                }}
              >
                Select Payment Method
              </InputLabel>

              {/* )} */}
              <Select
                id="Select Payment Method"
                // autoFocus
                // value={selectValue}
                // onChange={(e: any) => setValue(e.target.value)}
              >
                <MenuItem
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: "16px",
                    lineHeight: "110%",
                  }}
                  value="Credit"
                >
                  Credit Card
                </MenuItem>
                <MenuItem
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: "16px",
                    lineHeight: "110%",
                  }}
                  value="sm"
                >
                  Debit Card
                </MenuItem>
                <MenuItem
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: "16px",
                    lineHeight: "110%",
                  }}
                  value="Debit"
                >
                  Cash
                </MenuItem>
                <MenuItem
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: "16px",
                    lineHeight: "110%",
                  }}
                  value="Rupay"
                >
                  Rupay
                </MenuItem>
                <MenuItem
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: "16px",
                    lineHeight: "110%",
                  }}
                  value="Phone"
                >
                  Phone pay
                </MenuItem>
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
                <Typography
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: "16px",
                    lineHeight: "110%",
                  }}
                >
                  Payment Method
                </Typography>
              </Box>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            padding: "0px 20px 20px 20px",
          }}
        >
          <Button
            variant="text"
            onClick={onClose}
            sx={{
              textTransform: "none",
              fontFamily: "Noto Sans",
              fontSize: "14px",
              lineHeight: "110%",
              borderRadius: "40px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              borderRadius: "40px",
              fontFamily: "Noto Sans",
              fontSize: "14px",
              lineHeight: "110%",
              textTransform: "none",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AutoPaymentComponent;
