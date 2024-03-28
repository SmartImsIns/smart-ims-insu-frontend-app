import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box, Link, Typography } from "@mui/material";

const options = ["Road Side Assistance", "Update Policy", "Cancel Policy"];

const DropDown: React.FC = () => {
  return (
    <Box>
      {options.map((option) => (
        <MenuItem key={option} selected={option === "Pyxis"}>
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
    </Box>
  );
};

export default DropDown;
