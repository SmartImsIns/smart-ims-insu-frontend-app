import { SxProps } from '@mui/system';

export const policyBreadCrumbStyle: SxProps = {
    display: 'inline-flex',
    alignItems: "center",
    gap: '10px',
    cursor: 'pointer',
    "@media (max-width: 599px)": {
        paddingLeft: "20px",
        marginTop: "20px",
    },
    "@media (min-width: 600px) and (max-width: 1024px)": {
        paddingLeft: "25px",
        marginTop: "30px",
    },
    "@media (min-width: 1024px) and (max-width: 1920px)": {
        paddingLeft: "30px",
        paddingRight: "30px",
        marginTop: "40.23px",
    },
};

export const breadcrumbsText: SxProps = {
    color: '#1D252B',
    fontFamily: 'Noto Sans',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '110%', /* 19.8px */
    "@media (max-width: 599px)": {
        fontSize: '14px',
    },
    "@media (min-width: 600px) and (max-width: 1024px)": {
        fontSize: '16px',
    },
    "@media (min-width: 1024px) and (max-width: 1920px)": {
        fontSize: '18px',
    },

};


export default { policyBreadCrumbStyle, breadcrumbsText };

