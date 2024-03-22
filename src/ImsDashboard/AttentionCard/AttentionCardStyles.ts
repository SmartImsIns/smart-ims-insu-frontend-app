export const AttentionCardStyles = {
    Container: {
        marginTop: "40.23px",
        marginLeft: "30px",
        marginRight: "30px",
        "@media (max-width: 599px)": {
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "20px",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            marginLeft: "25px",
            marginRight: "25px",
            marginTop: "30px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            marginLeft: "30px",
            marginRight: "30px",
        },
    },
    AttentionCardStyles: {
        height: "118.988px",
        flexShrink: 0,
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "22px",
        paddingRight: "42px",
        paddingLeft: "23.63px",
        border: "1px solid #C9E1EC",
        borderRadius: "10px",
        borderShadow: "none",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0)",
        "@media (max-width:599px)": {
            paddingRight: "38px",
            height: "270px",
            flexDirection: "column",
            padding: "20px",
            gap: "46px"
        },
        "@media (min-width:600px) and (max-width:799px)": {
            paddingRight: "38px",
            flexDirection: "column",
            padding: "15px",
        },
        "@media (min-width:800px) and (max-width:1024px)": {
            paddingRight: "38px",
            padding: "15px",
        },
        "@media (min-width:390px) and (max-width:599px)": {
            gap: "20px",
            height: "215px"
        }

    },
    AttentionsCardBoxStyle: {
        display: "flex",
        alignItems: "center",
        "@media (max-width:599px)": {
            alignItems: "flex-start",
        },
    },
    HeadStyle: {
        overflow: "hidden",
        color: "#1D252B",
        fontSize: "18px",
        fontFamily: "Noto Sans",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "20px",
        textOverflow: 'ellipsis',
        "@media (max-width:599px)": {
            fontWeight: "400",
            color: '#1D252B',
            fontFamily: 'Noto Sans',
            fontSize: '16px',
            fontStyle: 'normal',
            lineHeight: '24px',
        },
        "@media (min-width:600px) and (max-width:1024px)": {
            maxWidth: "500px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },
        "@media (min-width: 1025px) and (max-width: 1366px)": {
            maxWidth: "900px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",

        },
    },
    AttentionsCardTextStyle: {
        display: "flex",
        flexDirection: "column",
        gap: "17.5px",
        paddingLeft: "25.41px",
        paddingRight: "20px",
        "@media (max-width:599px)": {
            gap: "24px",
            flexWrap: "wrap",
        },
        "@media (min-width:600px) and (max-width:1024px)": {
            gap: "15x",
            flexWrap: "wrap",
        },
    },
    ContentStyle: {
        color: "#1D252B",
        fontSize: "18px",
        fontStyle: "normal",
        fontFamily: "Noto Sans",
        fontWeight: "300",
        lineHeight: "20px",
        "@media(max-width:599px)": {
            fontSize: "14px",
            lineHeight: "24px",
            color: "#1D252B",
            fontFamily: '"Noto Sans"',
            fontStyle: 'normal',
            fontWeight: 300,
        },
        "@media (min-width: 1025px) and (max-width: 1366px)": {
            maxWidth: "900px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",

        },
    },
    ActionButton: {
        "@media (max-width:599px)": {
            marginTop: "10px",
        },
        "@media (min-width:600px) and (max-width:1024px)": {
            marginLeft: "auto"
        },

    },
    renewNowButton: {
        textTransform: "none",
        display: "flex",
        width: "fit-content",
        minWidth: "155px",
        height: "40px",
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
        fontStyle: "normal",
        lineHeight: "14px",
        letterSpacing: "0.5px",
        marginLeft: "auto",
        fontSize: "14px"
    },

}