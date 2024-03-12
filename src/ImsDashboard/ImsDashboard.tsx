import { Box, Typography } from '@mui/material'
import star from "../assets/star.svg";
import ReferenceBlogs from './ReferenceBlogs/ReferenceBlogs';

type Props = {}

const ImsDashboard = (props: Props) => {
  return (
    <Box>
        {/* <Typography>ims</Typography>
        <img src={star} alt="star-icon" /> */}
        <ReferenceBlogs />
    </Box>
  )
}

export default ImsDashboard