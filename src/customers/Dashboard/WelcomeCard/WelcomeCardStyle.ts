const WelcomeCardStyle = {
  welcomeTextStyle: {
    color: "#383D4E",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Playfair Display",
    lineHeight: "110%",
  },
  welcomeCardStyle: {
    height: "100px",
    flexShrink: 0,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "22px",
    background: "linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)",
    filter: "drop-shadow(20px 20px 57px rgba(0, 0, 0, 0.08))",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    padding: "0px 30px",
  },
  WelcomeCardItemStyle: {
    display: "flex",
    alignItems: "center",
    gap: "20.19px",
  },
  WelcomCardItemTextStyle: {
    color: "#1D252B",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 300,
  },
};

export default WelcomeCardStyle;
