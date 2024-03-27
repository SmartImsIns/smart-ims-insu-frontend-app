const commonStyles = {
  fontFamily: "Noto Sans",
  fontSize: "18px",
  fontWeight: "300",
};

const font = {
  fontFamily: "Noto Sans",
};

const PolicyCardStyles = {
  policyCard: {
    display: "grid",
    gap: "20px",
    boxShadow: "20px 20px 57px 0px rgba(0, 0, 0, 0.08)",
    padding: "20px",
  },
  containerOne: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTopPolicyHeading: {
    fontFamily: "Noto Sans",
    color: "rgba(29, 37, 43, 1)",
    fontSize: "18px",
    fontWeight: "300",
  },
  cardTopPolicyNumber: {
    fontFamily: "Noto Sans",
    color: "rgba(29, 37, 43, 1)",
    fontSize: "20px",
    fontWeight: "400",
  },
  cardTopStatusHeading: {
    ...commonStyles,
    color: "rgba(29, 37, 43, 1)",
  },
  cardTopStatusDate: {
    fontFamily: "Noto Sans",
    color: "rgba(29, 37, 43, 1)",
    fontSize: "20px",
    fontWeight: "400",
  },
  productName: {
    fontFamily: "Noto Sans",
    color: "rgba(29, 37, 43, 1)",
    fontSize: "20px",
    fontWeight: "400",
  },
  premium: {
    display: "flex",
    justifyContent: "space-between",
    "@media(min-width: 992px)": {
      flexDirection: "column",
    },
  },
  cardBodyPremium: {
    ...commonStyles,
    color: "rgba(29, 37, 43, 1)",
  },
  cardBodyPremiumAuto: {
    ...commonStyles,
    color: "rgba(13, 171, 34, 1)",
  },
  cardBodyDueDate: {
    ...commonStyles,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewPolicy: {
    ...font,
    width: "155px",
    height: "40px",
    borderRadius: "40px",
    backgroundColor: "rgba(63, 63, 63, 1)",
    boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
  },

  ellipsisButton: {},
};
export default PolicyCardStyles;
