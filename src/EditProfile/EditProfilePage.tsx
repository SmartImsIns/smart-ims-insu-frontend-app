import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import EditProfileStyles from "./EditProfileStyles";
import LeftArrow from "../assets/leftArrow.svg";
import EditProfileData from "../mockJson/CustomerDashboard/EditProfile.json";
import ProfilePicture from "../assets/ProfilePicture.svg";
import {CityName } from "../constants/CityName";
import {StateName} from "../constants/StateNames";
import { CountryName } from "../constants/CountryNames";
import {Title} from "../constants/Title"


function EditProfilePage() {
  return (
    <Box sx={EditProfileStyles.editProfile}>
      <Box sx={EditProfileStyles.editProfileText}>
        <img src={LeftArrow} alt="arrow" />
        <Typography sx={EditProfileStyles.text}> Edit Profile </Typography>
      </Box>

      <Box sx={EditProfileStyles.profilePic}>
        <img src={ProfilePicture} alt="Profilepic" />
      </Box>

      <Box sx={EditProfileStyles.fieldsFirstRow}>
        <TextField
          select
          label="Title"
          defaultValue={EditProfileData[0].title}
          SelectProps={{
            native: true,
          }}
          sx={EditProfileStyles.title}
        >
          {Title.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          label="First Name"
          defaultValue={EditProfileData[0].FirstName}
          disabled
          sx={EditProfileStyles.firstName}
        />
      </Box>
      <Box sx={EditProfileStyles.fieldsFirstRow}>
        <TextField
          label="Last Name"
          defaultValue={EditProfileData[0].LastName}
          disabled
          sx={EditProfileStyles.lastName}
        />

        <TextField
          label="Date Of Birth"
          defaultValue={EditProfileData[0].DateOfBirth}
          disabled
          sx={EditProfileStyles.dob}
        />
      </Box>

      <Typography sx={EditProfileStyles.contactHeading}>
        Contact Details
      </Typography>

      <Box sx={EditProfileStyles.fieldsFirstRow}>
        <TextField
          label="Phone Number"
          defaultValue={EditProfileData[0].PhoneNumber}
          disabled
          sx={EditProfileStyles.number}
        />

        <TextField
          label="Mail ID"
          defaultValue={EditProfileData[0].EmailID}
          disabled
          sx={EditProfileStyles.mail}
        />
      </Box>

      <Typography sx={EditProfileStyles.addressHeading}>
        Residential Address
      </Typography>

      <TextField
        label="Address"
        defaultValue={EditProfileData[0].Address}
        sx={EditProfileStyles.address}
      />
      <Box sx={EditProfileStyles.fieldsFirstRow}>
        <TextField
          label="Zip Code"
          defaultValue={EditProfileData[0].ZipCode}
          sx={EditProfileStyles.zipCode}
        />

        <TextField
          select
          label="City"
          defaultValue={EditProfileData[0].City}
          SelectProps={{
            native: true,
          }}
          sx={EditProfileStyles.city}
        >
          {CityName.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Box>

      <Box sx={EditProfileStyles.fieldsFirstRow}>
        <TextField
          select
          label="State"
          defaultValue={EditProfileData[0].State}
          SelectProps={{
            native: true,
          }}
          sx={EditProfileStyles.state}
        >
          {StateName.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          select
          label="Country"
          defaultValue={EditProfileData[0].Country}
          SelectProps={{
            native: true,
          }}
          sx={EditProfileStyles.country}
        >
          {CountryName.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Box>

      <Box sx={EditProfileStyles.button}>
        <Button sx={EditProfileStyles.whiteButton}>Cancle</Button>
        <Button sx={EditProfileStyles.blackButton}>Edit Profile</Button>
      </Box>
    </Box>
  );
}

export default EditProfilePage;
