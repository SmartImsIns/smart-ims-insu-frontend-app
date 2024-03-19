import ProfileDetails from "./ProfileDetails";
import { Box } from "@mui/material";
import SettingsAndPreferences from "./SettingsAndPreferences";
import ProfileDetailsStyles from "./ProfileDetailsStyles";
const ProfileDetailsComponent = () => {
  return (
    <Box sx={ProfileDetailsStyles.profileDetailsContainer}>
      <ProfileDetails />
      <SettingsAndPreferences />
    </Box>
  );
};
export default ProfileDetailsComponent;
