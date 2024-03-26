export const ViewComponentStyles = {
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
        },
    }
}