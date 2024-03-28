const LoginPageStyles = {
  login: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:599px)": {
      background:
        "linear-gradient(180deg, #FBFDFC 0%, #E5F6FE 100%), linear-gradient(180deg, #FBFDFC 0%, #B2E6FF 100%), linear-gradient(1.4deg, #BCC9CF -3.2%, #FFFFFF 32.82%)",
    },
  },
  loginImage: {
    width: "57.76%",
    height: "100%",
    img: {
      mixBlendMode: "luminosity",
      width: "100%",
      //   height: "100vh",
      overFlow: "hidden",
    },
    "@media (max-width:1024px)": {
      display: "none",
    },
  },
  loginContainer: {
    width: "42.24%",
    height: "680px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginCard: {
    width: "367px",
    height: "556.71px",
    top: "60px",
    left: "889px",
    gap: "0px",
    margin: "60px 110px 63.29px 100px",
    borderRadius: "0px 0px 0px 0px",
    opacity: "0px",
    color: "rgba(63, 63, 63, 1)",
    "@media (max-width:599px)": {
      width: "360px",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      width: "580px",
    },
  },
  image: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    img: {
      width: "143px",
      height: "62px",
      "@media (max-width:1024px)": {
        width: "95.57px",
        height: "41.5px",
      },
    },
  },
  loginMessage: {
    width: "100%",
    marginTop: "30px",
    height: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: "left",
    color: "rgba(56, 61, 78, 1)",
    "@media (max-width:599px)": {
      width: "100%",
      height: "22px",
      marginLeft: "10px",
      marginTop: "42.57px",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      width: "100%",
      height: "22px",
      marginLeft: "10px",
      marginTop: "42.57px",
    },
  },
  loginName: {
    width: "100%",
    height: "54px",
    marginTop: "30px",
    borderRadius: "4px",
    "@media (max-width:599px)": {
      width: "319px",
      height: "72px",
      marginLeft: "20px",
      marginTop: "30px",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      width: "579px",
      height: "72px",
      marginLeft: "20px",
      marginTop: "30px",
    },
  },
  loginNameText: {
    height: "22.4px",
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.15000000596046448px",
    textAlign: "left",
  },
  loginPassword: {
    width: "100%",
    height: "54px",
    marginTop: "38px",
    borderRadius: "4px",
    "@media (max-width:599px)": {
      width: "319px",
      height: "72px",
      marginLeft: "20px",
      marginTop: "38px",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      width: "579px",
      height: "72px",
      marginLeft: "20px",
      marginTop: "38px",
    },
  },
  checkBoxPassword: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px",
    "@media (max-width:599px)": {
      width: "319px",
      height: "20px",
      marginLeft: "20px",
      marginTop: "18px",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      width: "579px",
      height: "20px",
      marginLeft: "20px",
      marginTop: "18px",
    },
  },
  checkBoxLabel: {
    display: "flex",
    alignItems: "center",
  },
  checkBox: {
    color: "black",
    width: "20px",
    height: "20px",
  },
  label: {
    width: "auto",
    height: "15px",
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "16px",
    textAlign: "left",
    color: "rgba(63, 63, 63, 1)",
    marginLeft: "-20.5px",
  },
  password: {
    width: "auto",
    height: "16px",
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "16px",
    textAlign: "right",
    color: "rgba(65, 101, 177, 1)",
  },
  loginButton: {
    width: "363px",
    height: "43px",
    marginTop: "50px",
    borderRadius: "40px",
    background: "rgba(63, 63, 63, 1)",
    boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    textAlign: "left",
    "@media (max-width:599px)": {
      width: "320px",
      height: "43px",
      marginLeft: "20px",
      marginTop: "90px",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      width: "580px",
      height: "43px",
      marginLeft: "20px",
      marginTop: "90px",
    },
  },
  registerAccount: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "114.36px",
    "@media (max-width:599px)": {
      width: "277px",
      height: "15px",
      marginLeft: "47.45px",
      marginTop: "43.34px",
      boxShadow: "0px 0px 24px 0px rgba(91, 128, 234, 0.15)",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      width: "517px",
      height: "15px",
      marginLeft: "47.45px",
      marginTop: "43.34px",
      boxShadow: "0px 0px 24px 0px rgba(91, 128, 234, 0.15)",
    },
  },
  account: {
    width: "163px",
    height: "15px",
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "15.4px",
    textAlign: "left",
  },
  register: {
    width: "91px",
    height: "15px",
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "15.4px",
    textAlign: "left",
    color: "rgba(65, 101, 177, 1)",
  },
  forword: {
    img: {
      width: "24px",
      marginTop: "-3px",
      "@media (max-width:1024px)": {
        marginTop: "6px",
      },
    },
  },
};
export default LoginPageStyles;
