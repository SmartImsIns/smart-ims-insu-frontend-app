import React from "react";
import { Button, ButtonProps, SxProps, Theme } from "@mui/material";

interface BlackButtonProps extends ButtonProps {
  buttonText?: string;
  buttonStyle?: SxProps<Theme>;
  buttonStyles?: SxProps<Theme>;
}

const buttonStyle: SxProps<Theme> = {
  textTransform: "none",
  display: "flex",
  width: "fit-content",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#3F3F3F",
  boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
  color: "var(--Default-White, #FFF)",
  marginLeft: "auto",
};

const BlackButton: React.FC<BlackButtonProps> = ({
  buttonText,
  buttonStyles,
}) => {
  return <Button sx={{ ...buttonStyle, ...buttonStyles }}>{buttonText}</Button>;
};

export default BlackButton;
