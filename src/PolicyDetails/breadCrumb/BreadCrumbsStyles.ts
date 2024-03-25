export const BreadCrumbStyles = {
    container: {
        display: 'flex',
        gap: '10px',
        marginTop: "40.23px",
        marginLeft: "30px",
        "@media (max-width: 599px)": {
            marginLeft: "20px",
            marginTop: "20px",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            marginLeft: "25px",
            marginTop: "30px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            marginLeft: "30px",

        },
    },
    breadcrumbsText: {
        color: '#1D252B',
        fontFamily: 'Noto Sans',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '110%',
        whiteSpace: "pre",
        "@media (max-width: 599px)": {
            fontSize: '14px',
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            fontSize: '16px',
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            fontSize: '18px',
        },

    }
}
