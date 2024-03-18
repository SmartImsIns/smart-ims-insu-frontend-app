import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import leftArrowIcon from "../../assets/left_arrow.svg";
import { Box, Link } from "@mui/material";
import {
  policyBreadCrumbStyle,
  breadcrumbsText,
} from "./PolicyBreadCrumbsStyles";

const PolicyBreadCrumbs = () => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    navigate("/ims-dashboard");
  };

  const breadcrumbs = (
    <Link underline="hover" key="1" color="inherit">
      12AW1145G057 | Auto_Garage101
    </Link>
  );

  return (
    <Box onClick={(e: any) => handleClick(e)} sx={policyBreadCrumbStyle}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={leftArrowIcon} alt="leftArrow" />
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={breadcrumbsText}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default PolicyBreadCrumbs;
