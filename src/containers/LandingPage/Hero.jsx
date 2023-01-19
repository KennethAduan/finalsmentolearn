import React from "react";
import HeroImage from "../../assets/LandingPage/Hero/educator.svg";
import "../../styles/LandingPage/Hero.css";
import HeroAnimation from "../../hooks/HeroAnimation";
const Hero = () => {
  return (
    <div>
      <HeroAnimation />
      {/* <!-- Hero Area Start --> */}
      <section id="hero-area" className="bg-blue-100 pt-48 pb-10">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <h2
                className="text-4xl font-bold leading-snug text-gray-700 mb-10 wow fadeInUp"
                data-wow-delay="1s"
              >
                Unlock your full potential with a personalized mentoring
                <br className="hidden lg:block" /> experience tailored to your
                unique goals and needs.
                <br />
                <h1 className="ml3 mt-12">The best part? It’s all free.</h1>
              </h2>

              <div
                className="text-center mb-10 wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <a href="/home" rel="nofollow" className="btn">
                  Get Started
                </a>
              </div>
              <div className="text-center wow fadeInUp" data-wow-delay="1.6s">
                <img
                  className="img-fluid mx-auto heroImage"
                  src={HeroImage}
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Area End --> */}
    </div>
  );
};

export default Hero;
