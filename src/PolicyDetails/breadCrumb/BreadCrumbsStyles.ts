export const BreadCrumbStyles = {
    container: {
        display: 'flex',
        gap: '10px',
        marginTop: "40.23px",
        marginLeft: "30px",
        "@media (max-width: 799px)": {
            marginLeft: "20px",
            marginTop: "20px",
        },
    },
    box: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
    },
    breadcrumbsText: {
        color: '#1D252B',
        fontFamily: 'Noto Sans',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '110%',
        whiteSpace: "pre",
        "@media (max-width: 800px)": {
            fontSize: '14px',
        },
        "@media (max-width: 800px) and (max-width: 1920px)": {
            fontSize: '18px',
        },
    }
}
