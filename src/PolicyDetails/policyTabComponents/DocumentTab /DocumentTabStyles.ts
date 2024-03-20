import { SxProps } from "@mui/system";
import { CSSProperties } from "react";

export interface DocumentTabStyles {
    container: SxProps,
    documentContainer: SxProps,
    imageContainer: SxProps,
    imageStyle?: CSSProperties,
    card: SxProps,
    buttonGroup: SxProps,
    walletButton: SxProps;
    downloadButton: SxProps;
}

const documentTabStyles = {

    container: {
        marginTop: "20.5px",
        height: "423px",
        border: "1px solid  #C9E1EC",
        padding: "22px 0px 0px 31px",
        background: "linear-gradient(108deg, #FFF 80.85%, #F8F9FF 145.84%)",
        display: "flex",
        gap: "15px",
    },

    documentContainer: {
        height: "370px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #C9E1EC",
        maxWidth: "327px",
        borderRadius: "10px",
        "@media (max-width: 599px)": {
            marginTop: "20px"
        },
        "@media (min-width: 600px) and (max-width: 1024px)": {
            fontSize: "16px",
        },
        "@media (min-width: 1024px) and (max-width: 1920px)": {
            fontSize: "18px",
        },
    },
    imageContainer: {
        height: "265px",
        backgroundColor: "#000",
        borderRadius: "10px 10px 0 0",
    },
    imageStyle: {
        height: "265px",
        width: "327px",
        backgroundColor: "#000",
        opacity: 0.7,
        borderRadius: "10px 10px 0 0",
    },
    card: {
        display: "flex",
        padding: "21px 27px 20px 22px ",
        flexDirection: "column",
        borderRadius: "0px 0px 10px 10px",
        filter: "drop-shadow(0px -3px 4px rgba(0, 0, 0, 0.31))",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.01)",
        height: "105px"
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "16px",
    },
    walletButton: {
        gap: "4px",
        padding: 0,
    },
    downloadButton: {
        gap: "4px",
        padding: 0,
    },
};

export default documentTabStyles;