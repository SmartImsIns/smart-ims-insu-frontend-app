export const MyClaimCardStyles = {
    Container: {
        "@media (max-width: 599px)": {
            paddingLeft: "20px",
            paddingRight: "20px",
            marginTop: "40px",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
            marginTop: "30px",
        },
        "@media (min-width: 1024px)": {
            paddingLeft: "30px",
            paddingRight: "30px",
            marginTop: "40px",
        },
    },
    imgStyle: {
        paddingTop: "5px",
        height: "39px",
    },
    container1: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    myClaimsCardWithIconStyles: {
        "@media (min-width:360px) and (max-width:1024px)": {
            width: "100%",
        },
    },
    trackYourClaimButton: {
        display: "block",
        "@media (max-width:599px)": {
            display: "none",
        },
        "@media (min-width: 600px) and (max-width: 1070px)": {
            marginLeft: "auto",
            paddingTop: "5px"
        }
    },
    trackYourClaim: {
        fontFamily: "Lato",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "16px",
        letterSpacing: "0px",
        textAlign: "left",
        color: "rgba(44, 108, 231, 1)",
    },
    myClaimsCardButtonStyles: {
        textTransform: "none",
        display: "flex",
        width: "fit-content",
        minWidth: "155px",
        height: 40,
        padding: "16px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        borderRadius: "40px",
        backgroundColor: "#3F3F3F",
        boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
        color: "var(--Default-White, #FFF)",
        fontWeight: 400,
        fontFamily: "Lato",
        lineHeight: "14px",
        letterSpacing: 0.5,
        marginLeft: "auto",
        fontSize: "14px"
    },
    myClaimsCardStyles: {
        flexShrink: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "22px",
        padding: "14.56px 42px 13.34px 15px",
        border: "1px solid #C9E1EC",
        flexWrap: "wrap",
        justifyContent: "space-between",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0)",
        "@media (max-width:599px)": {
            padding: "15px 30px 28px 15px",
            justifyContent: "space-between",
            marginTop: "15px",
        },
        "@media (min-width: 600px) and (max-width: 1023px)": {
            paddingRight: "15px",
        },
    },
    trackYourClaimText: {
        display: "none",
        marginLeft: "172px",
        minWidth: "118px",
        "@media (max-width:599px)": {
            display: "flex",
            alignItem: "center",
            justifyContent: "flex-end",
            marginLeft: "auto",
            paddingTop: "24px"
        }
    },
    box: {
        display: "flex",
        gap: "5px",
        alignItems: "center",
        height: "20px",
        cursor: "pointer",
        "@media (min-width:360px) and (max-width:599px)": {
            height: "15px"
        },
    },
    headTypo: {
        fontFamily: "Noto Sans",
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "110%",
        fontStyle: "normal",
        color: "#000",
        "@media (min-width:360px) and (max-width:599px)": {
            fontSize: "14px",
        },

    },
    arrowImgBox: {
        img: {
            width: "10.5px",
            marginBottom: "2px",
            "@media (min-width:360px) and (max-width:599px)": {
                width: "10.5px",
                marginBottom: "2px",
            },
            "@media (min-width:600px) and (max-width:1023px)": {
                width: "10.5px",
                marginBottom: "1px",
            },
        },
    },
}