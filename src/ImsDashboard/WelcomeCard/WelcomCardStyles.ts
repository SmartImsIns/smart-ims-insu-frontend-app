
export const WelcomeCardStyles = {
    welcomeCardContainer: {
        paddingLeft: "30px",
        paddingRight: "30px",
        marginTop: "60px",
        "@media (max-width: 599px)": {
            paddingLeft: "20px",
            paddingRight: "20px",
            marginTop: "40px",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
            marginTop: "50px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            paddingLeft: "30px",
            paddingRight: "30px",
        },
    },
    welcomeCardStyles: {
        height: "100px",
        flexShrink: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "22px",
        backgroundImage: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
        filter: 'drop-shadow(20px 20px 57px rgba(0, 0, 0, 0.08))',
        paddingRight: "89.78px",
        paddingLeft: "35.08px",
        borderRadius: "10px",
        "@media (max-width: 599px)": {
            height: "258px",
            paddingRight: "38px",
            paddingLeft: "35.08px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
        },
        "@media(min-width: 600px) and (max-width: 880px)": {
            paddingLeft: "25px",
            paddingRight: "50px",
        },
    },
    startIconText: {
        paddingLeft: "20.19px"
    },
    paymentIconText: {
        paddingLeft: "16.36px"
    },
    roadSideIconText: {
        paddingLeft: "16.36px"
    },
    learnIconText: {
        paddingLeft: "13.19px"
    }
}