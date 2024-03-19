const EditProfileStyles = {
  editProfile: {
    width: "100%",
    height: "100vh",
    "@media (max-width:600px)": {
      height: "100%",
    },
  },
  editProfileText: {
    display: "flex",
    gap: "10px",
    marginTop: "30px",
    marginLeft: "30px",
  },
  text: {
    width: "101px",
    height: "22px",
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  fieldsFirstRow: {
    display: "flex",
    gap: "55px",
    "@media (max-width:600px)": {
      flexDirection: "column",
      gap: "0px",
    },
  },
  title: {
    width: "328px",
    height: "55px",
    top: "40px",
    left: "30px",
    "@media (max-width:600px)": {
      width: "320px",
    },
  },
  firstName: {
    width: "328px",
    height: "55px",
    top: "40px",
    "@media (max-width:600px)": {
      marginLeft: "30px",
      marginTop: "20.5px",
      width: "320px",
    },
  },
  lastName: {
    width: "328px",
    height: "55px",
    top: "66.5px",
    left: "30px",
    "@media (max-width:600px)": {
      marginTop: "-5.5px",
      width: "320px",
    },
  },
  dob: {
    width: "328px",
    height: "55px",
    top: "66.5px",
    "@media (max-width:600px)": {
      marginLeft: "30px",
      marginTop: "20.5px",
      width: "320px",
    },
  },
  contactHeading: {
    width: "auto",
    height: "18px",
    marginTop: "127px",
    marginLeft: "30px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      marginTop: "100.5px",
    },
  },
  number: {
    width: "328px",
    height: "55px",
    top: "25px",
    left: "30px",
    "@media(max-width:600px)": {
      width: "320px",
    },
  },
  mail: {
    width: "328px",
    height: "55px",
    top: "25px",
    "@media (max-width:600px)": {
      marginLeft: "30px",
      marginTop: "20.5px",
      width: "320px",
    },
  },
  addressHeading: {
    width: "auto",
    height: "18px",
    marginTop: "80px",
    marginLeft: "30px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      marginTop: "60.5px",
    },
  },
  address: {
    width: "681px",
    height: "55px",
    top: "25px",
    left: "30px",
    "@media (max-width:600px)": {
      width: "320px",
      height: "55px",
      top: "20.5px",
      overFlow: "ellipsis",
    },
  },
  zipCode: {
    width: "328px",
    height: "110px",
    marginTop: "50px",
    left: "30px",
    "@media (max-width:600px)": {
      top: "-10.5px",
      width: "320px",
    },
  },
  city: {
    width: "328px",
    height: "55px",
    marginTop: "50px",
    "@media (max-width:600px)": {
      marginLeft: "30px",
      marginTop: "-45.5px",
      width: "320px",
    },
  },
  state: {
    width: "328px",
    height: "110px",
    marginTop: "-25px",
    left: "30px",
    "@media (max-width:600px)": {
      marginTop: "20.5px",
      width: "320px",
    },
  },
  country: {
    width: "328px",
    height: "55px",
    marginTop: "-25px",
    "@media (max-width:600px)": {
      marginLeft: "30px",
      marginTop: "-30px",
      width: "320px",
    },
  },
};
export default EditProfileStyles;
