const ReferenceBlogsStyles = {
  referenceBlogContainer: {
    paddingBottom: "70.49px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "8.09px",
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
    gap: "40px",
    width: "97%",
    maxWidth: "100%",
    paddingLeft: "30px",
    "@media(min-width: 600px) and (max-width: 1023px)": {
      paddingLeft: "20px",
      gap: "10px",
      justifyContent: "center",
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
    maxWidth: "295.82px",
    height: "331px",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid rgba(175, 175, 175, 1)",
    borderRadius: "10px",
    "@media(min-width: 600px) and (max-width: 700px)": {
      maxWidth: "205px",
      margin: "30px",
    },
    "@media(min-width: 701px) and (max-width: 1023px)": {
      maxWidth: "255px",
      margin: "30px",
    },

    "@media(min-width: 901px) and (max-width: 1023px)": {
      maxWidth: "299.8px",
      margin: "30px",
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
    ".carousel-slider": {
      overflow: "visible",
    },
    ".control-dots": {
      bottom: "-40px",
    },
    ".dot": {
      backgroundColor: "black",
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
    height: 40,
    padding: "16px 12px",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: "40px",
    backgroundColor: "#FFFFFF",
    color: "rgba(63, 63, 63, 1)",
    border: "1px solid rgba(63, 63, 63, 1)",
    fontWeight: 400,
    fontFamily: "Noto Sans",
    lineHeight: 1,
    letterSpacing: 0.5,
    marginLeft: "-4px",
    "&:hover": {
      backgroundColor: "#FFFFFF",
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
      marginLeft: "15px",
      maxWidth: "190px",
    },
  },
  cardDescriptionText: {
    marginTop: "-9px",
    marginLeft: "-5px",
    fontFamily: "Noto Sans",
    fontSize: " 18px",
    fontColor: "rgba(29, 37, 43, 1)",
    fontWeight: "400",
    lineHeight: "25px",
    textAlign: "left",
  },
  cardButtonIcon: {
    position: "absolute",
    top: "270px",
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
};

export default ReferenceBlogsStyles;
