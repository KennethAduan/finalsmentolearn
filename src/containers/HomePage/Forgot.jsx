import React from "react";
import MentoLearnLogoUpper from "../../assets/images/MentoLearn1.png";
import Footer from "../../components/Footer/FooterMain/FooterDiff";
import "../../styles/HomePage/forgot.css";
const Forgot = () => {
  return (
    <div>
      <div className="h-screen">
        {/* Logo */}
        <div className="w-48 mt-4 ml-8">
          <a href="/">
            <img src={MentoLearnLogoUpper} alt="Mento Learn Logo" />
          </a>
        </div>
        <div className="flex justify-center mt-36 ">
          {/* BOX HERE */}
          <form className="holder border rounded-lg  bg-white shadow-md rounded px-12 pt-6 pb-12 mb-4 w-96">
            {/* Title */}
            <div className="Forgot">
              <h1 className="font-bold text-4xl">Forgot Passowrd?</h1>
              <p className="text-sm text-zinc-500 mt-2">
                Reset Password in two quick steps
              </p>
            </div>
            {/* Input Email */}
            <div className="mt-12">
              <input
                className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-2xl"
                id="username"
                type="text"
                placeholder="Email or Phone"
              />
            </div>
            {/* Reset Button */}
            <div className="ResetButton flex justify-center mt-12">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
              >
                Reset Password
              </button>
            </div>
            {/* Back button */}
            <div className="back flex justify-center mt-4">
              <a href="/home">
                <h1 className="font-bold">Back</h1>
              </a>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Forgot;
