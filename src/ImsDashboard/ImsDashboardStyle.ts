const ImsDashboardStyle = {
  imsDashbardContainer: {
    paddingLeft: '30px',
    paddingRight: '30px',
    marginTop: "40px",
    "@media (max-width: 599px)": {
      paddingLeft: '20px',
      paddingRight: '20px',
      marginTop: '20px', 
    },
    "@media (min-width: 600px) and (max-width: 1024px)": {
      paddingLeft: '25px',
      paddingRight: '25px',
      marginTop: '30px', 
    },
    "@media (min-width: 1024px) and (max-width: 1920px)": {
      paddingLeft: '30px',
      paddingRight: '30px',
      marginTop: '40px', 
    }
  },
  welcomeTextStyle: {
    color: "#383D4E",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Playfair Display",
    lineHeight: "110%", /*22px*/
    "@media (max-width: 599px)": {
      
    }
  },
  welcomeCardStyles: {
    height: '100px',
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop: '22px',
    background: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
    filter: 'drop-shadow(20px 20px 57px rgba(0, 0, 0, 0.08))',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
    paddingRight: '89.78px',
    paddingLeft: '35.08px',
    "@media (max-width: 599px)": {
      height: '258px',
      paddingRight: '38px',
      paddingLeft: '35.08px',
      justifyContent: "center",
      alignItems: "",
      gap:'10px',
      display: "grid",
      gridTemplateColumns: '1fr 1fr', /* Equal width columns */
      gridTemplateRows: '1fr 1fr', /* Equal height rows */
    }
  },
  DashBoardCardItemStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 599px)": {
      display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap:'10px',
    height:"68px"
    }
  },
  TextCardStyles:{
    marginLeft: "20.19px",
    color: "#1D252B",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "110%", // 22px
    "@media (max-width: 599px)": {
      fontSize: "16px",
      marginLeft: "0px",
      textAlign:'center'

    }
  },
  AttentionCardStyles: {
    height: '118.988px',
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop: '22px',
    paddingRight: '42px',
    paddingLeft: '23.63px',
    border: '1px solid #C9E1EC',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
    "@media (max-width:599px)":{
      marginTop: '15px',
      // width: '320px',
      height: '270px',
    flexDirection: "column",
    padding:'20px'

      }
  },
  myClaimsCardStyles: {
    height: '112px',
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: '22px',
    paddingRight: '42px',
    paddingLeft: '29.85px',
    border: '1px solid #C9E1EC',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
    "@media (max-width:599px)":{
      marginTop: '15px',
      // width: '320px',
      // height: '258px',
      }
  },
  ClaminsContentStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingRight: '42px',
    paddingLeft: '37.79px',
    width: '100%'
  },
  claimsData: {
    gap: '12px',
    display: 'flex',
    flexDirection: 'column'

  },
  

  HeadStyle: {
    overflow: 'hidden',
    color: '#1D252B',
    textOverflow: 'ellipsis',
    fontSize: '18px',
    fontFamily: "Noto Sans",
    fontStyle: 'normal',
    fontWeight: "400",
    lineHeight: '110%', // 19.8px
    "@media (max-width:599px)":{
       fontSize:'16px',
      lineHeight:'24px'
      }
  },

  ContentStyle: {
    textOverflow: 'ellipsis',
    color: "#1D252B",
    fontSize: "18px",
    fontStyle: 'normal',
    fontFamily: "Noto Sans",
    fontWeight: "300",
    lineHeight: '110%', // 19.8px
    "@media (max-width:599px)":{
      fontSize:'16px',
      lineHeight:'24px'
     }

  },
  AttentionsCardTextStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: '17.5px',
    paddingLeft:'25.41px',
    "@media (max-width:599px)":{
      gap: '24px',
       }
  },
  AttentionsCardBoxStyle: {
    display: 'flex',
    alignItems: "center",
    "@media (max-width:599px)":{
     alignItems:'flex-start'

      }
  },
  ActionButtonStyles: {
    display: 'flex',
    width: 155,
    height: 40,
    padding: '16px 12px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 40,
    backgroundColor: '#3F3F3F',
    boxShadow: '0px 6px 10px 0px rgba(63, 63, 63, 0.3)',
    color: 'var(--Default-White, #FFF)',
    fontWeight: 400,
    fontFamily: "Noto Sans",

    lineHeight: 1,
    letterSpacing: 0.5,
  }
}
export default ImsDashboardStyle;