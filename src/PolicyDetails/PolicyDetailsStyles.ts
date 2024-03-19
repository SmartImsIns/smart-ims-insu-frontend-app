const PolicyDetailsStyles = {
    policyContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '60px',

    },
    BasicInfoCard: {
        marginTop: '43px',
        background: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
        height: '203px',
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #C9E1EC',
        borderRadius: '10px',
        "@media (max-width: 599px)": {
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "25px",
            flexDirection: "column"
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            marginLeft: "25px",
            marginRight: "25px",
            marginTop: "30px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "44px",
        },
    },
    BasicInfoQuickActionContainer: {
        bgcolor: "#F3F5F6",
        color: '#1D252B',
        borderRadius: '0 10px 10px 0',
        "@media (max-width: 599px)": {
            borderRadius: '0 0 10px 10px',
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            display: "none"
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            flexDirection: 'column',
            justifyContent: 'space-around',
            display: 'flex',
        },

    },
    BasicInfoQuickActionCard: {


        "@media (max-width: 599px)": {
            display: "flex",

        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
            marginTop: "30px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridAutoRows: "minmax(10px, auto)",
            gap: "10px",
            paddingLeft: '8px',
            paddingRight: '7px',
            marginBottom: '19px',
            columnGap: '33px',
        },

    },
    PolicyTabsStyles: {
        marginTop: '64px',
        "@media (max-width: 599px)": {
            paddingLeft: "20px",
            paddingRight: "20px",
            marginTop: "20px",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
            marginTop: "30px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "44px",
        },
    },
    PolicyTabsComponentStyles: {
        marginTop: '64.5px',
        height: "611px",
        border: "1px solid  #C9E1EC",
        background: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
    },
    PolicyDocumentTabStyles: {
        marginTop: '20.5px',
        height: "423px",

        // fill: '#FFF',
        // strokeWidth: '1px',
        // stroke: '#C9E1EC',
        background: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
    },

};

export default PolicyDetailsStyles;
