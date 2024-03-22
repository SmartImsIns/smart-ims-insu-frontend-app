export const MyClaimCardItemStyles = {
    claimsCardWrapperStyles: {
        display: "flex",
        gap: "22px",
        padding: "15px",
        alignItems: "center",
        "@media (max-width:599px)": {
            marginRight: "0px",
            minWidth: "114px",
        }
    },
    claimsData: {
        gap: "12px",
        display: "flex",
        flexDirection: "column",
        "@media (max-width:599px)": {
            gap: "8.04px",
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
            fontSize: '16px',
            fontStyle: 'normal',
            lineHeight: '24px',
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
            lineHeight: "18px",
            color: "#8F939B",
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
