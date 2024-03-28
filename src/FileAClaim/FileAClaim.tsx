import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import tickMark from "../assets/Grid.svg";
import document from "../assets/fileDocument.svg";
import trashBin from "../assets/trash-2.svg";
import uploadFile from "../assets/upload.svg";
import { policyType } from "../constants/PolicyType";
import { policyNumber } from "../constants/policyNumber";
import { useState, useEffect } from "react";
import FileAClaimStyles from "./FileAClaimStyles";
import { vechileName } from "../constants/vechileName";
import { incidentType } from "../constants/vechileType";
import fileAClaimJosn from "../mockJson/CustomerDashboard/FileAClaim.json";
import { fileAClaim } from "../constants/Constants";
import ActionButton from "../ImsDashboard/commonComponents/ActionButton";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { clickToUpload } from "../constants/Constants";
import dayjs from "dayjs";
import WhiteButton from "../PolicyDetails/common/WhiteButton";
import closeImage from "../assets/x-circle.svg";
interface FileAClaimProps {
  onClose: () => void;
}
const FileAClaim: React.FC<FileAClaimProps> = ({ onClose }) => {
  console.log(fileAClaimJosn[0].policyType);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    dayjs(fileAClaimJosn[0].incidentDate)
  );
  const [selectedTime, setSelectedTime] = useState(
    dayjs(fileAClaimJosn[0].incidentTime)
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDateChange = (date: any) => {
    console.log(date);
    setSelectedDate(date);
  };
  const handleTimeChange = (time: any) => {
    setSelectedTime(time);
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSize(file.size);
    } else {
      setFileName("");
    }
  };
  const handleDelete = () => {
    console.log(fileName);
    setFileName("");
  };
  const isMobile = windowWidth <= 699;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={FileAClaimStyles.container}>
        <Box sx={FileAClaimStyles.heading}>
          <Typography sx={FileAClaimStyles.headingText}>
            {fileAClaim}
          </Typography>
          <Box>
            <img onClick={onClose} src={closeImage} alt="closing-tag" />
          </Box>
        </Box>
        <Box sx={FileAClaimStyles.formsContainer}>
          <FormControl fullWidth sx={{ width: isMobile ? 300 : 360 }}>
            <InputLabel id="policy-type-label">Policy Type</InputLabel>
            <Select
              labelId="policy-type-label"
              id="policy-type-select"
              label="Policy Type"
              value={fileAClaimJosn[0].policyType}
            >
              {policyType.map((policy) => (
                <MenuItem key={policy} value={policy}>
                  {policy}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ width: isMobile ? 300 : 360 }}>
            <InputLabel id="policy-type-label">Policy#</InputLabel>
            <Select
              labelId="policy-type-label"
              id="policy-type-select"
              label="Policy#"
              value={fileAClaimJosn[0].policyNumber}
            >
              {policyNumber.map((policyNumber) => (
                <MenuItem key={policyNumber} value={policyNumber}>
                  {policyNumber}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ width: isMobile ? 300 : 360 }}>
            <InputLabel id="vechile">Vehicle</InputLabel>
            <Select
              labelId="vechile"
              id="vechile"
              label="Vehicle"
              value={fileAClaimJosn[0].vechile}
            >
              {vechileName.map((vechile) => (
                <MenuItem key={vechile} value={vechile}>
                  {vechile}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ width: isMobile ? 300 : 360 }}>
            <InputLabel id="vechile">Incident Type</InputLabel>
            <Select
              labelId="Incident Type"
              id="Incident Type"
              label="Incident Type"
              value={fileAClaimJosn[0].incidentType}
            >
              {incidentType.map((incidentType) => (
                <MenuItem key={incidentType} value={incidentType}>
                  {incidentType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ width: isMobile ? 300 : 360 }}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ width: isMobile ? 300 : 360 }}>
            <TimePicker
              label="Select Time"
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ minWidth: isMobile ? 300 : 760 }}>
            <TextField
              id="outlined-basic"
              label="Incident Location"
              variant="outlined"
              value={fileAClaimJosn[0].location}
              multiline
            />
          </FormControl>
          <FormControl fullWidth sx={{ minWidth: isMobile ? 300 : 760 }}>
            <TextField
              id="outlined-basic"
              label="Incident Description"
              variant="outlined"
              value={fileAClaimJosn[0].description}
              multiline
            />
          </FormControl>
          <FormControl fullWidth sx={{ width: isMobile ? 300 : 360 }}>
            <Button
              sx={FileAClaimStyles.fileUploadButton}
              variant="outlined"
              component="label"
            >
              <Box sx={FileAClaimStyles.uplaodBox}>
                <img src={uploadFile} alt="upload" />
                {clickToUpload}
                <input type="file" onChange={handleFileChange} hidden />
              </Box>
            </Button>
            <Box>
              {fileName && (
                <Box sx={FileAClaimStyles.imageDisplayerBox}>
                  <Box sx={{ width: "40px" }}>
                    <img src={document} alt="document-text" />
                  </Box>
                  <Box sx={FileAClaimStyles.fileNames}>
                    <Typography sx={FileAClaimStyles.fileNameText}>
                      {fileName}
                    </Typography>
                    <Box sx={FileAClaimStyles.fileSizeBox}>
                      <Typography sx={FileAClaimStyles.fileSizeText}>
                        {fileSize}kb
                      </Typography>
                      <Typography sx={FileAClaimStyles.completedText}>
                        Complete
                      </Typography>
                    </Box>
                  </Box>
                  <img onClick={handleDelete} src={trashBin} alt="trash-bin" />
                  <img src={tickMark} alt="tickMark" />
                </Box>
              )}
            </Box>
          </FormControl>
        </Box>
        <Box sx={FileAClaimStyles.buttons}>
          <WhiteButton
            buttonStyles={FileAClaimStyles.cancelButton}
            buttonText={"Cancel"}
          />
          <ActionButton
            sx={FileAClaimStyles.submitButton}
            buttonText={"Submit"}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default FileAClaim;
