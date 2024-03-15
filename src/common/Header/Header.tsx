import { memo } from "react";
import { Box } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Logo from "../../assets/images/smartimslogo.jpg";
import SearchIcon from "@mui/icons-material/Search";

const Header = memo(() => {
  return (
    <Box
      sx={{
        height: "4rem",
        display: "grid",
        gridTemplateColumns: "1fr 5fr 1fr",
        padding: "0.5rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src={Logo}
          alt=""
          style={{
            width: "70%",
            WebkitFilter: "grayscale(100%)",
            filter: "grayscale(100%)",
          }}
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <input
          type="text"
          style={{
            width: "50%",
            padding: "0.8rem 0.8rem 0.8rem 3rem",
            border: "none",
            borderRadius: "0.5rem",
            backgroundColor: "#f1f1f1",
            outline: "none",
            position: "relative",
          }}
          placeholder="Search by Policy name, Type, Number, and more !"
        />
        <SearchIcon sx={{ position: "absolute", left: "485px" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NotificationsNoneIcon sx={{ fontSize: "2rem" }} />
        <AccountCircleIcon sx={{ fontSize: "2rem" }} />
        <DensityMediumIcon sx={{ fontSize: "2rem" }} />
      </Box>
    </Box>
  );
});

export default Header;
