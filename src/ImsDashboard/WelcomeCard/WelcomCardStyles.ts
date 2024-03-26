export const WelcomeCardStyles = {
  welcomeCardContainer: {
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
    },

  },
  WelcomeCard: {
    height: "100px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "22px",
    backgroundImage: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
    filter: 'drop-shadow(20px 20px 57px rgba(0, 0, 0, 0.08))',
    borderRadius: "10px",
    "@media (max-width: 599px)": {
      height: "258px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      justifyItems: "center",
      alignItems: "center",
      marginTop: "15px"
    },
    "@media (min-width: 600px) and (max-width: 615px)": {
      paddingLeft: "15px",
      paddingRight: "10px",
      gap: "15px",
    },
    "@media (min-width: 615px) and (max-width: 1024px)": {
      paddingLeft: "20px",
      paddingRight: "20px",
      gap: "15px",
    },
    "@media(min-width: 1024px) and (max-width: 1365px)": {
      paddingRight: "89.78px",
      paddingLeft: "35.08px",
    },
    "@media (min-width: 1366px)": {
      paddingLeft: "35.08px",
      paddingRight: "89.78px",
    },
  },
  IconText: {
    "@media(min-width: 600px) and (max-width: 800px)": {
      paddingLeft: "10px",
    },
    "@media(min-width: 800px)": {
      paddingLeft: "16px",
    },
  },
  IconBox: {
    "@media(max-width: 420px)": {
      width: "120px"
    },
  }
}