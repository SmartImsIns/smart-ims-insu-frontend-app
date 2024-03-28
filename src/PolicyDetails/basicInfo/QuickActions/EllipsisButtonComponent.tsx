import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, Typography } from "@mui/material";

const options = ["Road Side Assistance", "Update Policy", "Cancel Policy"];

const ITEM_HEIGHT = 48;

const EllipsisButtonComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            <Link
              sx={{
                textDecoration: "none",
                "& :hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#1D252B",
                  fontFamily: "Noto Sans",
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "110%",
                }}
              >
                {option}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default EllipsisButtonComponent;
