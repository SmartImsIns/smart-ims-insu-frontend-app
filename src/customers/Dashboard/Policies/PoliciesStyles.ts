const PoliciesStyles = {
  policiesContainer: {
    padding: "0px 20px",
    display: "grid",
    gap: "20px",
  },
  policiesContainerHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  heading: {
    maxWidth: "257px",
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "22px",
    color: "rgba(56, 61, 78, 1)",
  },
  viewAll: { display: "flex", alignItems: "center", gap: "5px" },
  viweAllText: {
    fontFamily: "Noto Sans",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "110%",
    color: "#000000",
    "@media (max-width:599px)": {
      fontSize: "14px",
    },
  },
  policies: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    "@media(max-width: 992px)": {
      gridTemplateColumns: "1fr",
    },
  },
};
export default PoliciesStyles;
