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
    "@media (max-width:768px)": { gap: "15px" },
  },
  containerOne: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 0.5fr",
    gridTemplateAreas: `"policyNumber status"
                        "policyName policyName"`,
    rowGap: "20px",
    "@media (max-width:768px)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 0.5fr 1fr",
      gridTemplateAreas: `"policyNumber"
                        "policyName"
                        "status"`,
      rowGap: "10px",
    },
  },
  policyNumber: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    gridArea: "policyNumber",
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
  policyStatusContainer: {
    display: "grid",
    justifyContent: "end",
    gridArea: "status",
    "@media (max-width:768px)": {
      justifyContent: "start",
    },
  },
  policyStatusHeading: {
    ...commonStyles,
    color: "rgba(29, 37, 43, 1)",
  },
  policyStatus: {
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
    gridArea: "policyName",
  },
  premium: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardBodyPremium: {
    ...commonStyles,
    color: "rgba(29, 37, 43, 1)",
  },
  dueDate: {
    ...commonStyles,
  },
  vehicleCount: { fontWeight: "bold" },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  autoDebitActive: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  checkCircleIcon: { color: "rgba(13, 171, 34, 1)" },
  cardBodyPremiumAuto: {
    ...commonStyles,
    color: "rgba(13, 171, 34, 1)",
    fontWeight: "bold",
    textAlign: "right",
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
