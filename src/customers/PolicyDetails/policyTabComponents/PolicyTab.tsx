import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import {
  MenuItem,
  Select,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { PolicyTabStyles } from "./PolicyTabStyles";
import Documents from "./Document/Documents";
import Activity from "./Activity/Activity";
import Coverage from "./Coverage/Coverage";
import Vehicle from "./Vehicle/Vehicle";
import Billing from "./Billing/Billing";
import { policyTabsLists } from '../../../constants/Constants';

interface TabPanelProps {
  index: number;
  value: number;
  sx?: any;
  child?: React.FC;
}

const PolicyTab = () => {
  const [value, setValue] = useState<number>(0); // Changed from "0" to 0
  const [selected, setSelected] = useState<string>("0");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const CustomTabPanel = (props: TabPanelProps) => {
  //   const { value, index, sx, ...other } = props;

  //   return (
  //     <Box
  //       role="tabpanel"
  //       hidden={value !== index}
  //       id={`simple-tabpanel-${index}`}
  //       aria-labelledby={`simple-tab-${index}`}
  //       {...other}
  //       sx={sx}
  //     >
  //       {value === index && getComponent({ index })}
  //     </Box>
  //   );
  // }

  const tabComponents: { [key: string]: React.ComponentType<any> } = {
    "0": Activity,
    "1": Coverage,
    "2": Vehicle,
    "3": Documents,
    "5": Billing,
  };

  const getComponent = (index: string) => {
    const ComponentItem = tabComponents[index.toString()];
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
            onChange={(event) => setSelected(event.target.value as string)} // Added type assertion as string
            sx={PolicyTabStyles.selectStyles}
          >
            {policyTabsLists.map((tabName, index) => (
              <MenuItem
                key={index}
                value={index.toString()}
                sx={PolicyTabStyles.menuStyles}
              >
                {tabName}
              </MenuItem>
            ))}
          </Select>
          {selected && <Box>{getComponent(selected)}</Box>}
        </Box>
      ) : (
        <Box>
          <Tabs
            sx={PolicyTabStyles.tabList}
            onChange={handleChange}
            aria-label="Tab List"
            value={value}
          >
            {policyTabsLists.map((tabName, index) => (
              <Tab
                key={index}
                label={tabName}
                sx={PolicyTabStyles.tab}
                value={index}
              />
            ))}
          </Tabs>
          {getComponent(value.toString())}
          {/* {policyTabsLists.map((_, index) => (
            <CustomTabPanel
              key={index}
              value={value}
              index={index}
            />
          ))} */}
        </Box>
      )}
    </Box>
  );
};

export default PolicyTab;
