const ImsDashboardStyle = {
  imsDashbardContainer: {
    paddingLeft: '30px',
    paddingRight: '30px',
    marginTop: "40px"
  },
  claimsData: {
    gap: '12px',
    display: 'flex',
    flexDirection: 'column'

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
    paddingLeft: '35.08px'
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
  DashBoardCardItemStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  },

  ContentStyle: {
    textOverflow: 'ellipsis',
    color: "#1D252B",
    fontSize: "18px",
    fontStyle: 'normal',
    fontFamily: "Noto Sans",
    fontWeight: "300",
    lineHeight: '110%', // 19.8px

  },
  AttentionsCardTextStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: '17.5px',
    paddingLeft:'25.41px'
  },
  AttentionsCardBoxStyle: {
    display: 'flex',
    alignItems: "center",
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
  },
  welcomeTextStyle: {
    color: "#383D4E",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Playfair Display",
    lineHeight: "110%", /*22px*/
  }
}
export default ImsDashboardStyle;