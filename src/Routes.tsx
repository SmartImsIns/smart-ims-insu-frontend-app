import { useEffect, useCallback, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import Error from "./common/Error/Error";
import Login from "./login/Login";
import CustomerRoutes from "./customers/CustomerRoutes";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "./store/hooks";
import { RootState } from "./store/store";
import { getCookie } from "./utils/Utility";
import { customerPath } from "./constants/Constants";
import ImsDashboard from "./ImsDashboard/ImsDashboard";
import Header from "./ImsDashboard/Header/Header";
import Footer from "./ImsDashboard/Footer/Footer";
import { ContainerStyles } from "./Styles";

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
    } else {
      if (pathArray[1] === "ims-dashboard") {
        navigate("/ims-dashboard");
      } else if (pathArray[1] === "policy-details") {
        navigate("/policy-details");
      } else {
        navigate("/ims-dashboard");
      }
    }
  }, [navigate, location.pathname]);

  const checkAuthentication = useCallback(() => {
    switch (roleName) {
      case "customer":
        routeToCustomer();
        break;
    }
  }, [roleName, routeToCustomer]);

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  useEffect(() => {
    if (isLogin || authenticated) {
      checkAuthentication();
    }
  }, [isLogin, authenticated, checkAuthentication]);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <Route path="*" element={<Error header={true} {...props} />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};

export default ApplicationRoutes;
