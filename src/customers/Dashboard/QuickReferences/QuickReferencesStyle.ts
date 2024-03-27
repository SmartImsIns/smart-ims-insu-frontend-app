const QuickReferencesStyle = {
  quickReferences: {
    padding: "0px 20px",
    display: "grid",
    gap: "20px",
  },
  quickReferencesHeading: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "22px",
  },
  qucikReferencesCards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    alignItems: "center",
    gap: "30px",
    "@media(max-width: 1200px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media(max-width: 992px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media(max-width: 600px)": {
      display: "none",
    },
  },
  qucikReferencesCard: {
    boxShadow: "5",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid rgba(175, 175, 175, 1)",
    borderRadius: "10px",
  },
  quickReferencesCardContent: {
    height: "180px",
    display: "grid",
    gridTemplateRows: "1fr 0.5fr",
    gap: "20px",
    padding: "24px",
  },
  quickReferencesCardContentText: {
    fontFamily: "Noto Sans",
    fontSize: " 18px",
    fontColor: "rgba(29, 37, 43, 1)",
    fontWeight: "400",
    lineHeight: "25px",
    "@media(min-width: 600px) and (max-width: 699px)": {
      fontSize: "14px",
    },
  },
  readMoreBtn: {
    textTransform: "none",
    minWidth: "150px",
    padding: "12px",
    borderRadius: "40px",
    backgroundColor: "#FFFFFF",
    color: "rgba(63, 63, 63, 1)",
    border: "1px solid rgba(63, 63, 63, 1)",
    fontWeight: "400",
    fontFamily: "Lato",
    lineHeight: 1,
    letterSpacing: 0.5,
    boxShadow: "0px 0px 0px 0px",
    fontSize: "14px",
    "&:hover": {
      background: "transparent",
      color: "rgba(63, 63, 63, 1)",
    },
  },
};

export default QuickReferencesStyle;
