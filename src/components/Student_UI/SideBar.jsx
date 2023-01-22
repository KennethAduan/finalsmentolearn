import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import HubIcon from "@mui/icons-material/Hub";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="border bg-white w-64 h-screen border-black">
      {/* Task */}
      <div className="flex  mt-4">
        <div>
          <Link to="/Task">
            {" "}
            <AssignmentIcon style={{ fontSize: 50 }} />
          </Link>
        </div>
        <div>
          <p className="text-black text-base font-bold ml-2 mt-2">Your Task</p>
        </div>
        {/* End Task */}
      </div>

      {/* Notifications */}
      <div className="flex mt-4">
        <div>
          <NotificationsIcon style={{ fontSize: 50 }} />
        </div>
        <div>
          <p className="text-black text-base font-bold ml-2">Notifcations</p>
        </div>
      </div>
      {/* end  */}
      {/* Messaging */}
      <div className="flex  mt-4">
        <div>
          <EmailIcon style={{ fontSize: 50 }} />
        </div>
        <div>
          <p className="text-black text-base font-bold ml-2">Messaging</p>
        </div>
      </div>
      {/* end */}
      {/* Groups */}
      <div className="flex  mt-4">
        <div>
          <GroupsIcon style={{ fontSize: 50 }} />
        </div>
        <div>
          <p className="text-black text-base font-bold ml-2">Groups</p>
        </div>
      </div>
      {/* End*/}
      {/* Connections */}
      <div className="flex mt-4">
        <div>
          <HubIcon style={{ fontSize: 50 }} />
        </div>
        <div>
          <p className="text-black text-base font-bold ml-2">Connections</p>
        </div>
      </div>
      {/* End */}
      {/* Finding Kamentolearn */}
      <div className="flex  mt-4">
        <div>
          <PersonSearchIcon style={{ fontSize: 50 }} />
        </div>
        <div>
          <p className="text-black text-base font-bold ml-2">
            Finding <br />
            KaMentoLearn
          </p>
        </div>
      </div>
      {/* End */}
    </div>
  );
};

export default SideBar;
