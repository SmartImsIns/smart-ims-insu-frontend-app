import { useCallback, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import { getCookie } from "../utils/Utility";
import PolicyDetails from "./PolicyDetails/PolicyDetails";

const CustomerRoutes = () => {
  const navigate = useNavigate();
  // const { isLogin } = useAppSelector((store: RootState) => store.login);
  const roleName = getCookie("roleName");
  const authenticated = getCookie("authenticated");

  const checkAuthentication = useCallback(() => {
    if (roleName && roleName !== "customer") {
      navigate("/");
    }
  }, [navigate, roleName]);

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  useEffect(() => {
    if (!authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/policyDetails/:policyRef" element={<PolicyDetails />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default CustomerRoutes;
