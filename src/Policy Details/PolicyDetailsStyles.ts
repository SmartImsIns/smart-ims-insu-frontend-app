const PolicyDetailsStyles = {
    policyContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '30px',
        paddingRight: '30px',
        marginTop: '40px',
        paddingBottom: '111px'
    },
    PolicyBreadCrumbStyle: {
        display: 'inline-flex',
        alignItems: "center",
        gap: '10px',
        cursor: 'pointer'
    },
    BreadcrumbsText: {
        color: '#1D252B',
        fontFamily: 'Noto Sans',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '110%', /* 19.8px */
    },
    BasicInfoCard: {
        marginTop: '43px',
        background: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
        height: '203px',
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #C9E1EC',
        borderRadius:'10px'
    },
    BasicInfoQuickActionContainer: {
        bgcolor: "#F3F5F6",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: "203px",
        color: '#1D252B',
        borderRadius:'0 10px 10px 0'
        
    },
    BasicInfoQuickActionCard: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "minmax(10px, auto)",
        gap: "10px",
        paddingLeft: '8px',
        paddingRight: '7px',
        marginBottom:'19px',
        columnGap: '33px'
    },
    PolicyTabsStyles: {
        marginTop: '64px',
    },
   
};

export default PolicyDetailsStyles;
