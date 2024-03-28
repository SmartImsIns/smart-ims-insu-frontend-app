import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginPageStyles from "./LoginPageStyles";
import loginHome from "../assets/loginHome.svg";
import Logo from "../assets/Layer 1 copy 1.svg";
import {
  account,
  forgotPassword,
  login,
  loginMessage,
  loginName,
  loginPassword,
  register,
  signedIn,
} from "../constants/Constants";
import forword from "../assets/forwardArrow.svg"

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box sx={LoginPageStyles.login}>
      <Box sx={LoginPageStyles.loginImage}>
        <img src={loginHome} alt="Home" />
      </Box>
      <Box sx={LoginPageStyles.loginContainer}>
        <Box sx={LoginPageStyles.loginCard}>
          <Box sx={LoginPageStyles.image}>
            <img src={Logo} alt="Logo" />
          </Box>
          <Typography sx={LoginPageStyles.loginMessage}>
            {loginMessage}
          </Typography>
          <TextField
            label="Username"
            id="outlined-start-adornment"
            sx={{
              ...LoginPageStyles.loginName,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderWidth: "1px",
                borderColor: "dark gray",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography sx={LoginPageStyles.loginNameText}>
                    {loginName}
                  </Typography>
                </InputAdornment>
              ),
            }}
          />

          <FormControl
            sx={{
              ...LoginPageStyles.loginPassword,
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderWidth: "1px",
                borderColor: "dark gray",
              },
            }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-start-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-start-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              defaultValue={loginPassword}
            />
          </FormControl>

          <Box sx={LoginPageStyles.checkBoxPassword}>
            <Box sx={LoginPageStyles.checkBoxLabel}>
              <FormControlLabel
                control={
                  <Checkbox defaultChecked sx={LoginPageStyles.checkBox} />
                }
                label=""
              />
              <Typography sx={LoginPageStyles.label}>{signedIn} </Typography>
            </Box>
            <Box>
              <Typography sx={LoginPageStyles.password}>
                {forgotPassword}
              </Typography>
            </Box>
          </Box>
          <Button sx={LoginPageStyles.loginButton}>{login}</Button>

          <Box sx={LoginPageStyles.registerAccount}>
            <Typography sx={LoginPageStyles.account}>{account}</Typography>
            <Typography sx={LoginPageStyles.register}>{register}</Typography>
            <Box sx={LoginPageStyles.forword}><img src={forword} alt="arrow" /></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
