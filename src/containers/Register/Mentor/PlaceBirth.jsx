import React from "react";
import TextField from "@mui/material/TextField";

const PlaceBirth = () => {
  return (
    <div>
      {/* Start of Place of birth */}
      <div className="mt-12">
        <h1 className="text-blue-400 font-bold ml-2 text-2xl">
          {" "}
          Place of Birth
        </h1>
        <hr className="line-bottom horizontal bg-blue-400 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>
      </div>
      <div className="grid gap-x-8 gap-y-3 grid-cols-3 ml-4 mr-4 mt-12">
        {/* Country */}
        <div className="">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Country"
            variant="outlined"
          />
        </div>
        {/* End of Country */}
        {/* City/Municipality/Provincial */}
        <div className="">
          <TextField
            fullWidth
            id="outlined-basic"
            label="City/Municipality/Provincial"
            variant="outlined"
          />
        </div>
        {/* End of City/Municipality/Provincial */}
      </div>
      <div className="mb-72">
        <div class="mt-12 ml-8 w-96 h-16">
          <h4 className="mb-2">Upload Signature</h4>
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PlaceBirth;
