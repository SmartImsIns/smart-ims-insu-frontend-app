const WelcomeCardStyle = {
  welcomeCardContainerStyle: {
    padding: "0px 30px",
    "@media only screen and (max-width: 768px)": {
      padding: "0px 20px",
    },
  },
  welcomeCardTextStyle: {
    color: "#383D4E",
    fontSize: "20px",
    fontWeight: 400,
    fontFamily: "Playfair Display",
    lineHeight: "22px",
  },
  welcomeCardStyle: {
    flexShrink: 0,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "22px",
    padding: "25px 30px",
    background: "linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)",
    filter: "drop-shadow(20px 20px 57px rgba(0, 0, 0, 0.08))",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    "@media only screen and (max-width: 768px)": {
      gap: "15px",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      alignItems: "center",
    },
  },
  welcomeCardItemStyle: {
    display: "flex",
    alignItems: "center",
    gap: "20.19px",
    "@media only screen and (max-width: 600px)": {
      flexDirection: "column",
      gap: "10px",
      img: {
        height: "40px",
      },
    },
  },
  WelcomCardItemTextStyle: {
    color: "#1D252B",
    fontSize: "20px",
    fontWeight: 300,
    lineHeight: "22px",
    fontFamily: "Noto Sans",
    "@media (max-width: 599px)": {
      fontFamily: "Lato",
      lineHeight: "17.6px",
      textAlign: "center",
    },
    "@media (max-width: 992px)": {
      fontSize: "16px",
    },
  },
};

export default WelcomeCardStyle;
