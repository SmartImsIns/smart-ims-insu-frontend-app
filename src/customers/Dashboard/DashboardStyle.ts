const DashboardStyle = {
  dashboard: {},
  left: {
    width: "75%",
    display: "grid",
    gap: "1rem",
    "@media(max-width: 780px)": {
      width: "100%",
    },
  },
  welcome: {
    display: "flex",
    gap: "1rem",
    "@media(max-width: 780px)": {
      flexDirection: "column",
      gap: 0,
    },
  },
  loggedInUsername: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  NeedHelpText: { fontSize: "1.5rem", fontWeight: "normal" },
  policiesContainer: {},
  policiesHeadingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  policiesHeading: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  viewAllContainer: { display: "flex" },
  addIcon: { fontSize: "2rem", color: "black" },
  viewAll: { fontSize: "0.8rem", textDecorationLine: "underline" },
  arrowIcon: { fontSize: "1.5rem" },
  policies: {
    display: "flex",
    gap: "5%",
    "@media(max-width: 780px)": {
      flexDirection: "column",
      gap: "2rem",
    },
  },
  policyCard: {
    position: "relative",
    width: "30%",
    boxShadow: 5,
    "@media(max-width: 780px)": {
      width: "100%",
    },
  },
  policyCardContent: { height: 200, display: "grid", gap: "10px" },
  policyName: { fontSize: "1.2rem", fontWeight: "bold" },
  policyNumber: { fontSize: "1rem", fontWeight: "bold", color: "grey" },
  policyDetails: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "1fr 1fr",
  },
  policyDetail: { display: "flex", alignItems: "center", gap: "5px" },
  policyDescription: { fontSize: "0.8rem", color: "#666666" },
  policyActions: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
  },
  policyActionButton: {
    backgroundColor: "black",
    color: "white",
    fontSize: "0.7rem",
    width: "50%",
    borderRadius: "10px",
    ":hover": {
      backgroundColor: "#000000",
    },
  },
  policyIconButton: { position: "absolute", bottom: "12px", right: "0px" },
  policyMoreIcon: {
    border: "3px solid #000000",
    borderRadius: "5rem",
    padding: "2px",
    fontSize: "1rem",
    color: "#000000",
  },
};

export default DashboardStyle;
