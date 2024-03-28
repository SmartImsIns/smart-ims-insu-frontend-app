const FileAClaimStyles = {
  container: {
    padding: "30px",
    width: "100%",
    maxWidth: "815px",
    border: "2px solid",
    background: "linear-gradient(180deg, #FBFDFC 0%, #E5F6FE 100%)",
    "@media(min-width:600px) and (max-width:1023px)": {
      maxWidth: "540px",
    },
    "@media(min-width:360px) and (max-width:599px)": {
      padding: "0px",
      width: "auto",
    },
  },
  imageDisplayerBox: {
    display: "flex",
    gap: "16px",

    border: "1px solid #C4C4C4",
    backgroundColor: "#FFFFFF",
    padding: "20px 16px",
    marginTop: "14px",
    height: "38.4px",
    borderRadius: "4px",
    alignItems: "center",
    img: {
      width: "24px",
      height: "24px",
      cursor: "pointer",
    },
    "& img:first-child": {
      height: "40px",
      width: "40px",
      padding: "0px 15px",
    },
  },
  uplaodBox: {
    textAlign: "left",
    display: "flex",
    gap: "8px",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "-197px",
    height: "44.4px",
    "@media(max-width:699px)": {
      marginLeft: "-97px",
    },
    img: {
      paddingLeft: "14px",
    },
  },
  fileNames: {
    width: "192px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fileUploadButton: {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.15000000596046448px",
    textAlign: "left",
    border: "1px solid #C4C4C4",
    textTransform: "none",
    color: "#000000",
    "&:hover": {
      background: "linear-gradient(180deg, #FBFDFC 0%, #E5F6FE 100%)",

      color: "#000000",
    },
  },
  formsContainer: {
    padding: "0px 20px 0px 0px",
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "30px",
    "@media (min-width:360px) and (max-width:599px)": {
      padding: " 0px 30px",
    },
  },
  heading: {
    paddingBottom: "30px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #3F3F3F",

    img: {
      cursor: "pointer",
    },
    "@media (min-width:360px) and (max-width:599px)": {
      paddingBottom: "0px",
      height: "21.2px",
      alignItems: "center",
      padding: "19px 30px 19px 20px",
      border: "1px solid #D8D8D8",
    },
  },
  headingText: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: "left",
  },
  submitButton: {
    borderRadius: "40px",
    padding: "16px 12px",
    width: "150px",
    height: "40px",
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    textAlign: "left",
    textTransform: "none",
    backgroundColor: "#3F3F3F",
  },
  cancelButton: {
    borderRadius: "40px",
    border: "1px solid #3F3F3F",
    padding: "16px 12px",
    color: "#3F3F3F",
    width: "150px",
    height: "40px",
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    textAlign: "left",
    textTransform: "none",
  },
  fileNameText: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "28px",
    letterSpacing: "0.15000000596046448px",
    textAlign: "left",
  },
  completedText: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20.02px",
    letterSpacing: "0.17000000178813934px",
    textAlign: "left",
    color: "#00000099",
  },
  fileSizeText: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20.02px",
    letterSpacing: "0.17000000178813934px",
    textAlign: "left",
    color: "#00000099",
  },
  fileSizeBox: {
    display: "flex",
    gap: "18px",
  },
  buttons: {
    display: "flex",
    gap: "20px",
    marginTop: "36px",
    justifyContent: "flex-end",
    flex: "1 1 0%",
    marginBottom: "30px",
    "@media(min-width:360px) and (max-width:699px)": {
      justifyContent: "flex-end",
      padding: "0px",
      marginTop: "68px",
    },
  },
};
export default FileAClaimStyles;
