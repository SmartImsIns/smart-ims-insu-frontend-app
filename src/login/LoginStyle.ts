const LoginStyle = {
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    "@media(max-width: 780px)": {
      padding: "2rem",
    },
  },
  card: {
    display: "grid",
    placeItems: "center",
    gap: "2rem",
    width: "30%",
    padding: "2rem",
    boxShadow: "5",
    "@media(max-width: 780px)": {
      width: "100%",
      border: "none",
    },
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  inputField: { width: "100%" },
  btn: {
    width: "115px",
    border: "1px solid",
    backgroundColor: "#000000",
    color: "#ffffff",
    borderRadius: "8px",
    ":hover": {
      backgroundColor: "#000000",
    },
    ":disabled": {
      backgroundColor: "lightgrey",
    },
  },
};

export default LoginStyle;
