import { Box, Typography } from "@mui/material";
import profileDetailsData from "../mockJson/CustomerDashboard/ProfileDetailsData.json";
import emailLogo from "../assets/emailLogo.svg";

import addressLogo from "../assets/addressLogo.svg";
import phoneNumberLogo from "../assets/phoneNumberLogo.svg";
import displayPicture from "../assets/displayPicture.svg";
import ProfileDetailsStyles from "./ProfileDetailsStyles";
const ProfileDetails = () => {
  return (
    <Box sx={ProfileDetailsStyles.container}>
      
      {profileDetailsData.map((e, index) => (
        <Box key={index}>
          <Box sx={ProfileDetailsStyles.profileContainer}>
            <Box sx={ProfileDetailsStyles.profileImage}>
              <img src={displayPicture} alt="display-profile" />
            </Box>
            <Typography sx={ProfileDetailsStyles.profileTextStyle}>
              {e.name}
            </Typography>
            <Box sx={ProfileDetailsStyles.information}>
              <Typography sx={ProfileDetailsStyles.profileTextStyle}>
                {e.age}
              </Typography>
              <Typography component="span">|</Typography>
              <Typography sx={ProfileDetailsStyles.profileTextStyle}>
                {e.gender}
              </Typography>
            </Box>
          </Box>
          <Box sx={ProfileDetailsStyles.detailsContainer}>
            <Box sx={ProfileDetailsStyles.detailsInfo}>
              <img src={emailLogo} alt="email-logo" />
              <Typography sx={ProfileDetailsStyles.profileTextStyle}>
                {e.gmail}
              </Typography>
            </Box>
            <Box sx={ProfileDetailsStyles.detailsInfo}>
              <img src={phoneNumberLogo} alt="email-logo" />
              <Typography sx={ProfileDetailsStyles.profileTextStyle}>
                {e["phone_no."]}
              </Typography>
            </Box>
            <Box sx={ProfileDetailsStyles.detailsInfo}>
              <img src={addressLogo} alt="email-logo" />
              <Typography sx={ProfileDetailsStyles.profileTextStyle}>
                {e.address}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default ProfileDetails;
