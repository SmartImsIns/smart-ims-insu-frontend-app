const BillingTabStyles = {
  tableHeading: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginTop: "20.5px",
    marginLeft: "95%",
  },
  tableHeadingFilterImage: {
    img: {
      width: "24px",
      height: "24px",
    },
  },
  tableHeadingFilterText: {
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
    marginTop: "-5px",
  },
  tableContainer: {
    padding: "0px 24px",
    width: "97%",
    border: "1px solid rgba(201, 225, 236, 1)",
    // maxWidth: "1258px",
    marginTop: "20.5px",
    marginLeft: "0px",
  },
  tableHeadText: {
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
    opacity: "70%",
  },
  tableHead: {
    borderBottom: "2px solid rgba(63, 63, 63, 1)",
  },
  tableHeadCellContainer: {
    display: "flex",
    gap: "10px",
  },
  tableBodyCells: {
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
  },
  billingTable: {
    display: "block",
    "@media(max-width:599px)": {
      display: "none",
    },
  },
  cardContainer: {
    display: "none",
    "@media(max-width: 599px)": {
      display: "block",
    },
  },
  container: {
    display: "flex",
    height: "auto",
    width: "100%",
    // minWidth: "320px",
    paddingBottom: "30.93px",
    gap: "59px",
    flexWrap: "wrap",
    border: "1px solid rgba(201, 225, 236, 1)",
    borderRadius: "13px",
    marginTop: "20px",
    paddingTop: "24px",
    marginLeft: "-10px",
  },
  amount: {
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "12px",
    letterSpacing: "0px",
    textAlign: "left",
  },
  downloadIcon: {
    marginLeft: "80px",
  },
  cardContent: {
    minWidth: "89px",
    display: "flex",
    flexDirection: "column",
    gap: "2.09px",
    "&:nth-child(odd)": {
      paddingLeft: "30px",
    },
    "@media(min-width: 500px) and (max-width: 599px)": {
      paddingLeft: "30px",
    },
  },
  filterContainer: {
    display: "flex",
    gap: "10px",
    marginLeft: "76%",
  },
  descriptionText: {
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "12px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "rgba(143, 147, 155, 1)",
  },
};
export default BillingTabStyles;
