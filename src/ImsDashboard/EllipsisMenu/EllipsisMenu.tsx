import { Button } from "@mui/material";
import EllipsisStyles from "./EllipsisStyles";
import circle from "../../assets/circle.svg";

function EllipsisMenu() {
  return (
    <Button disableRipple sx={EllipsisStyles.button}>
      <img src={circle} alt="dots" />
    </Button>
  );
}

export default EllipsisMenu;
