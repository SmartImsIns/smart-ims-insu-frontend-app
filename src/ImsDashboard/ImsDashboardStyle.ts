const ImsDashboardStyle = {
  container: {
    paddingTop: "40px",
    maxWidth: "1920px",
    margin: "0px auto 0px auto",
  },
  flex1: {
    flex: "1 1 0%",
  },
  imsDashbardcContainer: {
    paddingTop: "40.23px",
    paddingLeft: "30px",
    paddingRight: "30px",
    "@media (max-width: 599px)": {
      paddingLeft: "20px",
      paddingRight: "20px",
      marginTop: "20px",
    },
    "@media (min-width: 600px) and (max-width: 1024px)": {
      paddingLeft: "25px",
      paddingRight: "25px",
      marginTop: "30px",
    },
    "@media (min-width: 1024px) and (max-width: 1920px)": {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  },
  ClaminsContentStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "42px",
    paddingLeft: "37.79px",
    width: "100%",
    "@media (min-width:360px) and (max-width: 599px)": {
      width: "100%",
      maxWidth: "229px",
      height: "272px",
      lineHeight: "19.8px",
      paddingLeft: "20px",
      paddingRight: "20px",
      marginTop: "15px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      lineHeight: "15.8px",
    },
  },
  ActionButtonStyles: {
    textTransform: "none",
    display: "flex",
    width: "fit-content",
    minWidth: "155px",
    height: 40,
    padding: "16px 12px",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: "40px",
    backgroundColor: "#3F3F3F",
    boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
    color: "var(--Default-White, #FFF)",
    fontWeight: 400,
    fontFamily: "Noto Sans",
    lineHeight: 1,
    letterSpacing: 0.5,
  },
  secondCardItem: {
    marginTop: "16px",
  },
};

export default ImsDashboardStyle;
