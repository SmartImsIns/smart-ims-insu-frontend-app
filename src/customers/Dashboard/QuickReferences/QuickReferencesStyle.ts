const QuickReferencesStyle = {
  quickReferences: {},
  quickReferencesHeadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quickReferencesHeading: { fontSize: "1.5rem", fontWeight: "bold" },
  viewAllContainer: { display: "flex", alignItems: "center", gap: "0.5rem" },
  viewAll: { fontSize: "0.8rem", textDecorationLine: "underline" },
  rightIcon: { color: "#666666" },
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
    "@media(max-width: 780px)": {
      width: "100%",
    },
  },
  qucikReferencesCardMedia: { height: 140 },
  quickReferencesCardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#cccccc",
  },
  quickReferencesContentText: { fontSize: "0.9rem" },
};

export default QuickReferencesStyle;
