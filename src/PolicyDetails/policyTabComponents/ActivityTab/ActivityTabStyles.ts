const ActivityTabStyles = {
  container: {
    background: "rgba(255, 255, 255, 1)",
    overflow: "visible",
    marginTop: "10px",
    "@media (min-width:360px) and (max-width:1024px)": {
      background: "none",
      boxShadow: "none",
    },
  },
  active: {
    // width:"70.656%"
    width: "100%",
  },
  carrier: {
    flex: 1,
    padding: "30px 0px 61px 0px",
  },
  filter: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginTop: "20.5px",
    justifyContent: "flex-end",

    "@media (max-width:599px)": {
      marginLeft: "75%",
    },
    "@media (max-width:788px)": {
      marginTop: "-20.5px",
    },
  },
  tableHeadingFilterImage: {
    img: {
      width: "24px",
      height: "24px",
    },
  },
  tableHeadingFilterText: {
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
  },
};
export default ActivityTabStyles;
