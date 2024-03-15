const FooterStyle = {
  footerContainer: {
    display: "flex",
    width: "100%",
    height: "52px",
    backgroundColor:"#E6F7FF",
    justifyContent: "space-between",
    borderTop: " 1px solid #D8D8D8",
    padding: "15px, 20px, 15px, 20px",
    marginTop:"70.48px",
    "@media(max-width: 780px)": {
        height:"104px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        gap:"0px",
      },
  },
  footerItems: {
    display: "flex",
    gap: "42px",
    marginRight:"20px",
    "@media(max-width: 780px)": {
        width: "100%",
        maxWidth:"380px",
        margin:"15px auto 0px auto",
        alignItems:"center",
      },
  },
  leftText: {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: " left",
    marginTop:"15px",
    marginLeft:"32.11px",
    opacity:"75%",
    "@media(max-width: 780px)": {
        width: "100%",
        maxWidth:"380px",
        margin:"0px auto 0px auto",
      },
  },
  rightText: {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: " left",
    marginTop:"15px",
    "@media(max-width: 780px)": {
    marginTop:"0px"
      },
  },
};
export default FooterStyle;
