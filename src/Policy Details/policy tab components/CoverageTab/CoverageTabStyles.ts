const CoverageTabStyles = {
  container: {
    marginTop: "20.5px",
    marginLeft: "0px",
    // padding:"0px"
    '@media(min-width:1367px)': {
        margin:"0px auto 0px auto"
    }
  },
  coverageAndLinks: {
    marginTop: "44px",
  },
  discounts: {
    marginTop: "49px",
  },
  coverageAndLinksHeading: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "13px",
  
  },
  coverageAndLinksHeadingText: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontHeight: "400",
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  discountsHeading: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "13px",

  },
  discountsHeadingText: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontHeight: "400",
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
  },

  tableHead: {
    fontFamily: "Nunito Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
    opacity: "70%",
  },
  premiumFirstRow: {
    maxWidth: "40px",
  },
  premiumFirstTitle:{
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
},
  premiumTableCells: {
    display: "flex",

  },
//   tableBodyCell: {

//   },
  premiumTableRowCells: {
    display: "flex",
    flexDirection: "column",
    gap:"10px"
  },
  premiumTableCellValue: {
    fontFamily: "Noto Sans",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  premiumTableCellVechile: {
    fontFamily: "Noto Sans",
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "19.8px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  tableBodyCell: {
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    opacity: "100%",
    letterSpacing: "0px",
    textAlign: "left",
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '223px', 
  },
};
export default CoverageTabStyles;
