export const DashBoardCardItemStyles = {
  DashBoardCardItemStyles: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "@media (max-width: 599px)": {
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px",
      alignItems: "center",
      height: "68px",
      img: {
        height: "40px",
      },
    },
    "@media(min-width: 600px) and (max-width: 1024px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      JustifyItems: "space-between",
      img: {
        height: "40px",
      },
    },
  },
  DashBoardCardText: {
    color: "#1D252B",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "22px",
    fontFamily: "Noto Sans",
    marginLeft: "auto",
    "@media (max-width: 599px)": {
      fontSize: "16px",
      lineHeight: "110%",
      paddingLeft: "10px",
      marginLeft: "0px",
      textAlign: "center",
    },
    "@media(min-width: 600px) and (max-width: 1023px)": {
      fontSize: "16px",
      lineHeight: "110%",
    },
  },
};
