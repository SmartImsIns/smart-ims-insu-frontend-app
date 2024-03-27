const documentTabStyles = {

    container: {
        marginTop: "20.5px",
        marginBottom: "10px",
        border: "1px solid  #C9E1EC",
        padding: "22px 0px 31px 31px",
        background: "linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)",
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
    },

    documentContainer: {
        height: "370px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #C9E1EC",
        maxWidth: "327px",
        borderRadius: "10px",
        "@media (max-width: 789px)": {
            marginTop: "20px",
        },
    },
    imageContainer: {
        height: "265px",
        backgroundColor: "#000",
        borderRadius: "9px 9px 0 0",
    },
    imageStyle: {
        height: "265px",
        width: "327px",
        backgroundColor: "#000",
        opacity: 0.7,
        borderRadius: "9px 9px 0 0",
    },
    card: {
        display: "flex",
        padding: "21px 27px 22px 20px ",
        flexDirection: "column",
        borderRadius: "0px 0px 9px 9px",
        filter: "drop-shadow(0px -3px 4px rgba(0, 0, 0, 0.31))",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.01)",
        height: "105px"
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "16px",
    },
    walletButton: {
        gap: "4px",
        padding: 0,
    },
    downloadButton: {
        gap: "4px",
        padding: 0,
    },
    mobileBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "33px",
        marginRight: "33px",
        marginBottom: "60.68px",
    },
    text: {
        color: '#000',
        fontFamily: 'Noto Sans',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '110%',
        "@media (max-width: 789px)": {
            marginTop: "20px",
            fontSize: '14px',
        },
    },
    insuranceText: {
        color: '#1D252B',
        fontFamily: 'Noto Sans',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '110%',
        "@media (max-width: 789px)": {
            marginTop: "20px",
            fontSize: '14px',
        },
    }
};

export default documentTabStyles;