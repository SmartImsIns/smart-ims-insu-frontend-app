import { Button } from '@mui/material';
import React from 'react';
// import ellipsis from '../../assets/Ellipsis/ellipsis.svg';
import EllipsisStyles from './EllipsisStyles';
import circle from '../../assets/circle.svg'

function EllipsisMenu() {
  return (
    <Button sx={EllipsisStyles.button}>
        <img src={circle} alt="dots" />
    </Button>
  )
}

export default EllipsisMenu
