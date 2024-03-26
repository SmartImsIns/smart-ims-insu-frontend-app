import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PolicyTabsLists from "./PolicyTabsLists";
import { MenuItem, Select, useMediaQuery } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { PolicyTabStyles } from "./PolicyTabStyles";
import DocumentsTabComponent from "./documentTab/DocumentsTabComponent";

const PolicyTab = () => {
  const [value, setValue] = useState("0");
  const [selected, setSelected] = useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const TabComponents: { [key: string]: React.ComponentType<any> } = {
    // 0: ActivityContainer,
    3: DocumentsTabComponent,
  };

  const getComponent = ({ index }: { index: number }) => {
    const ComponentItem = TabComponents[index.toString()];
    return ComponentItem ? (
      <ComponentItem />
    ) : (
      <Box>Missing component for this tab</Box>
    );
  };

  const isMobile = useMediaQuery("(max-width:789px)");

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
            sx={PolicyTabStyles.selectStyles}
          >
            {PolicyTabsLists.map((tabName, index) => (
              <MenuItem
                key={index}
                value={index.toString()}
                sx={PolicyTabStyles.menuStyles}
              >
                {tabName}
              </MenuItem>
            ))}
          </Select>
          {selected && <Box>{getComponent({ index: parseInt(selected) })}</Box>}
        </Box>
      ) : (
        <TabContext value={value}>
          <Box>
            <TabList
              sx={PolicyTabStyles.tabList}
              onChange={handleChange}
              aria-label="Tab List"
            >
              {PolicyTabsLists.map((tabName, index) => (
                <Tab
                  key={index}
                  label={tabName}
                  sx={PolicyTabStyles.tab}
                  value={index.toString()}
                />
              ))}
            </TabList>
          </Box>
          {PolicyTabsLists.map((_, index) => (
            <TabPanel
              sx={PolicyTabStyles.tabPanel}
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
