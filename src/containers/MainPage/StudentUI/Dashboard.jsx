import React from "react";
import Header from "../../../components/Header/HeaderMain/Header";
import SideBar from "../../../components/Student_UI/SideBar";
import Calendar from "../../../components/Student_UI/Calendar";
import MessForm from "../../../components/Student_UI/Message.jsx";
const Dashboard = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      {/* //TODO: This should be one page function */}
      <div className="flex justify-around mt-12 ">
        <div className="bg-white border border-black w-full h-screen ml-12 mr-12">
          {/* Side bar */}
          <div>
            <SideBar />
          </div>
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

export default Dashboard;
