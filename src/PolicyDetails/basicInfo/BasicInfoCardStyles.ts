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
    "@media (max-width: 599px)": {

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
    },
    imageBox: {
        display: "flex",
        gap: "6.5px",
        maxHeight: "18px",
        marginTop: "10.79px",
        alignItems: "center"
    },
    head: {
        fontWeight: "300",
        fontFamily: "Noto sans",
        color: "#1D252B",
        display: "flex",
        alignItems: "center",
        fontStyle: "normal",
        lineHeight: "110%",
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
    },
    BasicInfoQuickActionContainer: {
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.09) inset',
        color: '#1D252B',
        background: "#FCFEFF",
        borderRadius: '0 10px 10px 0',
        "@media (max-width: 599px)": {
            borderRadius: '0 0 10px 10px',
        },
        "@media (min-width: 605px) and (max-width: 1364px)": {
            padding: "13px 15px 9.5px 15px",
        },
        "@media (min-width: 1365px) and (max-width: 1920px)": {
            padding: "26px 30px 19px 30px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
        },
    },
    BasicInfoQuickActionCard: {

        "@media (max-width: 599px)": {
            display: "flex",

        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
            marginTop: "30px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridAutoRows: "minmax(10px, auto)",
            gap: "10px",
            columnGap: '20px',
        },

    },
};
