import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import Error from './common/Error/Error';
import Login from './login/Login';
import CustomerRoutes from './customers/CustomerRoutes';
import { useAppSelector } from './store/hooks';
import { RootState } from './store/store';

const ApplicationRoutes = (props: any) => {
  const { isLoading } = useAppSelector((store: RootState) => store.common);

  return (
    <>
      <Dialog
        open={isLoading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
            position: 'relative',
          },
        }}
      >
        <CircularProgress size="4rem" />
        {/* <Typography position='absolute' style={{position: 'absolute', top: '10px', left: '2px'}}>Loading...</Typography> */}
      </Dialog>
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
