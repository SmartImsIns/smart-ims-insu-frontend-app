export const BasicInfoCardStyles = {
    BasicInfoCard: {
        marginTop: '43px',
        background: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
        height: '203px',
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #C9E1EC',
        borderRadius: '10px',
        "@media (max-width: 599px)": {
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "25px",
            flexDirection: "column"
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            marginLeft: "25px",
            marginRight: "25px",
            marginTop: "30px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "44px",
        },
    },
    container: {
        display: "flex",
    },
    logoContainer: {
        "@media (max-width: 599px)": {
            marginLeft: "20px",
            marginTop: "21px",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            marginLeft: "25px",
            marginTop: "26px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            marginLeft: "30px",
            marginTop: "30px",
            maxWidth: "64.44px",
        },
        img: {
            width: "64.449px"
        }
    },
    imageBox: {
        display: "flex",
        gap: "6.5px",
        maxHeight: "18px",
        marginTop: "10.79px",
        alignItems: "center",
        img: {
            maxWidth: "10.5px"
        }
    },
    head: {
        fontWeight: "300",
        fontFamily: "Noto sans",
        color: "#1D252B",
        display: "flex",
        alignItems: "center",
        fontStyle: "normal",
        lineHeight: "110%",
        whiteSpace: "pre",
        "@media (max-width: 599px)": {
            fontSize: "14px",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            fontSize: "16px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            fontSize: "18px",
        },
    },
    content: {
        fontWeight: "400",
        fontFamily: "Noto sans",
        color: "#1D252B",
        lineHeight: "110%",
        whiteSpace: "pre",
        "@media (max-width: 599px)": {
            fontSize: "14px",
            paddingLeft: 0,
            paddingBottom: "10px"
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            fontSize: "17px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            fontSize: "20px",
        },
    },
    statusText: {
        color: "#56CF66",
        fontSize: "16px",
        fontWeight: 400,
        fontFamily: "Noto Sans",
    },
    box: {
        paddingBottom: "30px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        "@media (max-width: 599px)": {
            display: "none"
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            gap: "55px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            gap: "101px",
        },
    },
    quickStyle: {
        color: "#1D252B",
        fontFamily: "Noto Sans",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 300,
        lineHeight: "110%",
        marginBottom: "13px",
        "@media (max-width: 599px)": {
            display: "none",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {},
        "@media (min-width: 1024px) and (max-width: 1920px)": {},
    },
    container1: {
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 599px)": {
            marginLeft: "20.55px",
            marginTop: "20px",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
            marginTop: "30px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            margin: "27px 0px 42px 67.65px",
        },
    },
    container2: {
        display: "flex",
        gap: "10px",
        flexDirection: "column",
    },
    container3: {
        display: "flex",
        gap: "15px"
    },
    container4: {
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        "@media (max-width: 599px)": {
            gap: "15px",
        }
    },
    container5: {
        display: "flex",
        gap: "15px",
        "@media (max-width: 599px)": {
            flexDirection: "column",
            gap: "0px",
        },
    },
    container6: {
        "@media (max-width: 599px)": {
            display: "none",
        },
    }
};