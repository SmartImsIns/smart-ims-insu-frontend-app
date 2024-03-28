const ClaimsCardStyles = {
  claimCardContainer: {
    padding: "0px 30px",
    "@media only screen and (max-width: 768px)": {
      padding: "0px 20px",
    },
  },
  claimCardsContainerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
    "@media (max-width:599px)": {
      fontSize: "14px",
    },
  },
  heading: {
    color: "#383D4E",
    fontSize: "20px",
    fontWeight: 400,
    fontFamily: "Playfair Display",
    lineHeight: "22px",
  },
  claimsCard: {
    marginTop: "22px",
    padding: "30px",
    display: "grid",
    gridTemplateColumns: "1.5fr repeat(5, 1fr)",
    alignItems: "center",
    gap: "20px",
    border: "1px solid #C9E1EC",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    "@media (max-width:992px)": {
      gridTemplateAreas: `"policyName policyName policyName policyName"
        "verification updatedOn claimInitiated contactPerson"
        "button button button button"`,
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
    "@media (max-width:600px)": {
      gridTemplateAreas: `"policyName policyName"
        "verification updatedOn"
        "claimInitiated contactPerson"
        "button button"`,
      gridTemplateColumns: "1fr 1fr",
    },
  },
  claimPolicyName: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    "@media (max-width:992px)": {
      gridArea: "policyName",
    },
  },
  claimsCardItem: {
    display: "grid",
    gap: "12px",
  },
  claimsCardItemHeading: {
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
    "@media (min-width:600px) and (max-width:1024px)": {
      whiteSpace: "nowrap",
    },
  },
  claimsCartItemContent: {
    color: "#1D252B",
    fontSize: "18px",
    fontFamily: "Noto Sans",
    fontWeight: "300",
    lineHeight: "19.8px",
    "@media(max-width:599px)": {
      fontSize: "14px",
      lineHeight: "18px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontFamily: '"Noto Sans"',
      whiteSpace: "nowrap",
    },
    "@media (min-width: 1025px) and (max-width: 1366px)": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  claimsCardButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    "@media (max-width:992px)": {
      gridArea: "button",
    },
    "@media (max-width:600px)": {
      justifyContent: "center",
    },
  },
  claimsCardButton: {
    textTransform: "none",
    width: "fit-content",
    minWidth: "155px",
    padding: "12px 12px",
    flexShrink: 0,
    borderRadius: "40px",
    backgroundColor: "#3F3F3F",
    boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
    color: "var(--Default-White, #FFF)",
    fontWeight: 400,
    fontFamily: "Lato",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    fontSize: "14px",
  },
};
export default ClaimsCardStyles;
