import React from "react";
import Logo from "../../../assets/images/MentoLearn1.png";
import "../../../styles/Register/Mentor/Registration.css";
import Footer from "../../../components/Footer/FooterMain/Footer";
import BasisInfo from "./BasicInfo.jsx";
import HomeAddress from "./HomeAdress";
import SocialStats from "./SocialStats";
import PlaceBirth from "./PlaceBirth";
import Security from "./Security";
const Registration = () => {
  return (
    <div>
      {/* Upper Logo */}
      <div className="">
        <div className="w-48 mt-4 ml-4 ">
          <a href="/home">
            <img src={Logo} alt="MentoLearn Logo" />
          </a>
        </div>

        <div className="headTitle text-center">
          <h1 className="font-bold font-serif text-2xl">
            MENTOR REGISTRATION FORM
          </h1>
        </div>
      </div>
      <hr className="line-bottom horizontal bg-gray-300 border-0  mt-2 p-0.5 mr-2 ml-2 "></hr>
      {/* Basic Info */}
      <BasisInfo />
      {/* End of Basic Info */}
      {/* Home Add. */}

      <HomeAddress />
      {/* End of home add */}

      {/* Social stats */}
      <SocialStats />
      {/* End of social stats */}

      {/* Place of Birth */}
      <PlaceBirth />
      {/* End of Birth */}

      {/* Security */}
      <Security />
      {/* end of security */}
      <Footer />
    </div>
  );
};

export default Registration;
