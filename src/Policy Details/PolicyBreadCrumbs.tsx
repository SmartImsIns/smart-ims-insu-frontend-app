import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { Box,Link } from "@mui/material";
import PolicyDetailsStyles from "./PolicyDetailsStyles";
import leftArrow from "../assets/leftArrow.svg"
const PolicyBreadCrumbs = () => {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate("/ims-dashboard");
    // console.info("You clicked a breadcrumb.");
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" >
      12AW1145G057 | Auto_Garage101
    </Link>,
  ];
  return (
    <Box onClick={(e:any) =>handleClick(e)} sx={PolicyDetailsStyles.PolicyBreadCrumbStyle}>
      <Box >
        <img  src={leftArrow} alt="leftArrow" />
      </Box>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb" sx={PolicyDetailsStyles.BreadcrumbsText}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default PolicyBreadCrumbs;
