import { SxProps } from "@mui/system";

export interface BasicInfoCardStyles {
    container: SxProps,
    head: SxProps,
    content: SxProps,
    // imageStyle?: CSSProperties,
    box: SxProps,
    imageBox: SxProps,
    logoContainer: SxProps,
    statusText: SxProps,
}

const basicInfoCardStles = {
    container: {
        display: "flex"
    },
    "@media (max-width: 599px)": {

    },
    logoContainer: {
        "@media (max-width: 599px)": {
            marginLeft: "20px",
            marginTop: "21px",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            marginLeft: "25px",
            marginTop: "30px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            marginLeft: "30px",
            marginTop: "31px",
            maxWidth: "64.4px"
        },
    },
    imageBox: {
        display: "flex",
        gap: "6.5px",
        marginTop: "14.79px"
    },
    head: {
        fontWeight: "300",
        fontFamily: "Noto sans",
        color: "#1D252B",
        display: "flex",
        alignItems: "center",
        fontStyle: "normal",
        lineHeight: "110%", /* 19.8px */
        "@media (max-width: 599px)": {
            fontSize: "14px",
            // display: "flex",
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            fontSize: "16px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            fontSize: "18px",
        },
    },
    content: {
        fontWeight: "400",
        fontFamily: "Noto sans",
        color: "#1D252B",
        lineHeight: "110%",/* 22px */
        "@media (max-width: 599px)": {
            fontSize: "14px",
            paddingLeft: 0,
            paddingBottom: "10px"
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            fontSize: "17px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            fontSize: "20px",
        },
    },
    statusText: {
        color: "#56CF66",
        fontSize: "16px",
        fontWeight: 400,
        fontFamily: "Noto Sans",
    },
    box: {
        marginTop: "27px",
        paddingBottom: "30px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",

        "@media (max-width: 599px)": {
            display: "none"
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {

        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {

        },

    },
};

export default basicInfoCardStles
