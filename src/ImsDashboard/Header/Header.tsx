import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Logo from "../../assets/Layer 1 copy 1.svg";
import notification from "../../assets/notification.svg";
import displayPicture from "../../assets/Rectangle 41106.svg";
import menu from "../../assets/align-justify.svg";
import HeaderStyle from "./HeaderStyles";
const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const headerData = [
    {
      logo: Logo,
      notification: notification,
      displayPicture: displayPicture,
      menu: menu,
    },
  ];

  return (
    <Box
      sx={{
        ...HeaderStyle.headerContainer,
        display: visible ? "flex" : "none",
      }}
    >
      <Box sx={HeaderStyle.logo}>
        <img
          src={headerData[0].logo}
          style={HeaderStyle.simsLogo}
          alt="smart-ims logo"
          onClick={() => window.location.reload()}
        />
      </Box>
      <Box sx={HeaderStyle.headerItems}>
        <Box>
          <img
            src={headerData[0].notification}
            alt="notification"
            style={HeaderStyle.notificationIcon}
          />
        </Box>
        <Box>
          <img
            src={headerData[0].displayPicture}
            alt="displayPicture"
            style={HeaderStyle.displayPicture}
          />
        </Box>
        <Box>
          <img
            src={headerData[0].menu}
            alt="menu"
            style={HeaderStyle.menuIcon}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
