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
  viewAll: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
  },
  viweAllText: {
    fontFamily: "Noto Sans",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "110%",
    color: "#000000",
    "@media (max-width:600px)": {
      fontSize: "14px",
    },
  },
  policies: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
    "@media(max-width: 992px)": {
      gridTemplateColumns: "1fr",
    },
  },
  noPoliciesCard: {
    padding: "30px",
    border: "1px solid #C9E1EC",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  },
  noPoliciesText: {
    overflow: "hidden",
    color: "#1D252B",
    fontSize: "18px",
    fontFamily: "Noto Sans",
    fontWeight: "400",
    lineHeight: "19.8px",
    textOverflow: "ellipsis",
    "@media (max-width:599px)": {
      fontSize: "16px",
      lineHeight: "24px",
    },
    "@media (min-width:600px) and (max-width:1366px)": {
      whiteSpace: "nowrap",
    },
  },
  viwAllPoliciesDialogContent: {
    paddingTop: "20px !important",
    background: "linear-gradient(180deg, #FBFDFC 0%, #E5F6FE 100%)",
  },
};
export default PoliciesStyles;
