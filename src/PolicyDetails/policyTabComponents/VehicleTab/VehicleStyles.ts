const VehicleSyles = {
  discounts: {
    marginTop: "49px",
    marginBottom: "50px",
  },

  headingAndButton: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:599px)": {
      borderBottom: "1px solid rgba(217, 217, 217, 1)",
    },
  },
  vehicleHeading: {
    display: "flex",
    gap: "10px",

    alignItems: "center",
    marginBottom: "13px",

    img: {
      width: "20px",
      height: "20px",
    },
  },
  HeadingText: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontHeight: "400",
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
  },

  tableHead: {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
    letterSpacing: "0px",
    textAlign: "left",
    opacity: "70%",
    color: "rgba(33, 24, 20, 1)",
  },
  tableContainer: {
    padding: "0px 30px",
    // width: "95.255%",
    width: "auto",
    border: "1px solid rgba(201, 225, 236, 1)",
    display: "block",
    "@media (max-width:599px)": {
      width: "100%",
      maxWidth: "320px",
      display: "none",
    },
  },
  rowOne: {
    width: "221px",
    fontFamily: "Noto Sans",
    border: "0px 0px 1px 0px",
    opacity: "0px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",
  },

  rowTwo: {
    width: "245px",
    fontFamily: "Noto Sans",
    border: "0px 0px 1px 0px",
    opacity: "0px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",
  },

  rowThree: {
    width: "173px",
    fontFamily: "Noto Sans",
    border: "0px 0px 1px 0px",
    opacity: "0px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",
  },

  rowFour: {
    width: "150px",
    fontFamily: "Noto Sans",
    border: "0px 0px 1px 0px",
    opacity: "0px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",
  },

  row: { height: "64px", fontFamily: "Noto Sans" },
  rowEmpty: {
    width: "471px",
    "@media (min-width:601px) and (max-width:690px)": { display: "none" },
  },

  addVehicleButton: {
    width: "129.4px",
    height: "22.4px",
    top: "369px",
    left: "1176px",
    cursor: "pointer",
    gap: "10px",
    borderRadius: "8px",
    opacity: "0px",
    background: "rgba(255, 255, 255, 1)",
    border: "1px solid rgba(0, 0, 0, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: "center",

    boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.02)",
    "@media (max-width:599px)": { width: "91px" },
  },

  rowName: {
    width: "366px",
    fontFamily: "Noto Sans",
    border: "0px 0px 1px 0px",
    opacity: "0px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",
  },
  rowLicense: {
    width: "301px",
    fontFamily: "Noto Sans",
    border: "0px 0px 1px 0px",
    opacity: "0px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",
  },
  rowDriverType: {
    width: "240px",
    fontFamily: "Noto Sans",
    border: "0px 0px 1px 0px",
    opacity: "0px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",
  },
  rowGender: {
    width: "171px",
    fontFamily: "Noto Sans",
    border: "0px 0px 1px 0px",
    opacity: "0px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",
  },
  rowDob: {
    width: "198px",
    fontFamily: "Noto Sans",
    border: "0px 0px 1px 0px",
    opacity: "0px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    textAlign: "left",
  },

  mobileCard: {
    display: "none",
    "@media (max-width:599px)": {
      display: "block",
      width: "auto",
      height: "auto",
      top: "356px",
      left: "11px",
      gap: "0px",
      borderRadius: "10px",
      opacity: "0px",
      margin: "10px 0px",
      border: "1px solid rgba(217, 217, 217, 1)",
      padding: "7px 0px 13px 10px",
    },
  },
  vin: {
    width: "auto",
    height: "18px",
    top: "366px",
    left: "21px",
    gap: "0px",
    opacity: "0px",
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "17.57px",
    letterSpacing: "0.01em",
    textAlign: "left",
  },
  modelYear: { display: "flex", gap: "10px" },
  model: {
    width: "auto",
    height: "13px",
    fontFamily: "Noto Sans",
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "12.55px",
    letterSpacing: "0.01em",
    textAlign: "left",
    marginTop: "10px",
  },
  year: {
    marginTop: "5px",
    width: "43px",
    height: "23px",
    top: "486px",
    left: "182px",
    gap: "0px",
    borderRadius: "4px",
    opacity: "0px",
    background: "rgba(217, 217, 217, 1)",
    fontFamily: "Noto Sans",
    fontSize: "10px",
    fontWeight: "700",
    lineHeight: "12.55px",
    letterSpacing: "0.01em",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  type: {
    width: "auto",
    height: "13px",
    fontFamily: "Noto Sans",
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "12.55px",
    letterSpacing: "0.01em",
    textAlign: "left",
    display: "flex",
    marginTop: "10px",
  },
  vehicleType: {
    fontFamily: "Noto Sans",
    fontSize: "10px",
    fontWeight: "700",
    lineHeight: "12.55px",
    letterSpacing: "0.01em",
    textAlign: "left",
    color: "rgba(101, 101, 101, 1)",
  },
  name: {
    width: "auto",
    height: "18px",
    opacity: "0px",
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "17.57px",
    letterSpacing: "0.01em",
    textAlign: "left",
    marginTop: "10px",
  },
  gender: {
    marginTop: "15px",
    width: "auto",
    height: "13px",
    opacity: "0px",
    fontFamily: "Noto Sans",
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "12.55px",
    letterSpacing: "0.01em",
    textAlign: "left",
    color: "rgba(101, 101, 101, 1)",
  },
  line: { marginTop: "6px", color: "rgba(101, 101, 101, 1)" },
  drivingLicense: {
    width: "auto",
    height: "13px",
    marginTop: "10px",
    fontFamily: "Noto Sans",
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "12.55px",
    letterSpacing: "0.01em",
    textAlign: "left",
  },
};
export default VehicleSyles;
