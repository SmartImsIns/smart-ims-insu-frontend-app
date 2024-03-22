const AttentionCardStyle = {
  heading: {
    color: "#383D4E",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Playfair Display",
    lineHeight: "110%",
  },
  attentionsCard: {
    height: "118.988px",
    display: "grid",
    gridTemplateColumns: "1fr 15fr 1fr",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "22px",
    padding: "0px 30px",
    border: "1px solid #C9E1EC",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  },
  attentionsCardItem: {
    display: "grid",
    gap: "17.5px",
  },
  attentionCardButton: {
    width: 155,
    height: 40,
    padding: "16px 12px",
    borderRadius: 40,
    backgroundColor: "#3F3F3F",
    boxShadow: "0px 6px 10px 0px rgba(63, 63, 63, 0.3)",
    color: "var(--Default-White, #FFF)",
    fontWeight: 400,
    fontFamily: "Noto Sans",
  },
};

export default AttentionCardStyle;
