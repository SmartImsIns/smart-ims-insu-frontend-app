const commonStyles = {
    fontFamily: "Noto Sans",
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "20px",
    letterSpacing: "0em",
    textAlign: "left",
};

const font = {
    fontFamily: "Noto Sans",
}

const PolicyStyles = {
    card: {
        display: "flex"
    },
    policyCardHeading:{
        ...font,
        width:"100%",
        maxWidth: "237px",
        height: "22px",
        marginTop: "40.78px",
        marginLeft: "30px",
        fontFamily: "Playfair Display",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "22px",
        letterSpacing: "0em",
        textAlign: "left",
        color: "rgba(56, 61, 78, 1)",
        "@media (max-width:768px)":{
            marginLeft:"20px",
        }
    },
    AllCards:{
        display:"flex",
        width:"100%",
        maxWidth:"1306px",
        margin:"0px auto",
        gap:"30px",

        "@media (max-width:768px)":{
            width:"100%",
            maxWidth:"320px",
            margin:"0px auto",
            gap:"20px",
        }
    },
    oneCard: {
        width:"100%",
        // maxWidth: "46.6921%",
        maxWidth:"638px",
        height: "367.47px",
        marginTop: "21.95px !important",
        // margin : "auto",
        boxShadow: "20px 20px 57px 0px rgba(0, 0, 0, 0.08)",

        "@media (max-width:768px)":{
            width:"100%",
            maxWidth:"320px",
            margin:"auto",
            height:"584.42px"
        }

    },
    cardIcon: {
        width:"100%",
        maxWidth: "61.74px",
        height: "52.81px",
        marginTop: "40.03px",
        marginLeft: "40.02px",

        "@media (max-width:768px)":{
            marginLeft:"30px",
            marginTop:"45.61px",
        }
    },
    cardTopLeft: {
        display: "flex",
        gap:"160.5px",
        "@media (max-width:768px)":{
            display:"block"
        }
    },
    cardTopPolicyHeading: {
        ...font,
        width:"100%",
        maxWidth: "auto",
        height: "20px",
        marginTop: "47.61px",
        marginLeft: "18.22px",
        color: "rgba(29, 37, 43, 1)",
        fontSize: "18px",
        fontWeight: "300",
        lineHeight: "19.8px",
        letterSpacing: "0em",
        textAlign: "left",
        "@media (max-width:768px)":{
            marginLeft:"28.26px",
            marginTop:"45.61px",
        }
    },
    cardTopPolicyNumber: {
        ...font,
        width:"100%",
        maxWidth: "149px",
        height: "22px",
        marginTop: "3.89px",
        marginLeft: "18.22px",
        color: "rgba(29, 37, 43, 1)",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "22px",
        letterSpacing: "0em",
        textAlign: "left",
        "@media (max-width:768px)":{
            marginLeft:"28.26px",
        }
    },
    cardTopStatusHeading: {
        ...font,
        width:"100%",
        maxWidth: "51px",
        height: "20px",
        marginTop: "48.69px",
        // marginLeft: "160.5px",
        color: "rgba(29, 37, 43, 1)",
        fontSize: "18px",
        fontWeight: "300",
        lineHeight: "19.8px",
        letterSpacing: "0em",
        textAlign: "left",
        "@media (max-width:768px)":{
            marginLeft:"-57px",
            marginTop:"20.19px",
            height:"19.6px",
        }
    },
    cardTopStatusDate: {
        ...font,
        width:"100%",
        maxWidth: "203px",
        height: "22px",
        marginTop: "2.89px",
        // marginLeft: "160.5px",
        color: "rgba(29, 37, 43, 1)",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "22px",
        letterSpacing: "0em",
        textAlign: "left",
        "@media (max-width:768px)":{
            marginLeft:"-57px",
            width:"auto",
            heigth:"21.56px"
        }
    },
    cardBodyHeading: {
        ...font,
        width:"100%",
        maxWidth: "auto",
        height: "22px",
        marginTop: "50.5px",
        marginLeft: "40px",
        color: "rgba(29, 37, 43, 1)",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "22px",
        letterSpacing: "0em",
        textAlign: "left",

        "@media (max-width:768px)":{
            marginLeft:"30px",
            marginTop:"107px",
            width:"230px",
            heigth:"52px",
            lineHeight:"26px"
        }
    },

    autoDeduct:{
        display:"flex",
        "@media (max-width:768px)":{
            display:"block",
        }
    },
    cardBodyPremium: {
        ...font,
        ...commonStyles,
        width:"100%",
        maxWidth: "222px",
        height: "20px",
        marginTop: "15px",
        marginLeft: "40px",
        color: "rgba(29, 37, 43, 1)",

        "@media (max-width:768px)":{
            marginLeft:"30px",
            marginTop:"45px",
            maxWidth:"246px",
            heigth:"20px",
            lineHeight:"19.8px"
        }
    },
    cardBodyPremiumAuto: {
        ...font,
        ...commonStyles,
        width: "100%",
        // maxWidth: "auto",
        // height: "20px",
        marginTop: "15px",
        marginLeft: "11px",
        color: "rgba(13, 171, 34, 1)",
        "@media (max-width:768px)": {
            maxWidth:"99px",
            height:"20px",
            marginLeft:"30px",
            marginTop:"10px",
            lineHeight:"19.8px",
        }
    },
    cardBodyDueDate: {
        ...font,
        ...commonStyles,
        width:"100%",
        maxWidth: "186px",
        height: "20px",
        marginTop: "15px",
        marginLeft: "40px",
        "@media (max-width:768px)":{
            marginLeft:"30px",
            marginTop:"12px",
            width:"230px",
            heigth:"52px",
            lineHeight:"26px"
        }
    },
    cardBodyDay: {
        ...font,
        ...commonStyles,
        width:"100%",
        maxWidth: "72px",
        height: "20px",
        marginTop: "15px",
        // marginLeft: "9.55px",
        color: "rgba(217, 77, 46, 1)",
        "@media (max-width:768px)":{
            marginLeft:"-10px",
            marginTop:"15px",
            maxWidth:"72px",
            heigth:"52px",
            lineHeight:"19.8px"
        }
    },
    cardBodyInsure: {
        ...font,
        ...commonStyles,
        width:"100%",
        maxWidth: "auto",
        height: "20px",
        marginTop: "15px",
        marginLeft: "40px",
        "@media (max-width:768px)":{
            marginLeft:"30px",
            marginTop:"15px",
            width:"250px",
            heigth:"20px",
            lineHeight:"19.8px"
        }
    },
    button:{
        width:"100%",
        maxwidth:"638px",
        display:"flex",
        justifyContent:"space-between",
        "@media (max-width:768px)":{
            gap:"60px",
        }

    },
    cardBottomButton: {
        ...font,
        width:"100%",
        maxWidth: "155px",
        height: "40px",
        marginTop: "25.54px",
        marginLeft: "39.03px",
        padding: "16px 12px",
        borderRadius: "40px",
        backgroundColor: "rgba(63, 63, 63, 1)",
        boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
        textTransform: "none",
        "@media (max-width:768px)":{
            marginLeft:"30px",
            marginTop:"35.54px",
            width:"155px",
            heigth:"40px",
            lineHeight:"19.8px"
        }
    },

    ellipsisButton:{
        height:"25.7px",
        marginTop:"25.7px ",
        marginRight:"29px",
        "@media (max-width:768px)":{
           img:{ 
            // marginLeft:"60px",
            marginTop:"25px",
            width:"40px",
            heigth:"40px",
            lineHeight:"19.8px",}
        }
    }

};

export default PolicyStyles;
