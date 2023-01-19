import React from "react";

const Service = () => {
  return (
    <div>
      {/* <!-- Services Section Start --> */}
      <section id="services" class="py-24">
        <div class="container">
          <div class="text-center">
            <h2
              class="mb-12 section-heading wow fadeInDown"
              data-wow-delay="2s"
            >
              Our Mentors are awesome. They offer
            </h2>
          </div>
          <div class="flex flex-wrap">
            {/* <!-- Services item --> */}
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div class="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div class="icon text-5xl">
                  <i class="lni lni-cog"></i>
                </div>
                <div>
                  <h3 class="service-title">Web Development</h3>
                  <p class="text-gray-600">
                    Web development is the process of creating and maintaining
                    websites, including designing, coding, and implementing
                    features.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div class="m-4 wow fadeInRight" data-wow-delay="0.6s">
                <div class="icon text-5xl">
                  <i class="lni lni-bar-chart"></i>
                </div>
                <div>
                  <h3 class="service-title">Graphic Design</h3>
                  <p class="text-gray-600">
                    Graphic design is the art and practice of creating visual
                    content to communicate information and ideas.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div class="m-4 wow fadeInRight" data-wow-delay="0.9s">
                <div class="icon text-5xl">
                  <i class="lni lni-briefcase"></i>
                </div>
                <div>
                  <h3 class="service-title">Business Branding</h3>
                  <p class="text-gray-600">
                    Business branding is the process of creating and
                    establishing a unique identity for a company or
                    organization.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div class="m-4 wow fadeInRight" data-wow-delay="1.2s">
                <div class="icon text-5xl">
                  <i class="lni lni-pencil-alt"></i>
                </div>
                <div>
                  <h3 class="service-title">Content Writing</h3>
                  <p class="text-gray-600">
                    Content writing is the process of creating written material,
                    such as articles, blog posts, product descriptions, and
                    marketing copy, for the purpose of engaging and informing an
                    online audience.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div class="m-4 wow fadeInRight" data-wow-delay="1.5s">
                <div class="icon text-5xl">
                  <i class="lni lni-mobile"></i>
                </div>
                <div>
                  <h3 class="service-title">App Development</h3>
                  <p class="text-gray-600">
                    App development is the process of designing, creating, and
                    maintaining software applications for mobile devices, such
                    as smartphones and tablets.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div class="m-4 wow fadeInRight" data-wow-delay="1.8s">
                <div class="icon text-5xl">
                  <i class="lni lni-layers"></i>
                </div>
                <div>
                  <h3 class="service-title">Digital Marketing</h3>
                  <p class="text-gray-600">
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
