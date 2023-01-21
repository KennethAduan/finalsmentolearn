import React from "react";

const Security = () => {
  return (
    <div className="security mt-12">
      <div className="mb-8 mt-12 ml-8">
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800 font-bold"
            // for="flexCheckDefault"
          >
            I certify that above information are true and correct
          </label>
        </div>
      </div>
      <div className="notRobot mt-8 ml-8">
        <div className="rc-anchor rc-anchor-normal rc-anchor-light">
          <div className="rc-anchor-content">
            <div className="rc-inline-block">
              <div className="rc-anchor-center-container">
                <div className="rc-anchor-center-item rc-anchor-checkbox-holder">
                  <span
                    className="recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox recaptcha-checkbox-clearOutline"
                    role="checkbox"
                    aria-checked="false"
                    id="recaptcha-anchor"
                    // tabindex="0"
                    dir="ltr"
                    aria-labelledby="recaptcha-anchor-label"
                  >
                    <div
                      className="recaptcha-checkbox-border"
                      role="presentation"
                    ></div>
                    <div
                      className="recaptcha-checkbox-borderAnimation"
                      role="presentation"
                    ></div>
                    <div
                      className="recaptcha-checkbox-spinner"
                      role="presentation"
                    ></div>
                    <div
                      className="recaptcha-checkbox-spinnerAnimation"
                      role="presentation"
                    ></div>
                    <div
                      className="recaptcha-checkbox-checkmark"
                      role="presentation"
                    ></div>
                  </span>
                </div>
              </div>
            </div>
            <div className="rc-inline-block">
              <div className="rc-anchor-center-container">
                <label
                  className="rc-anchor-center-item rc-anchor-checkbox-label"
                  id="recaptcha-anchor-label"
                >
                  I'm not a robot
                </label>
              </div>
            </div>
          </div>
          <div className="rc-anchor-normal-footer">
            <div className="rc-anchor-logo-portrait" role="presentation">
              <div className="rc-anchor-logo-img rc-anchor-logo-img-portrait"></div>
              <div className="rc-anchor-logo-text">reCAPTCHA</div>
            </div>
            <div className="rc-anchor-pt">
              <a href="https://www.google.com/intl/en/policies/privacy/">
                Privacy
              </a>{" "}
              -{" "}
              <a href="https://www.google.com/intl/en/policies/terms/">Terms</a>
            </div>
          </div>
        </div>
      </div>

      <div className="submitClearbtn mt-12 ml-8 mb-24 ">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-2xl leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
        {/* <button
          type="button"
          className="ml-12 inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-2xl leading-tight uppercase  shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Clear
        </button> */}
      </div>
    </div>
  );
};

export default Security;
