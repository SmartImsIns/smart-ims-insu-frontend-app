import { Theme } from "@mui/material";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    position: "relative",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      width: "50%",
      height: "1px",
      backgroundColor: theme.palette.primary.main,
    },
    "&::before": {
      left: 0,
    },
    "&::after": {
      right: 0,
    },
  },
  dot: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "6px",
    height: "6px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50%",
  },
})) as () => Record<string, string>;

const DividerDot = () => {
  const classes = useStyles();

  return (
    <Divider className={classes.divider}>
      <span className={classes.dot}></span>
    </Divider>
  );
};

export default DividerDot;
