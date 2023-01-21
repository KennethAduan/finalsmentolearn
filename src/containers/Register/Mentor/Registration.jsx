import React from "react";
import Logo from "../../../assets/images/MentoLearn1.png";
import "../../../styles/Register/Mentor/Registration.css";
import Footer from "../../../components/Footer/FooterMain/Footer";
import TextField from "@mui/material/TextField";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
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
const Registration = () => {
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
      {/* Upper Logo */}
      <div className="">
        <div className="w-48 mt-4 ml-4 ">
          <a href="/">
            <img src={Logo} alt="MentoLearn Logo" />
          </a>
        </div>

        <div className="headTitle text-center">
          <h1 className="font-bold font-serif text-2xl">
            MENTOR REGISTRATION FORM
          </h1>
        </div>
      </div>
      <hr className="line-bottom horizontal bg-gray-300 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>
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

      {/* Start of Home Address */}
      <div className="mt-12">
        <h1 className="text-blue-400 font-bold ml-2 text-2xl">Home Address</h1>
        <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>

        <dir></dir>
      </div>

      <div className="security mt-12">
        <h1 className="text-blue-400 font-bold ml-2 text-3xl">Security</h1>
        <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-96 ml-2 "></hr>
      </div>
      <div className="notRobot mt-8 ml-8">
        <div className="rc-anchor rc-anchor-normal rc-anchor-light">
          <div className="rc-anchor-content">
            <div className="rc-inline-block">
              <div className="rc-anchor-center-container">
                <div className="rc-anchor-center-item rc-anchor-checkbox-holder">
                  <span
                    className="recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox recaptcha-checkbox-clearOutline"
                    role="checkbox"
                    aria-checked="false"
                    id="recaptcha-anchor"
                    // tabindex="0"
                    dir="ltr"
                    aria-labelledby="recaptcha-anchor-label"
                  >
                    <div
                      className="recaptcha-checkbox-border"
                      role="presentation"
                    ></div>
                    <div
                      className="recaptcha-checkbox-borderAnimation"
                      role="presentation"
                    ></div>
                    <div
                      className="recaptcha-checkbox-spinner"
                      role="presentation"
                    ></div>
                    <div
                      className="recaptcha-checkbox-spinnerAnimation"
                      role="presentation"
                    ></div>
                    <div
                      className="recaptcha-checkbox-checkmark"
                      role="presentation"
                    ></div>
                  </span>
                </div>
              </div>
            </div>
            <div className="rc-inline-block">
              <div className="rc-anchor-center-container">
                <label
                  className="rc-anchor-center-item rc-anchor-checkbox-label"
                  id="recaptcha-anchor-label"
                >
                  I'm not a robot
                </label>
              </div>
            </div>
          </div>
          <div className="rc-anchor-normal-footer">
            <div className="rc-anchor-logo-portrait" role="presentation">
              <div className="rc-anchor-logo-img rc-anchor-logo-img-portrait"></div>
              <div className="rc-anchor-logo-text">reCAPTCHA</div>
            </div>
            <div className="rc-anchor-pt">
              <a href="https://www.google.com/intl/en/policies/privacy/">
                Privacy
              </a>{" "}
              -{" "}
              <a href="https://www.google.com/intl/en/policies/terms/">Terms</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 mt-12 ml-8">
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800 font-bold"
            // for="flexCheckDefault"
          >
            I certify that above information are true and correct
          </label>
        </div>
      </div>
      <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-96 ml-2 "></hr>
      <div className="submitClearbtn mt-12 ml-8 mb-24 ">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-4xl leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
        <button
          type="button"
          className="ml-12 inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-4xl leading-tight uppercase  shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Clear
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
