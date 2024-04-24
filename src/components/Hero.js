import React from "react";

// import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <style>
      {`
        #title {
          font-size: 3.9rem;
          text-transform: uppercase;
        }
        `}
    </style>
    {/* <img
      className="mb-3 app-logo"
      src="https://www.its4logistics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f96501d7.svg&w=96&q=75"
      alt="React logo"
      width="120"
    /> */}
    <h1 className="mb-4" id="title">
      Supply Chain Excellence
    </h1>

    {/* <p className="lead">Supply Chain Excellence</p> */}
  </div>
);

export default Hero;
