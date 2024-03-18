import React from "react";
import { Box, Typography } from "@mui/material";
import car from "../../assets/car.svg";
import tickIcon from "../../assets/tick.svg";

interface BasicInfoMockProp {
  headName?: string;
  vechileName?: string;
  numberOfVEchiles?: string;
  price?: string;
  dueDate?: string;
  annaulPrice?: string;
  term?: string;
  vaild?: string;
}

const BasicInfoMock = {
  policyDetailsHead: "Policy Details",
  vechileName: "Elena Rodriguez",
  numberOfVEchiles: "2",
  billingHead: "Billing Details",
  price: "821.00 ",
  dueDate: "01 Mar’24",
  premiumHead: "Premium & term  Details",
  annaulPrice: "2917.00",
  term: "1 Year",
  vaild: "02 Mar ‘23 - 01 Mar’24",
};

const styles = {
  head: {
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "Noto sans",
    color: "#1D252B",
  },
  content: {
    fontSize: "20px",
    fontWeight: "400",
    fontFamily: "Noto sans",
    color: "#1D252B",
  },
  box: {
    marginLeft: "67.55px",
    paddingTop: "27px",
    paddingBottom: "42px",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    overflow: "hidden",
    rowGap: "30px",
  },
};

const BasicInfoCard: React.FC<BasicInfoMockProp> = () => {
  return (
    <Box
      sx={{ justifyContent: "space-between", display: "flex" }}
      aria-label="Basic card info details"
    >
      <Box sx={{ paddingLeft: "30px", paddingTop: "31px" }}>
        <img src={car} alt="car-logo" />
        <Box sx={{ display: "flex", gap: "6.5px", marginTop: "14.79px" }}>
          <img src={tickIcon} alt="car-logo" />
          <Typography
            color="#56CF66"
            fontSize={"16px"}
            fontWeight={400}
            fontFamily={"Noto Sans"}
          >
            {"Active"}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.box}>
        <Box>
          <Typography sx={styles.head}>{BasicInfoMock.premiumHead}</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={styles.content}>
              {BasicInfoMock.vechileName}{" "}
            </Typography>
            <ul
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <li>
                <Typography sx={styles.content}>
                  {BasicInfoMock.numberOfVEchiles} vehicles
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Typography sx={styles.head}>{BasicInfoMock.billingHead}</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={styles.content}>
              $ {BasicInfoMock.price}{" "}
            </Typography>
            <ul
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <li>
                <Typography sx={styles.content}>
                  {" "}
                  Due on {BasicInfoMock.dueDate}
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Typography sx={styles.head}>{BasicInfoMock.premiumHead}</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={styles.content}>
              $ {BasicInfoMock.annaulPrice} / {BasicInfoMock.term}{" "}
            </Typography>
            <ul
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <li>
                <Typography sx={styles.content}>
                  {" "}
                  {BasicInfoMock.vaild}
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BasicInfoCard;
