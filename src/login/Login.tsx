import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { ILogin, ILoginRequestParams } from "../models/login/Login";
import { useAppDispatch } from "../store/hooks";
import { LoginSubmit } from "./LoginAction";
import LoginStyle from "./LoginStyle";

const Login = () => {
  const dispatch = useAppDispatch();
  const [loginData, setLoginData] = useState<ILogin>({
    indexName: "",
    contactNumber: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "contactNumber") {
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
    if (!loginData.indexName || loginData.indexName.trim().length <= 0) {
      return false;
    }
    if (
      !loginData.contactNumber ||
      loginData.contactNumber.trim().length <= 0
    ) {
      return false;
    }

    return true;
  };

  const handlSubmit = () => {
    const requestParams: ILoginRequestParams = {
      data: {
        indexName: loginData.indexName,
        contactNumber: loginData.contactNumber,
      },
    };
    dispatch(LoginSubmit(requestParams));
  };

  return (
    <Box sx={LoginStyle.loginContainer}>
      <Card component={"form"} sx={LoginStyle.card}>
        <Typography sx={LoginStyle.heading}>Login</Typography>
        <TextField
          sx={LoginStyle.inputField}
          label="Name*"
          type="text"
          name="indexName"
          value={loginData.indexName}
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
          name="contactNumber"
          value={loginData.contactNumber}
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
            border: "1px solid",
            backgroundColor: "#000000",
            color: "#ffffff",
            borderRadius: "8px",
            ":hover": {
              backgroundColor: "#000000",
            },
            ":disabled": {
              backgroundColor: "lightgrey",
            },
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
