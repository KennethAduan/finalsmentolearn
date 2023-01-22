import React from "react";
import Header from "../../../components/Header/HeaderMain/Header";
import SideBar from "../../../components/Student_UI/SideBar";
import Calendar from "../Calendar";
import MessForm from "../Message";
      {/* //TODO: This should be one page function */}

const Task = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-around mt-12 ">
        <div className="bg-white border border-black w-full h-screen ml-12 mr-12">
          <div className="ml-96 border border-black">
            <h1>h</h1>
          </div>
          {/* Side bar */}
          <div>
            <SideBar />
          </div>
          {/* end of side bar */}
        </div>
        <div className="mr-12">
          <Calendar />
        </div>
      </div>
      <div>
        <MessForm />
      </div>
    </div>
  );
};

export default Task;
