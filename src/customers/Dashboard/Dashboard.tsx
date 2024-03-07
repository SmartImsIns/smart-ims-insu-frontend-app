import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { GetTestData } from './DashboardAction';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { testData } = useAppSelector((store: RootState) => store.dashboard);

  console.log('testData', testData);
  useEffect(() => {
    dispatch(GetTestData());
  }, [dispatch]);

  const getPolicies = () => {
    const element = [1, 2, 3].map((item: any, index: number) => {
      return (
        <Card sx={{ maxWidth: 345, padding: '1rem', margin: '1rem' }} key={`policies-${index}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image=""
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Policy {index + 1}
              </Typography>
              
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      )
    });
    return element
  }

  return (
    <Box>
      <Box>
        <Typography component="h3">My Policies (05)</Typography>
      </Box>
      <Box sx={{ display: 'inline-flex', padding: '1rem', paddingBottom: 0 }}>
        {getPolicies()}
      </Box>
    </Box>
  );
}

export default Dashboard;
