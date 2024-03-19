import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PolicyTabsLists from "./PolicyTabsLists";
import PolicyDetailsStyles from "../PolicyDetailsStyles";
import DocumentsTabComponent from "./DocumentTab /DocumentsTabComponent";
import { MenuItem, Select, useMediaQuery } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Define TabComponents outside the PolicyTab component
const TabComponents: { [key: string]: React.ComponentType<any> } = {
  3: DocumentsTabComponent,
};

// Define getComponent function outside the PolicyTab component
const getComponent = ({ index }: { index: number }) => {
  const ComponentItem = TabComponents[index.toString()];
  return ComponentItem ? (
    <ComponentItem />
  ) : (
    <Box>Missing component for this tab</Box>
  );
};

const PolicyTab = () => {
  const [value, setValue] = useState("0");
  const [selected, setSelected] = useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <Box sx={PolicyDetailsStyles.PolicyTabsStyles}>
      {isMobile ? (
        <Box>
          <Select
            variant="standard"
            labelId="label"
            id="select"
            value={selected}
            IconComponent={() => <KeyboardArrowDownIcon />}
            onChange={(event) => setSelected(event.target.value)}
            sx={{
              border: "none",
              boxShadow: "none",
              outline: "none",
              "&:focus": {
                backgroundColor: "transparent",
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
            }}
          >
            {PolicyTabsLists.map((tabName, index) => (
              <MenuItem key={index} value={index.toString()}>
                {tabName}
              </MenuItem>
            ))}
          </Select>
          {selected && <Box>{getComponent({ index: parseInt(selected) })}</Box>}
        </Box>
      ) : (
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="Tab List">
              {PolicyTabsLists.map((tabName, index) => (
                <Tab
                  key={index}
                  label={tabName}
                  sx={{
                    color: "#383D4E",
                    fontFamily: "Playfair Display",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "110%",
                    padding: "18px",
                  }}
                  value={index.toString()}
                />
              ))}
            </TabList>
          </Box>
          {PolicyTabsLists.map((_, index) => (
            <TabPanel
              sx={{ padding: "0px" }}
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
