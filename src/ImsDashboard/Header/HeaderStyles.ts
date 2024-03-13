import { SxProps, Theme } from "@mui/system";

export interface HeaderStyleProps {
  headerContainer: SxProps<Theme>;
  logo: SxProps<Theme>;
  headerItems: SxProps<Theme>;
}

const HeaderStyle: HeaderStyleProps = {
  headerContainer: {
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 14px 0px #00000014",
  },
  logo: {
    paddingLeft: "30px",
    paddingTop: "9.77px",
  },
  headerItems: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    paddingRight: "34px",
  },
};

export default HeaderStyle;
