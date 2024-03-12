import { memo } from "react";
import { AppBar, Card, Typography } from "@mui/material";

const Header = memo(() => {
  return (
    <AppBar sx={{display:'flex',justifyContent:'center',alignItems:'center',position: "relative",}}>
      <Card sx={{width:'100%', height:60}}>
      <Typography>Header</Typography>
      </Card>
      </AppBar>
  );
})

export default Header;
