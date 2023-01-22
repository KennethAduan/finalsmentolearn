import React from "react";
import Announcement from "../../../components/Student_UI/Announcent";
import Angels from "../../../assets/LandingPage/Team/angeles.jpg";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/joy/Input";
import Calendar from "../../../components/Student_UI/Calendar";
import PhotoImg from "../../../assets/MainPage/StudentUI/photo.svg";
import VidImg from "../../../assets/MainPage/StudentUI/vid.svg";

const NewsFeed = () => {
  return (
    <div className="flex justify-between">
      <div>
        {/* Announcement */}
        <div>
          <Announcement />
        </div>
        {/* End of Announcement */}
      </div>

      {/* Start a post */}
      <div className="Creatpost  bg-white border drop-shadow-md rounded-md w-full ml-12 mr-12 py-4 mt-12 px-4 h-36 ">
        <div className="flex ">
          {/* User Profile */}
          <div className="mr-4">
            <Avatar
              alt="User Profile"
              src={Angels}
              sx={{ width: 56, height: 56 }}
            />
          </div>
          {/* End of user profile */}
          {/* TextField about post */}
          <div className="mt-2">
            <Input
              //   style={{ width: "900px" }}
              placeholder="Start a post, Angeles?"
              variant="outlined"
              size="lg"
            />
          </div>
          {/* End  */}
        </div>
        {/* Photo and Video Flex */}
        <div className="flex ml-4 mt-2">
          {/* Photo SVG */}
          <div className="flex mt-4">
            <div>
              <img className="w-8" src={PhotoImg} alt="" />
            </div>
            <div>
              <p className="ml-2 text-sm  text-black font-bold">Photo</p>
            </div>
          </div>
          {/* End */}
          {/* Video SVG */}
          <div className="flex mt-2 ml-4">
            <div className="flex">
              <div>
                <img className="w-8" src={VidImg} alt="" />
              </div>
              <div>
                <p className="ml-2 text-sm mt-2 text-black font-bold">Video</p>
              </div>
            </div>
          </div>
          {/* End Video */}
        </div>
        {/* End of Photo and vid flex */}
      </div>
      {/* Calendar */}
      <div className="mt-12 mr-4">
        <Calendar />
      </div>
    </div>
  );
};

export default NewsFeed;
