export const MyClaimCardStyles = {

    box: {

        display: "flex",
        gap: "5px",
        alignItems: "center",
        height: "15px",
        padding: "16px 12px 16px 12px",
    },
    headTypo: {

        fontFamily: "Noto Sans",
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "19.8px",
        textAlign: "left",
        cursor: "pointer",
        "@media (min-width:360px) and (max-width:599px)": {
            fontSize: "14px",
            maxWidth: "290px",
            marginTop: "3px",
        },

    },
    arrowImgBox: {
        img: {
            width: "15px",
            marginBottom: "2px",
        },
    }
}