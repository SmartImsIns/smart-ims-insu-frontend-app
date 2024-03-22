import { Box, Card, Typography } from "@mui/material";
import WelcomeCardStyle from "./WelcomeCardStyle";
import { useAppSelector } from "../../../store/hooks";
import star from "../../../assets/svgs/star.svg";
import paymentHistoryIcon from "../../../assets/svgs/paymentHistoryIcon.svg";
import roadsideAssistanceIcon from "../../../assets/svgs/roadsideAssistanceIcon.svg";
import learnAboutIcon from "../../../assets/svgs/learnAboutIcon.svg";
import { RootState } from "../../../store/store";

const WelcomeCard = () => {
  const { userDetails } = useAppSelector((store: RootState) => store.login);

  const time = new Date().toLocaleTimeString().split(" ")[0].split(":");
  const isAM = new Date().toLocaleTimeString().split(" ")[1] === "AM";

  return (
    <Box sx={{ padding: "0px 30px" }}>
      <Typography sx={WelcomeCardStyle.welcomeTextStyle}>
        Good{" "}
        {isAM ? "Morning" : parseInt(time[0]) > 6 ? "Evening" : "Afternoon"} ,{" "}
        {userDetails?.customerName} ! Need help today?
      </Typography>
      <Card sx={WelcomeCardStyle.welcomeCardStyle}>
        <Box sx={WelcomeCardStyle.WelcomeCardItemStyle}>
          <img src={star} alt={"new-claim-icon"} />
          <Typography sx={WelcomeCardStyle.WelcomCardItemTextStyle}>
            New Claim
          </Typography>
        </Box>
        <Box sx={WelcomeCardStyle.WelcomeCardItemStyle}>
          <img src={paymentHistoryIcon} alt={"payment-history-icon"} />
          <Typography
            sx={{
              color: "#1D252B",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 300,
            }}
          >
            Payment History
          </Typography>
        </Box>
        <Box sx={WelcomeCardStyle.WelcomeCardItemStyle}>
          <img src={roadsideAssistanceIcon} alt={"road-side-assistance-icon"} />
          <Typography
            sx={{
              color: "#1D252B",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 300,
            }}
          >
            Roadside Assistance
          </Typography>
        </Box>
        <Box sx={WelcomeCardStyle.WelcomeCardItemStyle}>
          <img src={learnAboutIcon} alt={"learn-about-icon"} />
          <Typography
            sx={{
              color: "#1D252B",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 300,
            }}
          >
            Learn About Insurance
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default WelcomeCard;
