import { Button } from "@mui/material";
import circle from "../../assets/svgs/circle.svg";
import EllipsisMenuStyles from "./EllipsisMenuStyles";
const EllipsisMenu = () => {
  return (
    <Button sx={EllipsisMenuStyles.button}>
      <img src={circle} alt="dots" />
    </Button>
  );
};

export default EllipsisMenu;
