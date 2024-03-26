import ProfileDetails from "./ProfileDetails";
import { Box, Typography } from "@mui/material";
import SettingsAndPreferences from "./SettingsAndPreferences";
import ProfileDetailsStyles from "./ProfileDetailsStyles";
import {PROFILE_DETAILS_HEADING} from "../constants/Constants"
const ProfileDetailsComponent = () => {
  return (
    <Box>
      <Typography sx={ProfileDetailsStyles.profileDetailsHeading}>
      {PROFILE_DETAILS_HEADING}
      </Typography>
      <Box sx={ProfileDetailsStyles.profileDetailsContainer}>
        <ProfileDetails />
        <SettingsAndPreferences />
      </Box>
    </Box>
  );
};
export default ProfileDetailsComponent;
