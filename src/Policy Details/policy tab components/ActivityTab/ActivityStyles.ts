const ActivityStyles ={
    container:{
        width: "auto",
        height: "642px",
        padding:"0px 28px",
        // marginTop:"30px",
        // position:"relative",
    },

    oneCard:{
        height:"122px",
        width:"100%",
        display:"flex",
        gap:"34.06px",
        border:"0px",
        boxShadow: "0",
        borderBottom:"1px solid rgba(201, 225, 236, 1)",
        
        "&:hover": {
            boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.09) inset",
            background: "rgba(243, 245, 246, 1)",
            padding:"0px 28px 0px 28px",
            marginLeft:"-28px",
        },
        "&:not(:last-child)" :{
            borderBottom: "1px solid rgba(201, 225, 236, 1)",
          }
    },
    logo:{
        width: "37.94px",
        height: "0px",
        marginTop: "20px",
        marginLeft: "30px",
    },
    cardContent:{
        marginTop:"23px",
        height:"auto",
        width:"auto",
    },
    heading:{
        width: "auto",
        height: "22px",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "22px",
        letterSpacing: "0em",
        textAlign: "left",
    },
    description:{
        width: "auto",
        height: "20px",
        marginTop: "6px",
        left: "132px",
        fontSize: "16px",
        fontWeight: "300",
        lineHeight: "20px",
        letterSpacing: "0em",
        textAlign: "left",
    },
    date:{
        width: "auto",
        height: "20px",
        marginTop: "7px",
        fontSize: "16px",
        fontWeight: "300",
        lineHeight: "20px",
        letterSpacing: "0em",
        textAlign: "left",
    },
    claimNumberClosureReason:{
        display:"flex",
    },
    closureReason:{
        width: "auto",
        height: "20px",
        marginTop: "12.5px",
        fontSize: "16px",
        fontWeight: "300",
        lineHeight: "20px",
        letterSpacing: "0em",
        textAlign: "left"
    },
    claimNumber:{
        width: "auto",
        height: "20px",
        marginTop: "12.5px",
        fontSize: "16px",
        fontWeight: "300",
        lineHeight: "20px",
        letterSpacing: "0em",
        textAlign: "left"
    },
    payoutAmount:{
        width: "auto",
        height: "20px",
        marginTop: "12.5px",
        fontSize: "16px",
        fontWeight: "300",
        lineHeight: "20px",
        letterSpacing: "0em",
        textAlign:"left",
    },
    line:{
        width: "868px",
        marginTop: "23px",
        border: "1px solid rgba(201, 225, 236, 1)",
    },
    hoveredImage1:{
        width:"40px"
    },
    images:{
        display:"flex",
        flexDirection:"row",
        alignItems:"Center",
        position: 'absolute',
        // left:"818px",
        left: "64.0549%",
        marginTop:"50px",
        cursor: "pointer",
        },
}
export default ActivityStyles;