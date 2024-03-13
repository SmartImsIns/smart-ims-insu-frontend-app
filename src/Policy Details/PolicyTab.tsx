import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PolicyTabsLists from "./policy tab components/PolicyTabsLists";
import ActivityTabComponent from './ActivityTabComponent';
import CoverageComponent from './CoverageComponent';
import PolicyDetailsStyles from './PolicyDetailsStyles';

const PolicyTab = () => {
    const [value, setValue] = React.useState('0');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const TabComponents: { [key: string]: React.ComponentType } = {
        0: ActivityTabComponent,
        1: CoverageComponent
    };

    const GetComponent = ({ index }: { index: number }) => {
        const ComponentItem = TabComponents?.[index] ;
        return TabComponents?.[index] ? <ComponentItem />: <Box>Create the component</Box>;
    }

    return (
        <Box sx={PolicyDetailsStyles.PolicyTabsStyles}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {PolicyTabsLists.map((tabName, index) => (
                            <Tab key={index} label={tabName} value={index.toString()} />
                        ))}
                    </TabList>
                </Box>
                {PolicyTabsLists.map((tabName, index) => (
                    <TabPanel key={index} value={index.toString()}>
                        <GetComponent index={index} />
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    )
}

export default PolicyTab;
