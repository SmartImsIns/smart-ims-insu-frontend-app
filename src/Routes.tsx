import { useEffect, useCallback } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import Error from "./common/Error/Error";
import Login from "./login/Login";
import CustomerRoutes from "./customers/CustomerRoutes";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { RootState } from "./store/store";
import { getCookie } from "./utils/Utility";
import { customerPath } from "./constants/Constants";
import Footer from "./common/Footer/Footer";
import Header from "./common/Header/Header";
import { setIsLogin, setUserDetails } from "./login/LoginSlice";

const ApplicationRoutes = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();

  const roleName = getCookie("roleName");
  const authenticated = getCookie("authenticated");
  const customerId = getCookie("customerId");
  const customerName = getCookie("customerName");

  const { isLoading } = useAppSelector((store: RootState) => store.common);
  const { isLogin, userDetails } = useAppSelector(
    (store: RootState) => store.login
  );

  const routeToCustomer = useCallback(() => {
    const pathArray = location.pathname.split("/");
    if (pathArray[1] !== "customer") {
      navigate("/");
    }
    if (pathArray[2]) {
      const isValidCustomerPath = customerPath.some(
        (path: string) => pathArray[2] === path
      );
      if (isValidCustomerPath) {
        // navigate(`/customer/${pathArray[2]}/${pathArray[3]}`);
      }
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
    if (authenticated === "true" && customerId && customerName) {
      dispatch(setIsLogin(true));
      dispatch(setUserDetails({ customerId, customerName }));
    }
  }, [authenticated, customerId, customerName, dispatch]);

  useEffect(() => {
    if (isLogin && userDetails) {
      checkAuthentication();
    }
  }, [isLogin, userDetails, checkAuthentication, navigate]);

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
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer/*" element={<CustomerRoutes />} />
        <Route path="*" element={<Error header={true} {...props} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default ApplicationRoutes;
