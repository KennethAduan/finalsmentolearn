import React from "react";
import TextField from "@mui/material/TextField";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
const SocialStats = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      {/* Start of Social Status */}
      <div className="mt-12">
        <h1 className="text-blue-400 font-bold ml-2 text-2xl">Social Status</h1>
        <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>
      </div>
      <div className="grid gap-x-8 gap-y-3 grid-cols-3 ml-4 mr-4 mt-12">
        {/* Nationality */}
        <div className="">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nationality"
            variant="outlined"
          />
        </div>
        {/* End of Nationality */}
        {/* Religion  */}
        <div className="">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Religion"
            variant="outlined"
          />
        </div>
        {/* End of Religion */}
        {/* Select Marital Status */}
        <div>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Marital
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
      </div>
    </div>
  );
};

export default SocialStats;
