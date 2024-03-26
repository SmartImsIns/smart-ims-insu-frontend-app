export const PolicyTabStyles = {
  PolicyTabsStyles: {
    margin: "64px 30px 0px 30px",
    "@media (max-width: 601px)": {
      marginTop: "20px",
    },
    "@media (min-width: 602px) and (max-width: 1024px)": {
      marginTop: "30px",
    },
  },
  selectStyles: {
    border: "none",
    boxShadow: "none",
    outline: "none",
    cursor: "pointer",
    "&.MuiSelect-select:focus": {
      backgroundColor: "transparent",
    },
    "& .MuiInput-input": {
      display: "flex",
      color: "#383D4E",
      fontFamily: "Playfair Display",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "110%",
    },
    "& .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input":
      {
        padding: "0 34px 0 0",
      },
    "&:after": {
      display: "none",
      boxShadow: "none",
      outline: "none",
    },
    "&:before": {
      display: "none",
      boxShadow: "none",
      outline: "none",
    },
    "& .MuiInput-input:focus": {
      backgroundColor: "transparent",
    },
  },
  menuStyles: {
    color: "#383D4E",
    fontFamily: "Playfair Display",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "110%",
  },
  tabList: {
    display: "flex",
    minHeight: "auto",
    borderBottom: "1px solid #94ABB6",
    justifyContent: "space-between",
    "& .MuiTabs-indicator": {
      height: "5px",
      borderRadius: "5px",
      padding: "0px 2px 0px 2px",
      bottom: "-1px",
      position: "absolute",
      left: 0,
      width: "50%",
      transform: "translateX(0)",
    },
    "& .MuiTabs-flexContainer": {
      display: "flex",
      paddingRight: "336px",
      justifyContent: "space-between",
      "@media (min-width: 600px) and (max-width: 1230px)": {
        paddingRight: "50px",
      },
      "@media (min-width: 1230px) and (max-width: 1920px)": {
        paddingRight: "336px",
      },
    },
  },
  tab: {
    margin: "0px",
    minWidth: "auto",
    width: "auto",
    padding: "0px 0px 18.5px 0px",
    color: "#383D4E",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "110%",
    textTransform: "none",
    minHeight: "auto",
    fontSize: "20px",
  },
  tabPanel: {
    padding: "0",
    margin: "0",
    minWidth: "auto",
    width: "auto",
    minHeight: "auto",
  },
};
