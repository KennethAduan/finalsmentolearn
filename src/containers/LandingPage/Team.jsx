import React from "react";
import Kenneth from "../../assets/LandingPage/Team/Kenneth.jpg";
import Angeles from "../../assets/LandingPage/Team/angeles.jpg";
import James from "../../assets/LandingPage/Team/james.jpg";
import Isla from "../../assets/LandingPage/Team/Isla.jpg";
import TeamAnimation from "../../hooks/TeamFunction";

const Team = () => {
  return (
    <div>
      <TeamAnimation />
      {/* <!-- Team Section Start --> */}
      <section id="team" className="py-24 text-center">
        <div className="container">
          <div className="text-center">
            <h2
              className="ml12 mb-4 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Our Team
            </h2>
            <div>
              <h3 classNameName="text-sm wow fadeInDown">
                MentoLearn wouldn’t be possible without the brilliant team at
                STI Pasay-EDSA. <br /> Take a peek at who’s behind it all.
              </h3>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            {/* <!-- Team Item Starts --> Kenneth Aduan*/}
            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="team-img relative">
                  <img className="img-fluid" src={Kenneth} alt="" />
                  <div className="team-overlay">
                    <ul className="flex justify-center">
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-indigo-500">
                          <i
                            className="lni lni-facebook-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-blue-400">
                          <i
                            className="lni lni-twitter-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-red-500">
                          <i
                            className="lni lni-instagram-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">John Kenneth B. Aduan</h3>
                  <p>Full-Stack Developer</p>
                </div>
              </div>
            </div>
            {/* <!-- Team Item Ends -->
          <!-- Team Item Starts --> Angeles Tabrilla*/}
            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="team-img relative">
                  <img className="img-fluid" src={Angeles} alt="" />
                  <div className="team-overlay">
                    <ul className="flex justify-center">
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-indigo-500">
                          <i
                            className="lni lni-facebook-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-blue-400">
                          <i
                            className="lni lni-twitter-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-red-500">
                          <i
                            className="lni lni-instagram-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">Angeles Tabrilla</h3>
                  <p>UX UI Designer</p>
                </div>
              </div>
            </div>
            {/* <!-- Team Item Ends -->
          <!-- Team Item Starts --> James Mortel*/}
            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="team-img relative">
                  <img className="img-fluid" src={James} alt="" />
                  <div className="team-overlay">
                    <ul className="flex justify-center">
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-indigo-500">
                          <i
                            className="lni lni-facebook-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-blue-400">
                          <i
                            className="lni lni-twitter-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-red-500">
                          <i
                            className="lni lni-instagram-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">James Mortel </h3>
                  <p>System Analyst</p>
                </div>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
            {/* <!-- Team Item Starts --> Isla*/}
            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="team-img relative">
                  <img className="img-fluid" src={Isla} alt="" />
                  <div className="team-overlay">
                    <ul className="flex justify-center">
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-indigo-500">
                          <i
                            className="lni lni-facebook-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-blue-400">
                          <i
                            className="lni lni-twitter-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="/" className="social-link hover:bg-red-500">
                          <i
                            className="lni lni-instagram-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">Raphael Isla </h3>
                  <p>Data Analyst</p>
                </div>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
        </div>
      </section>
      {/* <!-- Team Section End --> */}
    </div>
  );
};

export default Team;
