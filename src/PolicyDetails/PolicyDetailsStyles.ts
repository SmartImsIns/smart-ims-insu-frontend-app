const PolicyDetailsStyles = {
    policyContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '30px',
        paddingRight: '30px',
        marginTop: '60px',
        paddingBottom: '111px'
    },
    BasicInfoCard: {
        marginTop: '43px',
        background: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
        height: '203px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #C9E1EC',
        borderRadius: '10px'
    },
    BasicInfoQuickActionContainer: {
        bgcolor: "#F3F5F6",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: "203px",
        color: '#1D252B',
        borderRadius: '0 10px 10px 0'

    },
    BasicInfoQuickActionCard: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "minmax(10px, auto)",
        gap: "10px",
        paddingLeft: '8px',
        paddingRight: '7px',
        marginBottom: '19px',
        columnGap: '33px'
    },
    PolicyTabsStyles: {
        marginTop: '64px',
    },
    PolicyTabsComponentStyles: {
        marginTop: '64.5px',
        height: "611px",
        fill: '#FFF',
        strokeWidth: '1px',
        stroke: '#C9E1EC',
        background: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
    },
    PolicyDocumentTabStyles: {
        marginTop: '20.5px',
        height: "423px",
        border: "1px solid  #C9E1EC",
        // fill: '#FFF',
        // strokeWidth: '1px',
        // stroke: '#C9E1EC',
        background: 'linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)',
    },

};

export default PolicyDetailsStyles;
