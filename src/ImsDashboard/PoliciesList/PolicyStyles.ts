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
        marginRight: "auto",
        fontFamily: "Playfair Display",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "22px",
        letterSpacing: "0em",
        textAlign: "left",
        color: "rgba(56, 61, 78, 1)",
        "@media (min-width:360px) and (max-width:599px)":{
            marginLeft:"20px",
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            marginLeft:"32px",
        }
    },
    AllCards:{
        display:"flex",
        width:"100%",
        // maxWidth:"1306px",
        // margin:"0px auto 0px 30px",
        // gap:"30px",

        "@media (min-width:360px) and (max-width:599px)":{
            width:"100%",
            maxWidth:"320px",
            margin:"0px auto",
            gap:"20px",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            width: "100%",
            maxWidth: "960px",
            margin: "0px auto",
            gap: "30px",
        }
    },
    oneCard: {
        width:"100%",
        maxWidth: "46.6921%",
        // maxWidth:"638px",
        height: "367.47px",
        marginTop: "21.95px !important",
        marginLeft: "30px",
        boxShadow: "20px 20px 57px 0px rgba(0, 0, 0, 0.08)",

        "@media (min-width:360px) and (max-width:599px)":{
            width:"100%",
            maxWidth:"320px",
            margin:"auto",
            height:"584.42px"
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            width:"100%",
            maxWidth:"541px",
            // margin:"auto",
            height:"540.42px",
            margin: "0px auto",
        }

    },
    cardIcon: {
        width:"100%",
        maxWidth: "61.74px",
        height: "52.81px",
        marginTop: "40.03px",
        marginLeft: "40.02px",

        "@media (min-width:360px) and (max-width:599px)":{
            marginLeft:"30px",
            marginTop:"45.61px",
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            marginLeft:"30px",
            marginTop:"45.61px",
        }
    },
    cardTopLeft: {
        display: "flex",
        gap:"160.5px",
        "@media (min-width:360px) and (max-width:599px)":{
            display:"block",
            gap:"20px"
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            display:"block",
            gap:"40px"
        },
        "@media (min-width: 1025px) and (max-width: 1366px)": {
            display: "flex", 
            gap: "80px", 
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
        "@media (min-width:360px) and (max-width:599px)":{
            marginLeft:"28.26px",
            marginTop:"45.61px",
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            marginLeft:"20.26px",
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
        "@media (min-width:360px) and (max-width:599px)":{
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
        "@media (min-width:360px) and (max-width:599px)":{
            marginLeft:"-57px",
            marginTop:"30.19px",
            height:"19.6px",
            width:"auto",
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            marginLeft:"-57px",
            marginTop:"40.19px",
            height:"19.6px",
            width:"auto",
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
        "@media (min-width:360px) and (max-width:599px)":{
            marginLeft:"-57px",
            width:"auto",
            heigth:"21.56px"
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            marginLeft:"-57px",
            width:"auto",
            heigth:"21.56px",
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

        "@media (min-width:360px) and (max-width:599px)":{
            marginLeft:"30px",
            marginTop:"107px",
            width:"230px",
            height:"52px",
            lineHeight:"26px"
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            marginLeft: "40px",
            marginTop: "90px",
            width: "auto",
            height: "auto",
            lineHeight: "26px",
        }

    },

    autoDeduct:{
        display:"flex",
        "@media (min-width:360px) and (max-width:599px)":{
            display:"block",
        },
        "@media (min-width:600px) and (max-width:1024px)":{
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

        "@media (min-width:360px) and (max-width:599px)":{
            marginLeft:"30px",
            marginTop:"15px",
            maxWidth:"252px",
            heigth:"20px",
            lineHeight:"19.8px"
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            marginLeft:"40px",
            marginTop:"10px",
            width:"100%",
            maxWidth:"252px",
        }
    },
    cardBodyPremiumAuto: {
        ...font,
        ...commonStyles,
        width: "100%",
        // maxWidth: "auto",
        // height: "20px",
        marginTop: "20px",
        marginLeft: "11px",
        color: "rgba(13, 171, 34, 1)",
        "@media (min-width:360px) and (max-width:599px)":{
            maxWidth:"99px",
            height:"20px",
            marginLeft:"30px",
            marginTop:"12px",
            lineHeight:"19.8px",
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            marginLeft:"40px",
            marginTop:"12px",
            maxWidth:"252px",
            heigth:"20px",
            lineHeight:"19.8px"
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
        "@media (min-width:360px) and (max-width:599px)":{
            marginLeft:"30px",
            marginTop:"12px",
            width:"230px",
            heigth:"52px",
            lineHeight:"26px"
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            marginLeft:"40px",
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
        "@media (min-width:360px) and (max-width:599px)":{
            marginLeft:"15px",
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
        "@media (min-width:360px) and (max-width:599px)":{
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
        "@media (min-width:360px) and (max-width:599px)":{
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
        "@media (min-width:360px) and (max-width:599px)":{
            marginLeft:"30px",
            marginTop:"45.54px",
            width:"155px",
            heigth:"40px",
            lineHeight:"19.8px"
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            marginLeft:"40px",
            marginTop:"45.54px",
            width:"155px",
            heigth:"40px",
            lineHeight:"19.8px"
        }
    },

    ellipsisButton:{
        height:"25.7px",
        marginTop:"25.7px ",
        marginRight:"29px",
        "@media (min-width:360px) and (max-width:599px)":{
           img:{ 
            // marginLeft:"60px",
            marginTop:"40px",
            width:"40px",
            height:"40px",
            lineHeight:"19.8px",}
        },
        "@media (min-width:600px) and (max-width:1024px)":{
            img:{ 
             // marginLeft:"60px",
             marginTop:"50px",
             width:"40px",
             height:"40px",
             lineHeight:"19.8px",}
         }
    }

};

export default PolicyStyles;
