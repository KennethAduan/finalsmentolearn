import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const HomeAdress = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      {/* Start of Home Address */}
      <div className="mt-12">
        <h1 className="text-blue-400 font-bold ml-2 text-2xl">Home Address</h1>
        <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>
      </div>
      {/* Manila or Province */}
      <div className="flex mt-8">
        <div>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Metro Manila"
                control={<Radio />}
                label="Metro Manila"
              />
              <FormControlLabel
                value="Provincial"
                control={<Radio />}
                label="Provincial"
              />
            </RadioGroup>
          </FormControl>
        </div>
        {/* Select Province */}
        <div>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Province</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedValue}
                label="Province"
                onChange={handleChange}
              >
                <MenuItem value={10}>Abra</MenuItem>
                <MenuItem value={20}>Bicol</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      {/* Custom Address */}
      <div className="flex justify-around mt-12">
        {/* Select City */}
        <div>
          <Box sx={{ minWidth: 400 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedValue}
                label="Province"
                onChange={handleChange}
              >
                <MenuItem value={10}>Abra</MenuItem>
                <MenuItem value={20}>Bicol</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/* End of Select City */}
        {/* Select Brg */}
        <div>
          <Box sx={{ minWidth: 400 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Barangay
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedValue}
                label="Province"
                onChange={handleChange}
              >
                <MenuItem value={10}>Abra</MenuItem>
                <MenuItem value={20}>Bicol</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/* End of Select Brg. */}
        {/* Postal */}
        <div className="">
          <TextField
            id="outlined-basic"
            label="Postal Code"
            variant="outlined"
          />
        </div>
        {/* End of Postal Code */}
      </div>
      {/* Address Inputs */}
      <div className="grid gap-x-8 gap-y-4 grid-cols-4 ml-4 mr-4 mt-12">
        {/* Building Name */}
        <div className="font-bold">
          <h4 className="text-sm text-blue-600">
            (Rm./Fr./Unit. No & Bldg Name){" "}
            <span className="text-red-600">(Optional Only)</span>
          </h4>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Building Name"
            variant="outlined"
          />
        </div>{" "}
        {/* End of Building Name */}
        {/* House No. */}
        <div className="">
          <h4 className="text-sm text-blue-600 font-bold">
            (House/Lot & Blk No.){" "}
          </h4>
          <TextField
            fullWidth
            id="outlined-basic"
            label="House No."
            variant="outlined"
          />
        </div>
        {/* End of House no. */}
        {/* Street */}
        <div className="mt-4">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Street"
            variant="outlined"
          />
        </div>
        {/* End of Street */}
        {/* Subdivision */}
        <div className="mt-4">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Subdivision"
            variant="outlined"
          />
        </div>
        {/* End of Subdivison */}
      </div>
    </div>
  );
};

export default HomeAdress;
