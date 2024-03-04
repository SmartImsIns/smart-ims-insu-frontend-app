import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Error from './common/Error/Error';
import Login from './login/Login';
import CustomerRoutes from './customers/CustomerRoutes';

const ApplicationRoutes = (props: any) => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer/*" element={<CustomerRoutes />} />
        <Route path="*" element={<Error header={true} {...props} />} />      
      </Routes>
    </>
  );
}

export default ApplicationRoutes;
