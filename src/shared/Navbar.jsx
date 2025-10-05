import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav
      className="d-flex justify-content-between align-items-center p-3 border  bg-light 

    mt-4

    rounded-pill

    mx-5

    position-fixed

    start-0
    end-0
    navbar navbar-expand-lg navbar-light bg-light fixed-top
    
    "
    >
      {/* Left Section */}

      <div className="d-flex align-items-center gap-2">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/fluency/48/location--v1.png"
          alt="logo"
        />
        <h2 className="m-0">Krypo</h2>
      </div>

      {/* Middle Section */}
      <div className="d-flex gap-4 d-lg-block d-none d-lg-flex">

        <Link to="/" className="text-decoration-none text-dark">
          Home
        </Link>
        <Link to="/about-us" className="text-decoration-none text-dark">
          About Us
        </Link>
        <Link to="/listing" className="text-decoration-none text-dark">
          Listing
        </Link>
        <Link to="/blog" className="text-decoration-none text-dark">
          Blog
        </Link>
        <Link to="/contact-us" className="text-decoration-none text-dark">
          Contact Us
        </Link>
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-2">
        <select
          className="form-select form-select-sm"
          style={{ width: "100px" }}
        >
          <option>English</option>
        </select>
        <img
          width="50"
          height="50"
          className="d-lg-none d-lg-block"
          src="https://img.icons8.com/ios-filled/50/menu--v1.png"
          alt="menu--v1"
        />
        <button className="btn btn-primary d-none  d-lg-block">Get a Quote</button>
      </div>
    </nav>
  );
}

export default Navbar;
