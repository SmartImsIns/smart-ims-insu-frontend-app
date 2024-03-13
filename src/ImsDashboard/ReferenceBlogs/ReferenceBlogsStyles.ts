const ReferenceBlogsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    paddingRight:'30px',
    paddingLeft:'30px',    
    "@media(max-width: 780px)": {
      display: "none",
    },
  },
  cardImage: {
    width: "100%",
    img: {
      maxWidth: "295.82px",
      height: "169.01px",
      objectFit: "cover",
    },
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent:'space-between'
  },
  containerHeading: {
    fontFamily: "Playfair Display",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "22px",
  },
  cardBottomButton:{
    width: "150px",
    height: "40px",
    padding: "16px 12px",
    borderRadius: "40px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
    border:" 1px solid rgba(63, 63, 63, 1)",
    color:"rgba(63, 63, 63, 1)",
    textTransform: "none",
    "@media (max-width:768px)":{
        marginLeft:"30px",
        marginTop:"35.54px",
        width:"155px",
        heigth:"40px",
        lineHeight:"19.8px"
    }
  },
  card: {
    width: "100%",
    maxWidth: "295.82px",
    height: "331px",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid rgba(175, 175, 175, 1)",
    borderRadius: "10px",
  },
  carousel: {
    // border: "2px solid",
    width: "295.81px",
    margin: "0px auto",
    display: "none",
    "@media(max-width: 780px)": {
      display: "block",
    },
  },
  cardDescription: {
    width: "100%",
    maxWidth: "230px",
    fontFamily: "Noto Sans",
    fontSize: " 18px",
    fontColor: "rgba(29, 37, 43, 1)",
    fontWeight: "40",
    lineHeight: "25px",
    textAlign: "left",
    margin: "20px auto 0px auto",
  },
  cardButtonIcon: {
    position: "absolute",
    top: "270px",
  
  },
  playButton:{
    width:"40px",
    height:"40px",
    left:"-11px"
  }
};

export default ReferenceBlogsStyles;
