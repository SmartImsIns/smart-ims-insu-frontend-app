import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import PolicyTabsLists from "./PolicyTabsLists";
import {
  MenuItem,
  Select,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { PolicyTabStyles } from "./PolicyTabStyles";
import DocumentsTabComponent from "./documentTab/DocumentsTabComponent";
import ActivityTabComponent from "./ActivityTab/ActivityTabComponent";
import CoverageComponent from "./CoverageTab/CoverageTabComponent";
import VehicleCard from "./VehicleTab/VehicleCard";
import BillingTabComponent from "./BillingTab/BillingTabComponent";

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

  function CustomTabPanel(props: TabPanelProps) {
    const { value, index, sx, ...other } = props;

    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        sx={sx}
      >
        {value === index && getComponent({ index })}
      </Box>
    );
  }

  const TabComponents: { [key: string]: React.ComponentType<any> } = {
    "0": ActivityTabComponent,
    "1": CoverageComponent,
    "2": VehicleCard,
    "3": DocumentsTabComponent,
    "5": BillingTabComponent,
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
            onChange={(event) => setSelected(event.target.value as string)} // Added type assertion as string
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
        <Box>
          <Tabs
            sx={PolicyTabStyles.tabList}
            onChange={handleChange}
            aria-label="Tab List"
            value={value}
          >
            {PolicyTabsLists.map((tabName, index) => (
              <Tab
                key={index}
                label={tabName}
                sx={PolicyTabStyles.tab}
                value={index}
              />
            ))}
          </Tabs>
          {PolicyTabsLists.map((_, index) => (
            <CustomTabPanel
              key={index}
              value={value}
              index={index}
            ></CustomTabPanel>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PolicyTab;
