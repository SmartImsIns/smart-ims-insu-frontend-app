import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PolicyTabsLists from "./PolicyTabsLists";
import PolicyDetailsStyles from "../PolicyDetailsStyles";
import { MenuItem, Select, useMediaQuery } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { PolicyTabStyles } from "./PolicyTabStyles";

const PolicyTab = () => {
  const [value, setValue] = useState("0");
  const [selected, setSelected] = useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const TabComponents: { [key: string]: React.ComponentType<any> } = {
    // 0: ActivityContainer,
  };

  const getComponent = ({ index }: { index: number }) => {
    const ComponentItem = TabComponents[index.toString()];
    return ComponentItem ? (
      <ComponentItem />
    ) : (
      <Box>Missing component for this tab</Box>
    );
  };

  const isMobile = useMediaQuery("(max-width:601px)");

  return (
    <Box sx={PolicyTabStyles.PolicyTabsStyles}>
      {isMobile ? (
        <Box sx={{ padding: "0px" }}>
          <Select
            variant="standard"
            labelId="label"
            id="select"
            value={selected}
            IconComponent={KeyboardArrowDownIcon}
            onChange={(event) => setSelected(event.target.value)}
            sx={{
              border: "none",
              boxShadow: "none",
              outline: "none",
              cursor: "pointer",
              "&.MuiSelect-select:focus": {
                backgroundColor: "transparent",
              },
              "& .MuiInput-input": {
                display: "flex",
                color: "#383D4E",
                fontFamily: "Playfair Display",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "110%",
              },
              "& .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input":
                {
                  padding: "0 34px 0 0",
                },
              "&:after": {
                display: "none",
                boxShadow: "none",
                outline: "none",
              },
              "&:before": {
                display: "none",
                boxShadow: "none",
                outline: "none",
              },
              "& .MuiInput-input:focus": {
                backgroundColor: "transparent",
              },
            }}
          >
            {PolicyTabsLists.map((tabName, index) => (
              <MenuItem
                key={index}
                value={index.toString()}
                sx={{
                  color: "#383D4E",
                  fontFamily: "Playfair Display",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "110%",
                }}
              >
                {tabName}
              </MenuItem>
            ))}
          </Select>
          {selected && <Box>{getComponent({ index: parseInt(selected) })}</Box>}
        </Box>
      ) : (
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: "1px solid #94ABB6",
              position: "relative",
            }}
          >
            <TabList
              sx={{
                display: "flex",
                minHeight: "auto",
                position: "relative",
                justifyContent: "space-between",
                "& .MuiTabs-indicator": {
                  height: "5px",
                  borderRadius: "5px",
                  padding: "0px 2px 0px 2px",
                  bottom: "-1px",
                  position: "absolute",
                  left: 0,
                  width: "50%",
                  transform: "translateX(0)",
                },
                "& .css-heg063-MuiTabs-flexContainer": {
                  display: "flex",
                  justifyContent: "space-between",
                  "@media (min-width: 600px) and (max-width: 1024px)": {
                    paddingRight: "166px",
                  },
                  "@media (min-width: 1024px) and (max-width: 1920px)": {
                    paddingRight: "336px",
                  },
                },
              }}
              onChange={handleChange}
              aria-label="Tab List"
            >
              {PolicyTabsLists.map((tabName, index) => (
                <Tab
                  key={index}
                  label={tabName}
                  sx={{
                    margin: "0px",
                    minWidth: "auto",
                    width: "auto",
                    padding: "0px 0px 18.5px 0px",
                    color: "#383D4E",
                    fontFamily: "Playfair Display",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "110%",
                    textTransform: "none",
                    minHeight: "auto",
                    "@media (min-width: 600px) and (max-width: 1024px)": {
                      fontSize: "16px",
                    },
                    "@media (min-width: 1024px) and (max-width: 1920px)": {
                      fontSize: "20px",
                    },
                  }}
                  value={index.toString()}
                />
              ))}
            </TabList>
          </Box>
          {PolicyTabsLists.map((_, index) => (
            <TabPanel
              sx={{
                padding: "0",
                margin: "0",
                minWidth: "auto",
                width: "auto",
                minHeight: "auto",
              }}
              key={index}
              value={index.toString()}
            >
              {getComponent({ index })}
            </TabPanel>
          ))}
        </TabContext>
      )}
    </Box>
  );
};

export default PolicyTab;
