import React from "react";
import Angeles from "../../assets/LandingPage/Team/angeles.jpg";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RateReviewIcon from "@mui/icons-material/RateReview";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Message = () => {
  return (
    <div className="flex">
      <div className="bg-white flex w-96 h-12">
        <div>
          {" "}
          {/* User Profile */}
          <div className="mt-2 ml-2 mr-4">
            <Avatar
              alt="User Profile"
              src={Angeles}
              sx={{ width: 30, height: 30 }}
            />
          </div>
        </div>
        <div>
          <p className="text-black text-sm mt-4 font-bold">Messaging</p>
        </div>
      </div>
      <div className="flex mt-2 -ml-12">
        <div className="">
          <MoreHorizIcon />
        </div>
        <div>
          <RateReviewIcon />
        </div>
        <div>
          <KeyboardArrowUpIcon />
        </div>
      </div>
    </div>
  );
};

export default Message;
