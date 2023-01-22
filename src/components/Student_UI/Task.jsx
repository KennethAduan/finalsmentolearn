import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Task = () => {
  return (
    <div className="bg-white mt-8 ml-4 h-64 w-60">
      <div className="flex justify-between">
        <div className="ml-2 mt-2">
          <h1 className="text-sm font-bold">Your Task</h1>
        </div>
        <div className="mr-2 mt-2">
          <AddIcon />
        </div>
      </div>
      <div class="border-t-2 border-zinc-300"></div>
    </div>
  );
};

export default Task;
