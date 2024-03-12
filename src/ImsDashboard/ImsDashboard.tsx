import { Box, Typography } from '@mui/material'
import star from "../assets/star.svg";
import PolicyContainer from './PoliciesList/PolicyContainer';


type Props = {}

const ImsDashboard = (props: Props) => {
  return (
    <Box>
        {/* <Typography>ims</Typography>
        <img src={star} alt="star-icon" /> */}
        <PolicyContainer></PolicyContainer>
    </Box>
  )
}

export default ImsDashboard