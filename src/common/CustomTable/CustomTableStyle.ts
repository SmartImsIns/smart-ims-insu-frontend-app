const CustomTableStyle = {
  tableContainer: {
    padding: "0px 30px",
    width: "auto",
    border: "1px solid rgba(201, 225, 236, 1)",
    display: "block",
    "@media (max-width:599px)": {
    width: "100%",
    maxWidth: "320px",
    display: "none",
    },
  },
  tableHead: {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
    letterSpacing: "0px",
    textAlign: "left",
    opacity: "70%",
    color: "rgba(33, 24, 20, 1)",
  },
  row: { height: "64px", fontFamily: "Noto Sans" },
  rowName: {
    width: "366px",
    fontFamily: "Noto Sans",
    border: "0px 0px 1px 0px",
    opacity: "0px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",
  },
}

export default CustomTableStyle;