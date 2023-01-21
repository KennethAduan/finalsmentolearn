import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import InputLabel from "@mui/material/InputLabel";
const BasicInfo = () => {
  const [suffix, setSuffix] = React.useState("");
  const [Gender, setGender] = React.useState("");
  const handleChange = (event) => {
    setSuffix(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  return (
    <div>
      <div className="mt-12">
        <h1 className="text-blue-400 font-bold ml-2 text-2xl">
          Basic information
        </h1>
        <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>
      </div>
      {/* BASIC INFORMATION  */}
      <div className="basicInfos grid gap-x-8 gap-y-4 grid-cols-4 ml-4 mr-4 mt-12">
        {/* First Name */}
        <div className="">
          <TextField
            id="outlined-basic"
            label="First name"
            variant="outlined"
          />
        </div>
        {/* Last Name */}
        <div className="">
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
        </div>
        {/* Middle Name */}
        <div>
          <TextField
            id="outlined-basic"
            label="Middle name"
            variant="outlined"
          />
        </div>
        {/* Suffix */}
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Suffix</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={suffix}
                label="Suffix"
                onChange={handleChange}
              >
                <MenuItem value={10}>Jr</MenuItem>
                <MenuItem value={20}>Sr</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="grid gap-x-8 gap-y-4 grid-cols-4 ml-4 mr-4 mt-12">
        {/* Phone Number */}
        <div>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
        </div>
        {/* Emai */}
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
        {/* Gender */}
        <div>
          {" "}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Gender}
                label="Gender"
                onChange={handleChangeGender}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={20}>Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/* Birthday  */}
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date of Birth"
                value={value}
                minDate={dayjs("2017-01-01")}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
      </div>
      {/* End of Basic Information */}
    </div>
  );
};

export default BasicInfo;
