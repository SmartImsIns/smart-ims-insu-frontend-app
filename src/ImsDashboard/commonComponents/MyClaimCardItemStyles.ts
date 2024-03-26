export const MyClaimCardItemStyles = {
    claimsCardWrapperStyles: {
        display: "flex",
        gap: "22px",
        padding: "15px",
        alignItems: "center",
        "@media (max-width:599px)": {
            padding: "15px",
            minWidth: "114px",
            maxHeight: "35.35px"
        }
    },
    claimsData: {
        gap: "12px",
        display: "flex",
        flexDirection: "column",
        "@media (max-width:599px)": {
            gap: "8.02px",
        }
    },
    HeadStyle: {
        overflow: "hidden",
        color: "#1D252B",
        fontSize: "18px",
        fontFamily: "Noto Sans",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "19.8px",
        textOverflow: 'ellipsis',
        "@media (max-width:599px)": {
            fontWeight: "400",
            maxWidth: "500px",
            overflow: 'hidden',
            color: '#1D252B',
            textOverflow: 'ellipsis',
            fontFamily: 'Noto Sans',
            fontSize: '14px',
            fontStyle: 'normal',
            lineHeight: '12px',
        },
        "@media (min-width:600px) and (max-width:1024px)": {
            maxWidth: "200px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },
        "@media (min-width: 1025px) and (max-width: 1366px)": {
            maxWidth: "500px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },
    },
    ContentStyle: {
        color: "#1D252B",
        fontSize: "18px",
        fontStyle: "normal",
        fontFamily: "Noto Sans",
        fontWeight: "300",
        lineHeight: "19.8px",
        "@media(max-width:599px)": {
            fontSize: "14px",
            lineHeight: "12px",
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontFamily: '"Noto Sans"',
            fontStyle: 'normal',
            fontWeight: 300,
            maxWidth: "200px",
            whiteSpace: "nowrap",
        },
        "@media (min-width: 1025px) and (max-width: 1366px)": {
            maxWidth: "500px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },
    },
}
