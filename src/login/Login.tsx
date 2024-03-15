import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { ILoginRequestParams } from "../models/login/Login";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { LoginSubmit } from "./LoginAction";
import LoginStyle from "./LoginStyle";
import { RootState } from "../store/store";

const Login = () => {
  const dispatch = useAppDispatch();

  const [showMessage, setShowMessage] = useState<string | null>(null);
  const [loginData, setLoginData] = useState<ILoginRequestParams>({
    customerName: "Craig Tommy",
    mobile: "9879875667",
  });

  const { isError, calledReducerType } = useAppSelector(
    (store: RootState) => store.common
  );

  useEffect(() => {
    if (isError && calledReducerType === "login") {
      setShowMessage("Invalid Login details");
    }
  }, [isError, calledReducerType]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "mobile") {
      const formattedValue = value.replace(/\D/g, "");
      setLoginData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setLoginData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    if (!loginData.customerName || loginData.customerName.trim().length <= 0) {
      return false;
    }
    if (!loginData.mobile || loginData.mobile.trim().length <= 0) {
      return false;
    }

    return true;
  };

  const handlSubmit = () => {
    const requestParams: ILoginRequestParams = loginData;
    dispatch(LoginSubmit(requestParams));
  };

  return (
    <Box sx={LoginStyle.loginContainer}>
      <Card component={"form"} sx={LoginStyle.card}>
        <Typography sx={LoginStyle.heading}>Login</Typography>
        {showMessage && <Typography>{showMessage}</Typography>}
        <TextField
          sx={LoginStyle.inputField}
          label="Name*"
          type="text"
          name="customerName"
          value={loginData.customerName}
          onChange={handleChange}
          autoComplete="off"
          // helperText="field can't be empty."
          variant="outlined"
          size="small"
        />
        <TextField
          sx={{ width: "100%" }}
          label="Contact Number*"
          type="text"
          name="mobile"
          value={loginData.mobile}
          onChange={handleChange}
          autoComplete="off"
          // helperText="field can't be empty."
          variant="outlined"
          size="small"
        />
        <Button
          disabled={!validate()}
          sx={{
            width: "115px",
            border: "1px",
            backgroundColor: "#000000",
            color: "#ffffff",
            borderRadius: "2rem",
            ":hover": {
              backgroundColor: "#000000",
            },
            ":disabled": {
              backgroundColor: "lightgrey",
            },
            boxShadow:
              "0px 5px 9px 1px rgba(0,0,0,0.2), 4px 4px 4px 0px rgba(0,0,0,0.14), 4px 4px 5px -2px rgba(0,0,0,0.12)",
          }}
          type="button"
          onClick={handlSubmit}
        >
          Login
        </Button>
      </Card>
    </Box>
  );
};

export default Login;
