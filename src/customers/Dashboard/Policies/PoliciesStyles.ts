const PoliciesStyles = {
  policiesContainer: {
    backgroundColor: "#e6f7ff",
    padding: "20px",
    display: "grid",
    gap: "20px",
    "@media(max-width: 780px)": {
      padding: "10px",
    },
  },
  heading: {
    color: "#383D4E",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Playfair Display",
    lineHeight: "110%",
  },
  policies: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    "@media(max-width: 780px)": {
      gridTemplateColumns: "1fr",
    },
  },
};
export default PoliciesStyles;
