const ClaimsTabStyles = {
    container: {
        paddingTop: "44px",
        paddingBottom: "69px",
        display: "flex",
        flexDirection: "column",
        gap: "49px",
    },
    claimContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFF",
        border: "1px solid #C9E1EC",
        borderRadius: "10px",
        padding: "15px 29px 15px 26.84px",
        flexWrap: "wrap",
        flexShrink: 0,
        flexDirection: "row",
        "@media (max-width:599px)": {
            padding: "30px",
        },
        "@media (min-width: 600px) and (max-width: 1023px)": {
            paddingRight: "15px",
        },
    },
    box: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "@media (max-width:599px)": {
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
        },
    },
    box1: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "15px",
        minWidth: "114px",
        "@media (max-width:599px)": {
            gap: "8.03px",
            padding: "10px",
            justifyContent: "space-between",
        },
    },
    activeClaimsContainer: {
        display: "flex",
        flexDirection: "column",
    },
    titleText: {
        color: "#383D4E",
        fontFamily: "Playfair Display",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "110%",
    },
    linkStyle: {
        textDecoration: "none",
        "& :hover": {
            textDecoration: "underline",
        },
    }
}
export default ClaimsTabStyles