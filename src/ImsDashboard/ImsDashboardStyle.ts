const ImsDashboardStyle = {
  container: {
    paddingTop: "40px",
    maxWidth: "1920px",
    margin: "0px auto 0px auto",
  },
  flex1: {
    flex: "1 1 0%",
  },
  welcomeCardsContainer: {
    paddingLeft: "30px",
    paddingRight: "30px",
    marginTop: "60px",
    "@media (max-width: 599px)": {
      paddingLeft: "20px",
      paddingRight: "20px",
      marginTop: "40px",
    },
    "@media (min-width: 600px) and (max-width: 1024px)": {
      paddingLeft: "25px",
      paddingRight: "25px",
      marginTop: "50px",
    },
    "@media (min-width: 1024px) and (max-width: 1920px)": {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  },
  imsDashbardContainer: {
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
  claimsData: {
    gap: "12px",
    display: "flex",
    flexDirection: "column",
  },
  claimsCardWrapperStyles: {
    display: "flex",
    gap: "22px",
    padding: "15px",
    "@media (max-width:599px)": {
      marginRight: "0px",
      minWidth: "114px",
    },
  },
  welcomeCardStyles: {
    height: "100px",
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "22px",
    backgroundImage: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
    filter: 'drop-shadow(20px 20px 57px rgba(0, 0, 0, 0.08))',
    paddingRight: "89.78px",
    paddingLeft: "35.08px",
    borderRadius: "10px",
    "@media (max-width: 599px)": {
      height: "258px",
      paddingRight: "38px",
      paddingLeft: "35.08px",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
    },
    "@media(min-width: 600px) and (max-width: 880px)": {
      paddingLeft: "25px",
      paddingRight: "50px",
    },
  },
  DashBoardCardText: {
    marginLeft: "20.19px",
    color: "#1D252B",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "22px",
    fontFamily: "Noto Sans",
    "@media (max-width: 599px)": {
      fontSize: "14px",
      paddingLeft: "10px",
      marginLeft: "0px",
      textAlign: "center",
      minWidth: "120px",
      maxHeight: "36px",
    },
    "@media(min-width: 600px) and (max-width: 1023px)": {
      fontSize: "16px",
      marginLeft: "10px",
      maxWidth: "140px",
    },
  },
  AttentionCardStyles: {
    height: "118.988px",
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
      height: "270px",
      flexDirection: "column",
      padding: "20px",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      height: "150px",
      padding: "10px",
    },
  },
  trackYourClaimButton: {
    display: "block",
    "@media (max-width:599px)": {
      display: "none",
    },
  },
  trackYourClaimText: {
    display: "none",
    marginLeft: "172px",
    minWidth: "118px",
    "@media (max-width:599px)": {
      display: "flex",
      alignItem: "center"
    },
    "@media (min-width:600px) and (max-width:1024px)": {

    },

  },
  trackYourClaim: {
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "rgba(44, 108, 231, 1)",
  },
  ActionButton: {
    "@media (max-width:599px)": {
      marginTop: "10px",
    },
  },
  renewNowButton: {
    textTransform: "none",
    display: "flex",
    width: "fit-content",
    minWidth: "155px",
    height: "40px",
    padding: "16px 12px",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: "40px",
    backgroundColor: "#3F3F3F",
    boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
    color: "var(--Default-White, #FFF)",
    fontWeight: 400,
    fontFamily: "Lato",
    fontStyle: "normal",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    marginLeft: "auto",
    fontSize: "14px"
  },
  myClaimsCardStyles: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "22px",
    padding: "15px",
    border: "1px solid #C9E1EC",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingRight: "42px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0)",
    "@media (max-width:599px)": {
      height: "309px",
      paddingRight: "0px",
      justifyContent: "space-between",
    },
  },
  myClaimsCardWithIconStyles: {
    "@media (min-width:360px) and (max-width:1024px)": {
      width: "100%",
    },
  },
  myClaimsCardButtonStyles: {
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
    fontFamily: "Lato",
    lineHeight: "14px",
    letterSpacing: 0.5,
    marginLeft: "auto",
    fontSize: "14px"
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

  DashBoardCardItemStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",

    "@media (max-width: 599px)": {
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      height: "68px",
      img: {
        height: "40px",
      },
    },
    "@media(min-width: 600px) and (max-width: 800px)": {
      maxWidth: "100px",
    },
  },

  HeadStyle: {
    overflow: "hidden",
    color: "#1D252B",
    fontSize: "18px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
    textOverflow: 'ellipsis',
    "@media (max-width:599px)": {
      fontWeight: "400",
      maxWidth: "500px",
      overflow: 'hidden',
      color: '#1D252B',
      textOverflow: 'ellipsis',
      fontFamily: 'Noto Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      lineHeight: '24px',
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      fontSize: '17px',
    },
  },

  ContentStyle: {
    color: "#1D252B",
    fontSize: "18px",
    fontStyle: "normal",
    fontFamily: "Noto Sans",
    fontWeight: "300",
    lineHeight: "20px",
    "@media(max-width:599px)": {
      fontSize: "14px",
      lineHeight: "24px",
      color: "#1D252B",
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontFamily: '"Noto Sans"',
      fontStyle: 'normal',
      fontWeight: 300,
    },
  },
  AttentionsCardTextStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "17.5px",
    paddingLeft: "25.41px",
    paddingRight: "20px",
    "@media (max-width:599px)": {
      gap: "24px",
      flexWrap: "wrap",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      gap: "15x",
      flexWrap: "wrap",
      // marginTop: "20px"
    },


  },
  AttentionsCardBoxStyle: {
    display: "flex",
    alignItems: "center",
    "@media (max-width:599px)": {
      alignItems: "flex-start",
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
  welcomeTextStyle: {
    color: "#383D4E",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Playfair Display",
    lineHeight: "22px",
  },
  secondCardItem: {
    marginTop: "16px",
  },
};
export default ImsDashboardStyle;
