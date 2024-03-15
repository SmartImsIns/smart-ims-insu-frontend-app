import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PolicyTabsLists from "./policyTabComponents/PolicyTabsLists";
import PolicyDetailsStyles from "./PolicyDetailsStyles";
import ActivityTabComponent from "./policyTabComponents/ActivityTabComponent";
import VehicleTabComponent from "./policyTabComponents/VehicleTabComponent";
import CoverageTabComponent from "./policyTabComponents/CoverageTabComponent";
import LienholderTabComponent from "./policyTabComponents/LienholderTabComponent";
import BillingTabComponent from "./policyTabComponents/BillingTabComponent";
import ClaimsTabComponent from "./policyTabComponents/ClaimsTabComponent";
import DocumentsTabComponent from "./policyTabComponents/DocumentTab /DocumentsTabComponent";

const PolicyTab = () => {
  const [value, setValue] = React.useState("0");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const TabComponents: { [key: string]: React.ComponentType } = {
    0: ActivityTabComponent,
    1: CoverageTabComponent,
    2: VehicleTabComponent,
    3: DocumentsTabComponent,
    4: LienholderTabComponent,
    5: BillingTabComponent,
    6: ClaimsTabComponent,
  };

  const GetComponent = ({ index }: { index: number }) => {
    const ComponentItem = TabComponents?.[index];
    return TabComponents?.[index] ? (
      <ComponentItem />
    ) : (
      <Box>Create the component</Box>
    );
  };

  return (
    <Box sx={PolicyDetailsStyles.PolicyTabsStyles}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="">
            {PolicyTabsLists.map((tabName, index) => (
              <Tab key={index} label={tabName} value={index.toString()} />
            ))}
          </TabList>
        </Box>
        {PolicyTabsLists.map((_, index) => (
          <TabPanel
            sx={{ padding: "0px" }}
            key={index}
            value={index.toString()}
          >
            <GetComponent index={index} />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default PolicyTab;
