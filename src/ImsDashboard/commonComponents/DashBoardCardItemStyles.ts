export const DashBoardCardItemStyles = {
    DashBoardCardItemStyles: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "@media (max-width: 599px)": {
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            height: "68px",
            img: {
                height: "40px",
            },
        },
        "@media(min-width: 600px) and (max-width: 800px)": {
            maxWidth: "100px",
        },
    },
    DashBoardCardText: {
        marginLeft: "20.19px",
        color: "#1D252B",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 300,
        lineHeight: "22px",
        fontFamily: "Noto Sans",
        "@media (max-width: 599px)": {
            fontSize: "14px",
            paddingLeft: "10px",
            marginLeft: "0px",
            textAlign: "center",
            minWidth: "120px",
            maxHeight: "36px",
        },
        "@media(min-width: 600px) and (max-width: 1023px)": {
            fontSize: "16px",
            marginLeft: "10px",
            maxWidth: "140px",
        },
    },

}