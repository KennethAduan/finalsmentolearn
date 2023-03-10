import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/MentoLearn1.png";
import Footer from "../../components/Footer/FooterMain/FooterDiff.jsx";
const About = () => {
  return (
    <body>
      <div>
        <div className="w-60 mt-4 ml-4 ">
          <Link to="/">
            <a href="/">
              {" "}
              <img src={Logo} alt="Mento Learn Logo" />
            </a>
          </Link>
        </div>
        <hr className="bg-gray-200 border-0 dark:bg-gray-700 p-0.5"></hr>
        <div className="content text-center about-contents">
          <div className="about mt-10 ">
            <h1 className="text-5xl font-bold mb-2 sm:font-white lg:text-5xl">
              About MentoLearn
            </h1>
            <p>
              Welcomee to MentoLearn, the world's largest professional network
              with more than 875 million <br /> members n more than 200
              countries and territories worldwide.
            </p>
          </div>
          <div className="vision mt-12">
            <h1 className="text-5xl font-bold mb-2">Vision</h1>
            <p>
              Create economic opportunity for every member of the global
              workforce.
            </p>
          </div>
          <div className="mission mt-12">
            <h1 className="text-5xl font-bold mb-2">Mission</h1>
            <p>
              Mento Learn is a community-based mission to help you to learn more
              about the world.
            </p>
          </div>
          <div className="WhoAreWe mt-12 mb-80">
            <h1 className="text-5xl font-bold mb-2">Who Are We?</h1>
            <p>
              Mento Learn began in co-founder John Kenneth Aduan living room in
              2022
              <br />
              and was official launched on January 15, 2023.
              <br />
              <br />
              Today, MentoLearn leads a diversified business with revenues from{" "}
              <br />
              membership subscriptions, advertising sales and recruitment <br />
              solutions under the leadership of Kenneth Aduan Lorem ipsum dolor
              sit amet consectetur adipisicing elit. <br />
            </p>
          </div>
          <hr className=" bg-gray-200 border-0 dark:bg-gray-700 mt-2 p-0.5"></hr>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default About;
