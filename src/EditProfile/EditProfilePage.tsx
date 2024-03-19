import React from "react";
import { TextField, Box, Typography } from "@mui/material";
import EditProfileStyles from "./EditProfileStyles";
import LeftArrow from "../assets/leftArrow.svg";

const titleOptions = [
  {
    value: "Mr.",
    label: "Mr.",
  },
  {
    value: "Ms.",
    label: "Ms.",
  },
  {
    value: "Mrs.",
    label: "Mrs.",
  },
];

const data = {
  title: "Mr.",
  FirstName: "John",
  LastName: "Rodriguez",
  DateOfBirth: "10/08/1995",
  PhoneNumber: "+1 |  626-358-7271",
  EmailID: "elen.rodriguez@gmail.com",
  Address: "Maria A Mendoza De Zuniga, 2929 SW 19th St ",
  ZipCode: "73108-4410",
  City: "Oklahoma",
  State: "OK",
  Country: "Buckinghamshire",
};

function EditProfilePage() {
  const {
    title,
    FirstName,
    LastName,
    DateOfBirth,
    PhoneNumber,
    EmailID,
    Address,
    ZipCode,
    City,
    State,
    Country,
  } = data;

  return (
    <Box sx={EditProfileStyles.editProfile}>
      <Box sx={EditProfileStyles.editProfileText}>
        <img src={LeftArrow} alt="arrow" />
        <Typography sx={EditProfileStyles.text}> Edit Profile </Typography>
      </Box>

      <Box sx={EditProfileStyles.fieldsFirstRow}>
        <TextField
          select
          label="Title"
          defaultValue={title}
          SelectProps={{
            native: true,
          }}
          sx={EditProfileStyles.title}
        >
          {titleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          label="First Name"
          defaultValue={FirstName}
          disabled
          sx={EditProfileStyles.firstName}
        />
      </Box>
      <Box sx={EditProfileStyles.fieldsFirstRow}>
        <TextField
          label="Last Name"
          defaultValue={LastName}
          disabled
          sx={EditProfileStyles.lastName}
        />
        <TextField
          label="Date Of Birth"
          defaultValue={DateOfBirth}
          sx={EditProfileStyles.dob}
          disabled
        />
      </Box>

      <Box>
        <Typography sx={EditProfileStyles.contactHeading}>
          Contact Details
        </Typography>
        <Box sx={EditProfileStyles.fieldsFirstRow}>
          <TextField
            label="Phone Number"
            defaultValue={PhoneNumber}
            disabled
            sx={EditProfileStyles.number}
          />
          <TextField
            label="Mail ID"
            defaultValue={EmailID}
            disabled
            sx={EditProfileStyles.mail}
          />
        </Box>
      </Box>

      <Box>
        <Typography sx={EditProfileStyles.addressHeading}>
          Residential Address
        </Typography>

        <TextField
          label="Address"
          defaultValue={Address}
          sx={EditProfileStyles.address}
        />

        <Box sx={EditProfileStyles.fieldsFirstRow}>
          <TextField
            label="Zip Code"
            defaultValue={ZipCode}
            sx={EditProfileStyles.zipCode}
          />

          <TextField
            select
            label="City"
            defaultValue={City}
            SelectProps={{
              native: true,
            }}
            sx={EditProfileStyles.city}
          >
            <option key={City} value={City}>
              {City}
            </option>
          </TextField>
        </Box>

        <Box sx={EditProfileStyles.fieldsFirstRow}>
          <TextField
            select
            label="State"
            defaultValue={State}
            SelectProps={{
              native: true,
            }}
            sx={EditProfileStyles.state}
          >
            <option key={State} value={State}>
              {State}
            </option>
          </TextField>

          <TextField
            select
            label="Country"
            defaultValue={Country}
            SelectProps={{
              native: true,
            }}
            sx={EditProfileStyles.country}
          >
            <option key={Country} value={Country}>
              {Country}
            </option>
          </TextField>
        </Box>
      </Box>
    </Box>
  );
}
export default EditProfilePage;
