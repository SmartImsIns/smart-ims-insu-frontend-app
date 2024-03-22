import { memo } from "react";
import { Box } from "@mui/material";
import HeaderStyles from "./HeaderStyles";
import logo from "../../assets/svgs/logo.svg";
import notification from "../../assets/svgs/notification.svg";
import displayPicture from "../../assets/svgs/displayPicture.svg";
import menu from "../../assets/svgs/menu.svg";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const Header = memo(() => {
  const navigate = useNavigate();
  const { isLogin } = useAppSelector((store) => store.login);
  return (
    <Box sx={HeaderStyles.headerContainer}>
      <img
        src={logo}
        alt="smart-ims logo"
        onClick={() => navigate("/customer/dashboard")}
        style={{ cursor: "pointer" }}
      />
      {isLogin ? (
        <Box sx={HeaderStyles.headerItems}>
          <img
            src={notification}
            alt="notification"
            style={{ width: "36px", height: "auto" }}
          />
          <img
            src={displayPicture}
            alt="displayPicture"
            style={{ width: "32px", height: "auto" }}
          />
          <img
            src={menu}
            alt="menu"
            style={{ width: "40px", height: "auto" }}
          />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
});

export default Header;
