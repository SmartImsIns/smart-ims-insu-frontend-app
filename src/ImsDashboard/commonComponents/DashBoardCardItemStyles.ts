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
    },
    "@media(min-width: 600px) and (max-width: 1024px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
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
    lineHeight: "110%",
    fontFamily: "Noto Sans",
    "@media (max-width: 599px)": {
      fontSize: "16px",
      textAlign: "center",
    },
    "@media(min-width: 600px) and (max-width: 1023px)": {
      fontSize: "16px",
    },
  },
};
