import React, { useState } from "react";
import { Box, MenuItem, Typography } from "@mui/material";
import {
  SETTINGS_AND_PREFERENCES,
  NOTIFICATIONS,
  LANGUAGE,
  SELECT_LANGUAGE,
  LET_US_KNOW,
} from "../constants/Constants";
import ProfileDetailsStyles from "./ProfileDetailsStyles";
import OutlinedInput from "@mui/material/OutlinedInput";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import preferencesData from "../mockJson/CustomerDashboard/SettingsAndPreferencesTableData.json";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface TableData {
  id: string;
  Scenarios: string;
  Via_Mail: string;
  Via_SMS: string;
  Push_Notification: string;
}

const SettingsAndPreferences = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setSelectedLanguage(event.target.value as string);
  };
  const languages = ["English", "French", "Spanish"];
  const tableHeaders: TableData | undefined = preferencesData.find(
    (item) => item.id === "0"
  );

  return (
    <Box sx={ProfileDetailsStyles.settingsAndPreferences}>
      <Box>
        <Typography sx={ProfileDetailsStyles.settingsHeading}>
          {SETTINGS_AND_PREFERENCES}
        </Typography>
      </Box>
      <Box>
        <Typography sx={ProfileDetailsStyles.languagesHeading}>
          {LANGUAGE}
        </Typography>
        <Typography sx={ProfileDetailsStyles.textStyle}>
          {SELECT_LANGUAGE}
        </Typography>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          input={<OutlinedInput label={selectedLanguage} />}
          sx={{ width: 328 }}
        >
          {languages.map((language) => (
            <MenuItem value={language}>{language}</MenuItem>
          ))}
        </Select>
      </Box>
      <Box>
        <Typography
          sx={{
            ...ProfileDetailsStyles.languagesHeading,
            marginTop: "15px",
          }}
        >
          {NOTIFICATIONS}
        </Typography>
        <Typography sx={ProfileDetailsStyles.textStyle}>
          {LET_US_KNOW}
        </Typography>
      </Box>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders &&
                Object.keys(tableHeaders)
                  .filter((key) => key !== "id")
                  .map((key) => (
                    <TableCell sx={ProfileDetailsStyles.tableHead} key={key}>
                      {tableHeaders[key as keyof TableData]}
                    </TableCell>
                  ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {preferencesData
              .filter((row) => row.id !== "0")
              .map((row: TableData) => (
                <TableRow key={row.id}>
                  {Object.keys(row)
                    .filter((key) => key !== "id")
                    .map((key) => (
                      <TableCell sx={ProfileDetailsStyles.tableCells} key={key}>
                        {row[key as keyof TableData] ? (
                          row[key as keyof TableData]
                        ) : (
                          <Checkbox />
                        )}
                      </TableCell>
                    ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default SettingsAndPreferences;
