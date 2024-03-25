import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import HeaderStyles from "./HeaderStyles";
import logo from "../../assets/svgs/logo.svg";
import notification from "../../assets/svgs/notification.svg";
import displayPicture from "../../assets/svgs/displayPicture.svg";
import menu from "../../assets/svgs/menu.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteCookie } from '../../utils/Utility';

const Header = memo(() => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log('inside logout')
    deleteCookie('authenticated', 'customerId', 'customerName', 'roleName');
    dispatch(() => ({type: 'logout'}));
    window.location.href = '/';
    // navigate('/login');
  };

  const { isLogin } = useAppSelector((store) => store.login);
  return (
    <Box sx={HeaderStyles.headerContainer}>
      <img
        src={logo}
        alt="smart-ims logo"
        onClick={() => navigate("/customer/dashboard")}
        style={{ cursor: "pointer" }}
      />
      {isLogin && (
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
          
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <img
              src={menu}
              alt="menu"
              style={{ width: "40px", height: "auto" }}
            />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem onClick={handleLogout}><LogoutIcon sx={{marginRight: '8px'}} /> Logout</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
});

export default Header;