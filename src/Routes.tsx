import { useEffect, useCallback, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import Error from "./common/Error/Error";
import Login from "./login/Login";
import CustomerRoutes from "./customers/CustomerRoutes";
import { Box } from "@mui/material";
import { useAppSelector } from "./store/hooks";
import { RootState } from "./store/store";
import { getCookie } from "./utils/Utility";
import { customerPath } from "./constants/Constants";
import ImsDashboard from "./ImsDashboard/ImsDashboard";
import Header from "./ImsDashboard/Header/Header";
import Footer from "./ImsDashboard/Footer/Footer";
import { ContainerStyles } from "./Styles";
import PolicyDetails from "./PolicyDetails/PolicyDetails";
import LoginPage from "./LoginPage/LoginPage";
import FileAClaim from "./FileAClaim/FileAClaim";
const ApplicationRoutes = (props: any) => {
  const { isLoading } = useAppSelector((store: RootState) => store.common);
  const navigate = useNavigate();
  const location = useLocation();
  const { isLogin } = useAppSelector((store: RootState) => store.login);
  const roleName = getCookie("roleName");
  const authenticated = getCookie("authenticated");

  const routeToCustomer = useCallback(() => {
    const pathArray = location.pathname.split("/");
    // console.log(pathArray)

    if (pathArray[1] !== "customer") {
      navigate("/");
    }
    if (pathArray[3]) {
      const isValidCustomerPath = customerPath.some(
        (path: string) => pathArray[2] === path
      );
      if (isValidCustomerPath) {
        navigate(`/customer/${pathArray[2]}/${pathArray[3]}`);
      }
    }
    if (pathArray[1] === "ims-dashboard") {
      navigate("/ims-dashboard");
    } else if (pathArray[1] === "policy-details") {
      navigate("/policy-details");
    } else if (pathArray[1] === "file") {
      navigate("/file");
    } else {
      navigate("/customer/dashboard");
    }
  }, [navigate, location.pathname]);

  const checkAuthentication = useCallback(() => {
    switch (roleName) {
      case "customer":
        routeToCustomer();
        break;
    }
  }, [roleName, routeToCustomer]);

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  useEffect(() => {
    if (isLogin || authenticated) {
      checkAuthentication();
    }
  }, [isLogin, authenticated, checkAuthentication]);

  return (
    <>
      <Dialog
        open={isLoading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
            position: "relative",
          },
        }}
      >
        <CircularProgress size="4rem" />
      </Dialog>
      <Header />
      <Box sx={ContainerStyles}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer/*" element={<CustomerRoutes />} />
          <Route path="/ims-dashboard" element={<ImsDashboard />} />
          <Route path="/policy-details" element={<PolicyDetails />} />
          <Route path="/login-page" element={<LoginPage />} />
          {/* <Route path="/file" element={ <FileAClaim onClose={handleCloseFileAClaim} />} /> */}
          <Route path="*" element={<Error header={true} {...props} />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};

export default ApplicationRoutes;
