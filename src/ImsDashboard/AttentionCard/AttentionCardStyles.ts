export const AttentionCardStyles = {
  Container: {
    marginTop: "40.23px",
    marginLeft: "30px",
    marginRight: "30px",
    "@media (max-width: 599px)": {
      marginLeft: "20px",
      marginRight: "20px",
      marginTop: "40px",
    },
    "@media (min-width: 600px) and (max-width: 1024px)": {
      marginLeft: "25px",
      marginRight: "25px",
      marginTop: "40px",
    },
    "@media (min-width: 1024px) and (max-width: 1920px)": {
      marginLeft: "30px",
      marginRight: "30px",
    },
  },
  AttentionCardStyles: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "22px",
    paddingRight: "42px",
    paddingLeft: "23.63px",
    border: "1px solid #C9E1EC",
    borderRadius: "10px",
    borderShadow: "none",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0)",
    "@media (max-width:599px)": {
      paddingRight: "38px",
      // height: "228px",
      flexDirection: "column",
      padding: "20px",
      gap: "46px"
    },
    "@media (min-width:600px) and (max-width:799px)": {
      paddingRight: "38px",
      flexDirection: "column",
      padding: "20px 15px 20px 20px",
    },
    "@media (min-width:800px) and (max-width:1024px)": {
      padding: "20px 15px 20px 20px",
    },
    "@media (min-width:1024px)": {
      gap: "20px",
      height: "118px",
    }

  },
  "@media (min-width: 1024px) and (max-width: 1920px)": {
    marginLeft: "30px",
    marginRight: "30px",
  },
  HeadStyle: {
    overflow: "hidden",
    color: "#1D252B",
    fontSize: "18px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px",
    textOverflow: 'ellipsis',
    "@media (max-width:599px)": {
      fontWeight: "400",
      color: '#1D252B',
      fontFamily: 'Noto Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      lineHeight: '24px',
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      maxWidth: "450px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    "@media (min-width: 1025px) and (max-width: 1366px)": {
      maxWidth: "650px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    }, "@media (min-width: 1366px)": {
      maxWidth: "900px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  AttentionsCardTextStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "17.54px",
    paddingLeft: "25.41px",
    paddingRight: "20px",
    "@media (max-width:599px)": {
      gap: "24px",
      flexWrap: "wrap",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      gap: "15x",
      flexWrap: "wrap",
    },
  },
  "@media (min-width:800px) and (max-width:1024px)": {
    padding: "20px 15px 20px 20px",
  },
  ActionButton: {
    "@media (min-width:600px) and (max-width:1024px)": {
      marginLeft: "auto"
    },

  },
  "@media (min-width:1024px)": {
    gap: "20px",
    height: "118.988px",
  },
  icon: {
    marginBottom: "19.6px"
  }

}
