import React from "react";
import "../../styles/LandingPage/Service.css";
import ServiceFuntion from "../../hooks/ServiceFunction.js";
const Service = () => {
  return (
    <div>
      <ServiceFuntion />
      {/* <!-- Services Section Start --> */}
      <section id="services" className="py-28">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.2s"
            >
              <h1 className="ml1">
                <span className="text-wrapper">
                  <span className="line line1"></span>
                  <span className="letters">
                    Our Mentors is awesome, they offer
                  </span>
                  <span className="line line2"></span>
                </span>
              </h1>
            </h2>
          </div>
          <div className="flex flex-wrap">
            {/* <!-- Services item --> */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                  <i className="lni lni-cog"></i>
                </div>
                <div>
                  <h3 className="service-title">Web Development</h3>
                  <p className="text-gray-600 text-xl">
                    Web development is the process of creating and maintaining
                    websites, including designing, coding, and implementing
                    features.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.6s">
                <div className="icon text-5xl">
                  <i className="lni lni-bar-chart"></i>
                </div>
                <div>
                  <h3 className="service-title">Graphic Design</h3>
                  <p className="text-gray-600 text-xl">
                    Graphic design is the art and practice of creating visual
                    content to communicate information and ideas.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.9s">
                <div className="icon text-5xl">
                  <i className="lni lni-briefcase"></i>
                </div>
                <div>
                  <h3 className="service-title">Business Branding</h3>
                  <p className="text-gray-600">
                    Business branding is the process of creating and
                    establishing a unique identity for a company or
                    organization.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="1.2s">
                <div className="icon text-5xl">
                  <i className="lni lni-pencil-alt"></i>
                </div>
                <div>
                  <h3 className="service-title">Content Writing</h3>
                  <p className="text-gray-600">
                    Content writing is the process of creating written material,
                    such as articles, blog posts, product descriptions, and
                    marketing copy, for the purpose of engaging and informing an
                    online audience.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="1.5s">
                <div className="icon text-5xl">
                  <i className="lni lni-mobile"></i>
                </div>
                <div>
                  <h3 className="service-title">App Development</h3>
                  <p className="text-gray-600">
                    App development is the process of designing, creating, and
                    maintaining software applications for mobile devices, such
                    as smartphones and tablets.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="1.8s">
                <div className="icon text-5xl">
                  <i className="lni lni-layers"></i>
                </div>
                <div>
                  <h3 className="service-title">Digital Marketing</h3>
                  <p className="text-gray-600">
                    Digital marketing is the process of promoting products,
                    services or brands through electronic media such as
                    internet, mobile, social media, search engines, email, and
                    other digital channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section End --> */}
    </div>
  );
};

export default Service;
