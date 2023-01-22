import React from "react";
import Announcement from "../../../components/Student_UI/Announcent";
import Angels from "../../../assets/LandingPage/Team/angeles.jpg";
import James from "../../../assets/LandingPage/Team/james.jpg";
import CodingPost from "../../../assets/MainPage/StudentUI/coding.jpg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/joy/Input";
import Calendar from "../../../components/Student_UI/Calendar";
import PhotoImg from "../../../assets/MainPage/StudentUI/photo.svg";
import VidImg from "../../../assets/MainPage/StudentUI/vid.svg";
import Task from "../../../components/Student_UI/Task";
import AddIcon from "@mui/icons-material/Add";
import CommentIcon from "@mui/icons-material/Comment";
import SyncIcon from "@mui/icons-material/Sync";
import SendIcon from "@mui/icons-material/Send";
import MessBar from '../../../components/Student_UI/Message'

const NewsFeed = () => {
  return (
    <div>
      {/* Upper Part */}
      <div className="flex justify-around ">
        <div>
          {/* Announcement */}
          <div className="ml-64">
            <Announcement />
          </div>
          {/* End of Announcement */}
        </div>
        {/* Start a post */}
        <div className="Creatpost  bg-white border drop-shadow-md rounded-md w-full ml-12 mr-12 py-4 mt-8 px-4 h-36 ">
          <div className="flex ml-14 ">
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
                style={{ width: "500px" }}
                placeholder="Start a post, Angeles?"
                variant="outlined"
                size="lg"
              />
            </div>
            {/* End  */}
          </div>
          {/* Photo and Video Flex */}
          <div className="flex ml-16 mt-2">
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
                  <p className="ml-2 text-sm mt-2 text-black font-bold">
                    Video
                  </p>
                </div>
              </div>
            </div>
            {/* End Video */}
          </div>
          {/* End of Photo and vid flex */}
        </div>
        {/* Calendar */}
        <div className="mt-8 mr-64">
          <Calendar />
        </div>
        {/* End of calendar */}
      </div>
      {/* End of upper part */}
      {/* Feed part with and Task Flex */}
      <div className="feedPart flex justify-around -mt-44 ml-96">
        <div></div>
        {/* News Feed part */}
        <div className="col-start-2 col-span-4 flex justify-center">
          <div className="bg-white dow-md rounded-md w-full ml-12 mr-12  mt-8 py-4  ">
            <div className="iconAndName flex ml-8">
              <div className="profile">
                {/* User Profile */}
                <div className="mr-4">
                  <Avatar
                    alt="User Profile"
                    src={James}
                    sx={{ width: 56, height: 56 }}
                  />
                </div>
                {/* End of user profile */}
              </div>
              {/* User name */}
              <div className="name">
                <p className="text-black text-xl">
                  James Mortel{" "}
                  <span className="text-xs text-cyan-500">3rd+</span>
                  <br />{" "}
                  <span className="text-xs text-cyan-500">
                    Data Analyts at Google
                  </span>
                </p>
              </div>
              {/* End of name */}
              {/* Follow btn */}
              <div className="followButton ml-12">
                <AddIcon />
                <Button variant="text">Follow</Button>
              </div>
              {/* follow btn */}
            </div>
            {/* description */}
            <div className="descripTion ml-12 mt-4">
              <p className="text-black text-base mt-2">
                In 25 Hours, I'm premiering a video I've spent many hours
                creating. <br />
                <span className=""> What's on the agenda?</span>
              </p>
            </div>
            {/* end description */}
            <div className="imageOfnews w-full ml-12 mt-4">
              <img className="w-9/12" src={CodingPost} alt="Coding" />
            </div>
            {/* Like comment repost send */}
            <div>
              <div class="border-t-2 border-zinc-300 mt-2">
                <div className="flex justify-around">
                  {" "}
                  {/* like btn */}
                  <div className="flex">
                    <div className="">
                      <ThumbUpOffAltIcon />
                    </div>
                    <div>
                      <p className="text-black ml-2 text-base">Like</p>
                    </div>
                  </div>
                  {/* Comment */}
                  <div className="flex">
                    <div>
                      <CommentIcon />
                    </div>
                    <div>
                      <p className="text-black ml-2 text-base">Comment</p>
                    </div>
                  </div>
                  {/* repotst */}
                  <div className="flex">
                    <div>
                      <SyncIcon />
                    </div>
                    <div>
                      <p className="text-black ml-2 text-base">Repost</p>
                    </div>
                  </div>
                  {/* send */}
                  <div className="flex">
                    <div>
                      <SendIcon />
                    </div>
                    <div>
                      <p className="text-black ml-2 text-base">Send</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Task */}

        <div className="mt-44 mr-44">
          <Task />
        </div>

        {/* End of Task part */}
      </div>
      {/* End of Feed and Task flex */}
      <MessBar/>
    </div>
  );
};

export default NewsFeed;
