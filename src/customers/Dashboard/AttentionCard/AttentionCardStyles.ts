const AttentionCardStyle = {
  attentionsCardContainer: {
    padding: "0px 30px",
    "@media only screen and (max-width: 768px)": {
      padding: "0px 20px",
    },
  },
  heading: {
    color: "#383D4E",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Playfair Display",
    lineHeight: "110%",
  },
  attentionCard: {
    display: "grid",
    gridTemplateColumns: "1fr 15fr 1fr",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    borderRadius: "10px",
    marginTop: "22px",
    padding: "30px",
    border: "1px solid #C9E1EC",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    "@media only screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 0.5fr",
      gridTemplateAreas: `"image text"
                                "button button"`,
      img: {
        gridArea: "image",
      },
    },
  },
  attentionCardItem: {
    display: "grid",
    gap: "17.5px",
    "@media only screen and (max-width: 768px)": {
      gridArea: "text",
    },
  },
  attentionCardItemHeadingStyle: {
    color: "#1D252B",
    fontSize: "18px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
    textOverflow: "ellipsis",
    "@media (max-width:599px)": {
      fontSize: "16px",
      lineHeight: "24px",
    },
    "@media (min-width:600px) and (max-width:1024px)": {
      maxWidth: "500px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    "@media (min-width: 1025px) and (max-width: 1366px)": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  attentionCardItemContentStyle: {
    color: "#1D252B",
    fontSize: "18px",
    fontFamily: "Noto Sans",
    fontWeight: "300",
    lineHeight: "20px",
    "@media(max-width:599px)": {
      fontSize: "14px",
      lineHeight: "24px",
      color: "#1D252B",
      fontFamily: '"Noto Sans"',
      fontWeight: 300,
    },
    "@media (min-width: 1025px) and (max-width: 1366px)": {
      maxWidth: "900px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  attentionCardButtonContainer: {
    "@media only screen and (max-width: 768px)": {
      gridArea: "button",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  attentionCardButton: {
    textTransform: "none",
    width: "fit-content",
    minWidth: "155px",
    padding: "12px 12px",
    flexShrink: 0,
    borderRadius: "40px",
    backgroundColor: "#3F3F3F",
    boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
    color: "var(--Default-White, #FFF)",
    fontWeight: 400,
    fontFamily: "Lato",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    fontSize: "14px",
  },
};

export default AttentionCardStyle;
