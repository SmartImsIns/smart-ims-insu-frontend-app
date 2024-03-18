const ActivityTabStyles = {
    container:{
        display:"flex",
        border: "1px solid rgba(201, 225, 236, 1)",
        background: "rgba(255, 255, 255, 1)",
        padding:"0px !important",
        marginTop:"24.5px",
        
    },
    active:{
        width:"70.656%"
    },
    carrier:{
        flex:1,
        padding:"30px 0px 61px 0px",
    },
    filter: {
        display: "flex",
        gap: "10px",
        alignItems:"center",
        marginTop: "20.5px",
        marginLeft: "95%",
      },
      tableHeadingFilterImage: {
        img:{
            width:"24px",
            height:"24px"
        }
      },
      tableHeadingFilterText: {
        fontFamily: "Noto Sans",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "24px",
        letterSpacing: "0px",
        textAlign: "left",
      },

}
export default ActivityTabStyles;