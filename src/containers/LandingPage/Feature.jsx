import React from "react";
import FeatImage from "../../assets/LandingPage/Feature/experts.svg";
import FeatAnimation from "../../hooks/FeatureFunction";

const Feauture = () => {
  return (
    <div>
      <FeatAnimation />
      {/* <!-- Feature Section Start --> */}
      <div id="feature" className="bg-blue-100 py-44">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <div className="mb-5 lg:mb-0">
                <h2
                  className="ml2 mb-12 section-heading wow fadeInDown"
                  data-wow-delay="0.5s"
                >
                  Learn More About Us
                </h2>

                <div className="flex flex-wrap">
                  <div className="w-full sm:w-1/2 lg:w-1/2">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        <i className="lni lni-layers"></i>
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title">
                          Why connect with a mentor?
                        </h4>
                        <p className="text-base">
                          {" "}
                          Mentors in the Meet a Mentor community can help you
                          answer a variety of questions related to your career,
                          whatever stage you’re at.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/2">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        <i className="lni lni-gift"></i>
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title">Free to Use</h4>
                        <p className="text-base">
                          {" "}
                          Our platform offers free access to mentoring resources
                          for all users, including profile creation, search, and
                          connection features.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/2">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        <i className="lni lni-laptop-phone"></i>
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title">Fully Responsive</h4>
                        <p className="text-base">
                          {" "}
                          Our webapp is fully responsive, providing an optimal
                          viewing and user experience across all devices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/2">
                    <div className="m-3">
                      <div className="icon text-4xl">
                        <i className="lni lni-leaf"></i>
                      </div>
                      <div className="features-content">
                        <h4 className="feature-title">Easy to Customize</h4>
                        <p className="text-base">
                          {" "}
                          Our platform is easy to customize allows for
                          simple and convenient modifications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div
                className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <img className="" src={FeatImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature Section End --> */}
    </div>
  );
};

export default Feauture;
