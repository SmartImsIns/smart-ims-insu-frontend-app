const ActivityTabStyles = {
  container: {
    // display:"flex",
    background: "rgba(255, 255, 255, 1)",
    padding: "0px !important",
    //   margin: "24.5px 0px 0px 0px",
    overflow: "visible",
    "@media (min-width:360px) and (max-width:1240px)": {
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
    marginLeft: "94.5%",

    "@media (max-width:599px)": {
      marginLeft: "75%",
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
