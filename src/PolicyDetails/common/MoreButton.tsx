import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Link, Typography } from "@mui/material";

const options = ["Road Side Assistance", "Update Policy", "Cancel Policy"];
const ITEM_HEIGHT = 48;

const MoreButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            <Link>
              <Typography>{option}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MoreButton;
