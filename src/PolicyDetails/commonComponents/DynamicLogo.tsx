import React, { CSSProperties } from "react";
import { Box } from "@mui/material";

interface DashBoardCardItemProps {
  src: string;
  alt: string;
  styles:CSSProperties
}

// const DynamicLogoStyles = {
//   DynamicLogoContainerStyles: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     "@media (max-width: 599px)": {
//       display: "inline-flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       gap: '10px',
//       height: "68px"
//     }
//   },
//   TextCardStyles: {
//     marginLeft: "20.19px",
//     color: "#1D252B",
//     fontSize: "20px",
//     fontStyle: "normal",
//     fontWeight: 300,
//     lineHeight: "110%", // 22px
//     "@media (max-width: 599px)": {
//       fontSize: "16px",
//       marginLeft: "0px",
//       textAlign: 'center'
//     }
//   }
// }

const DynamicLogo: React.FC<DashBoardCardItemProps> = ({  src, alt,styles }) => {
  return (
    <Box sx={styles}>
      <img src={src} alt={alt} />
      {/* {text.length > 0 &&
        <Typography
          sx={DynamicLogoStyles.TextCardStyles}
        >
          {text}
        </Typography>
      } */}
    </Box>
  );
};

export default DynamicLogo;
