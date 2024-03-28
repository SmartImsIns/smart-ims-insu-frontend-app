export const BasicInfoQuickStyles = {
    BasicInfoQuickActionContainer: {
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.09) inset',
        color: '#1D252B',
        background: "#F3F5F6",
        borderRadius: '0 9px 9px 0',
        padding: "26px 30px 19px 30px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        "@media (max-width: 399px)": {
            borderRadius: '0 0 10px 10px',
            padding: "0px"
        },
        "@media (min-width: 399px) and (max-width: 799px)": {
            borderRadius: '0 0 9px 9px',
            padding: "0px"
        },
        "@media (min-width: 800px) and (max-width: 1300px)": {
            borderRadius: '0px 0px 9px 9px',
            padding: "15px 20px",
        },
        "@media (min-width: 1300px) and (max-width: 1920px)": {
            padding: "26px 30px 19px 30px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
        },
    },
    BasicInfoQuickActionCard: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "minmax(10px, auto)",
        gap: "10px",
        columnGap: '20px',
        "@media (max-width: 599px)": {
            display: "flex",
        },
        "@media (min-width: 799px) and (max-width: 1300px)": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        "@media (min-width: 1300px) and (max-width: 1920px)": {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridAutoRows: "minmax(10px, auto)",
            gap: "10px",
            columnGap: '20px',
        },
    },
    buttonStyle: {
        position: "relative",
        textTransform: "none",
        display: "flex",
        height: "35px",
        width: "fit-content",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        backgroundColor: "#FFF",
        padding: "8.5px 15px",
        minWidth: "151px",
        flexShrink: 0,
        color: "#1D252B",
        fontSize: "16px",
        fontFamily: "Noto Sans",
        lineHeight: "110%",
        fontWeight: 300,
        fontStyle: "normal",
        '&:hover': {
            backgroundColor: "#FFF",
        }
    },
    container: {
        display: "flex",
        alignItems: "center",
        marginTop: "15px",
        marginBottom: "15px",
        marginLeft: "20px",
        marginRight: "20px",
        justifyContent: "space-between",
    },
    buttonsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
    }
}