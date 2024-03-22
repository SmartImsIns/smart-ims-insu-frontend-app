const ReferenceBlogsStyles = {
  referenceBlogContainer: {
    paddingBottom: "70.49px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20.09px",
    width: "100%",
    "@media(min-width: 360px) and (max-width: 599px)": {
      display: "none",
    },
  },

  cardImage: {
    width: "100%",
    img: {
      maxWidth: "295.82px",
      height: "169.01px",
      borderRadius: "10 10px 0 0px",
      objectFit: "cover",
      "@media(min-width: 600px) and (max-width: 1023px)": {
        maxWidth: "255px",
      },
      "@media(min-width: 901px) and (max-width: 1023px)": {
        maxWidth: "305px",
      },
    },
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "10px",
    width: "95.5%",
    maxWidth: "100%",
    padding: "0px 30px",

    "@media(min-width: 600px) and (max-width: 865px)": {
      paddingLeft: "20px",
      width: "91%",
      gap: "10px",
      justifyContent: "center",
    },
    "@media(min-width: 866px) and (max-width: 1023px)": {
      paddingLeft: "20px",
      width: "92%",
    },
    "@media(min-width: 1023px) and (max-width: 1365px)": {
      paddingLeft: "20px",
      width: "94%",
    },
  },
  containerHeading: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "22px",
    paddingLeft: "30px",
    marginTop: "31.08px",

    "@media(min-width: 360px) and (max-width: 599px)": {
      paddingLeft: "20px",
    },
  },

  carouselContainer: {
    display: "none",
    "@media(min-width: 360px) and (max-width: 599px)": {
      display: "block",
    },
  },
  cardBottomButton: {
    width: "150px",
    height: "40px",
    padding: "16px 12px",
    borderRadius: "40px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: " 1px solid rgba(63, 63, 63, 1)",
    color: "rgba(63, 63, 63, 1)",
    textTransform: "none",
    "@media(min-width: 360px) and (max-width: 599px)": {
      marginLeft: "0px",
      marginTop: "-29.54px",
      width: "155px",
      heigth: "40px",
      lineHeight: "19.8px",
    },
    "@media(min-width: 600px) and (max-width: 700px)": {
      width: "120px",
      height: "20px",
      marginLeft: "20px",
    },
  },
  card: {
    width: "100%",
    maxWidth: "293px",
    height: "331px",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid rgba(175, 175, 175, 1)",
    borderRadius: "10px",
    boxShadow: "none",
    "@media(min-width: 600px) and (max-width: 700px)": {
      maxWidth: "255px",
      margin: "30px",
    },
    "@media(min-width: 701px) and (max-width: 1023px)": {
      maxWidth: "255px",
      margin: "10px",
    },
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  carousel: {
    width: "295.81px",
    margin: "0px auto",
    marginLeft: "32px",
    display: "none",
    "@media(min-width: 360px) and (max-width: 599px)": {
      display: "block",
      margin: "0px auto",
      marginTop: "19.51px",
    },
    // ".carousel-slider": {
    //   overflow: "visible",
    // },
    // ".control-dots": {
    //   bottom: "-40px",
    // },
    // ".dot": {
    //   background: "black",
    // },
    ".slickDots": {
      verticalAlign: "middle",
      margin: "auto",
      padding: "0",
      textAlign: "center",
      marginTop: "19px",
      li: {
        listStyle: "none",
        cursor: "pointer",
        display: "inline-block",
        margin: "0 3px",
        padding: "0px",
        "&.slick-active button": {
          width: "21px",
          height: "9px",
          borderRadius: "30px",
          backgroundColor: "#3F3F3F",
        },
        button: {
          border: "none",
          background: "#D9D9D9",
          color: "transparent",
          cursor: "pointer",
          display: "block",
          padding: "0px",
          height: "9px",
          width: "9px",
          borderRadius: "50%",
        },
      },
    },
  },
  policyCardViewAllBox: {
    display: "flex",
    gap: "5px",
    marginRight: "45px",
    marginTop: "42.78px",
  },
  policyCardViewAll: {
    fontFamily: "Noto Sans",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "400",
    lineHeight: "19.8px",
    textAlign: "left",
  },
  readMoreButton: {
    textTransform: "none",
    display: "flex",
    width: "fit-content",
    minWidth: "150px",
    padding: "16px 12px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "40px",
    backgroundColor: "#FFFFFF",
    color: "rgba(63, 63, 63, 1)",
    border: "1px solid rgba(63, 63, 63, 1)",
    fontWeight: "400",
    fontFamily: "Lato",
    lineHeight: 1,
    letterSpacing: 0.5,
    marginLeft: "2px",
    marginTop: "2px",
    height: "40px",
    boxShadow: "0px 0px 0px 0px",
    fontSize: "14px",
    "&:hover": {
      background: "transparent",
      color: "rgba(63, 63, 63, 1)",
    },
  },
  cardDescription: {
    width: "100%",
    maxWidth: "250px",
    fontFamily: "Noto Sans",
    fontSize: " 18px",
    fontColor: "rgba(29, 37, 43, 1)",
    fontWeight: "40",
    lineHeight: "25px",
    textAlign: "left",
    margin: "20px auto 0px auto",
    "@media(min-width: 600px) and (max-width: 700px)": {
      maxWidth: "190px",
    },
  },
  cardDescriptionText: {
    marginTop: "-5px",
    marginLeft: "-3px",
    fontFamily: "Noto Sans",
    fontSize: " 18px",
    fontColor: "rgba(29, 37, 43, 1)",
    fontWeight: "400",
    lineHeight: "25px",
    textAlign: "left",
    "@media(min-width: 600px) and (max-width: 700px)": {
      fontSize: "14px",
      maxWidth: "200px",
    },
    "@media(min-width: 800px) and (max-width: 1023px)": {
      marginLeft: "20px",
    },
  },
  cardButtonIcon: {
    position: "absolute",
    top: "270px",
    left: "20px",
  },
  playButton: {
    width: "30px",
    height: "40px",
    left: "-11px",
    top: "7px",
    borderRadius: "50%",
    "&:hover": {
      background: "transparent",
    },
    "@media(min-width: 600px) and (max-width: 700px)": {
      marginLeft: "15px",
    },
  },
  rightarrow: {
    img: {
      width: "15px",
      marginBottom: "2px",
    },
  },
};

export default ReferenceBlogsStyles;
