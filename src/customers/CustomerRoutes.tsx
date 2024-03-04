import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Dashboard from './Dashboard/Dashboard';

const CustomerRoutes = () => {
  const navigate = useNavigate();
//   const { isLogin } = useAppSelector((store) => store.login);
//   const roleName = getCookie('role');

//   useEffect(() => {
//     checkAuthentication();
//   }, []);

//   useEffect(() => {
//     if (!isLogin) {
//       navigate('/');
//     }
//   }, [isLogin]);
  
//   const checkAuthentication = () => {
//     if (roleName && roleName !== 'cutomer') {
//       navigate('/');
//     }
//   };

  return (
    <Container maxWidth={false}>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
    </Container>
  );
}
export default CustomerRoutes;
