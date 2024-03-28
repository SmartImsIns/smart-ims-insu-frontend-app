import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { Box, Link } from "@mui/material";
import { BreadCrumbStyles } from "./BreadCrumbsStyles";
import { BreadCrumbProps } from "../policyDetail";
import { LEFT_ARROW, leftArrowText } from "../../constants/Constants";

const BreadCrumb: React.FC<BreadCrumbProps> = ({ breadCrumbText }) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    navigate("/ims-dashboard");
  };

  return (
    <Box sx={BreadCrumbStyles.container}>
      <Box onClick={(e: any) => handleClick(e)} sx={BreadCrumbStyles.box}>
        <img src={LEFT_ARROW} alt={leftArrowText} />
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={BreadCrumbStyles.breadcrumbsText}
        >
          <Link underline="hover" key="1" color="inherit">
            {breadCrumbText}
          </Link>
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default BreadCrumb;
