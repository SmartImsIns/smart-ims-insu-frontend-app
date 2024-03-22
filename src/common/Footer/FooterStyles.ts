const FooterStyles = {
  footerContainer: {
    height: "52px",
    backgroundColor: "#E6F7FF",
    borderTop: " 1px solid #D8D8D8",
    padding: "0px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media(max-width: 780px)": {
      height: "104px",
      flexDirection: "column",
      justifyContent: "center",
      gap: "15px",
    },
  },
  copyRights: {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: " left",
    opacity: "75%",
  },
  footerItems: {
    display: "flex",
    alignItems: "center",
    gap: "42px",
    "@media(max-width: 780px)": {
      width: "100%",
      justifyContent: "center",
    },
  },
  rightText: {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
  },
};

export default FooterStyles;
