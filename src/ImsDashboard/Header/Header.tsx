import { Box} from "@mui/material"
import Logo from '../../assets/Layer 1 copy 1.svg'
import notification from '../../assets/notification.svg'
import displayPicture from '../../assets/Rectangle 41106.svg'
import menu from '../../assets/align-justify.svg'
import HeaderStyle from "./HeaderStyles"
const Header=()=>{
    const headerData=[
        {
            logo:Logo,
            notification:notification,
            displayPicture:displayPicture,
            menu:menu
        }
    ]
    return(
        <Box sx={HeaderStyle.headerContainer}>
            <Box sx={HeaderStyle.logo}>
                <img src={headerData[0].logo} alt="smart-ims logo"/>
            </Box>
            <Box sx={HeaderStyle.headerItems}>
               <Box>
                <img  src={headerData[0].notification} alt="notification" style={{ width: "36px", height: "auto" }} />
               </Box>
               <Box>
                <img src={headerData[0].displayPicture} alt="displayPicture" style={{ width: "32px", height: "auto" }}/>
               </Box>
               <Box>
                <img src={headerData[0].menu} alt="menu" style={{ width: "40px", height: "auto" }}/>
               </Box>
            </Box>
        </Box>
    )
}
export default Header;