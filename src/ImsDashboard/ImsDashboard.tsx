import { Box, Typography } from '@mui/material'
import star from "../assets/star.svg";

type Props = {}

const ImsDashboard = (props: Props) => {
  return (
    <Box>
        <Typography>ims</Typography>
        <img src={star} alt="star-icon" />
    </Box>
  )
}

export default ImsDashboard