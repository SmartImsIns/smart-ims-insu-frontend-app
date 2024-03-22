const QuickReferencesStyle = {
  quickReferences: {
    padding: "0px 100px",
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
    display: "flex",
    alignItems: "center",
    gap: "5%",
    "@media(max-width: 780px)": {
      flexDirection: "column",
      gap: "2rem",
    },
  },
  qucikReferencesCard: {
    width: "30%",
    boxShadow: "5",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid rgba(175, 175, 175, 1)",
    borderRadius: "10px",
    "@media(max-width: 780px)": {
      width: "100%",
    },
  },
  qucikReferencesCardMedia: { height: 160 },
  quickReferencesCardContent: {
    height: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quickReferencesCardContentText: { fontSize: "0.9rem" },
  readMoreBtn: {
    width: "150px",
    height: "40px",
    borderRadius: "40px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
    border: " 1px solid rgba(63, 63, 63, 1)",
    color: "rgba(63, 63, 63, 1)",
  },
};

export default QuickReferencesStyle;
