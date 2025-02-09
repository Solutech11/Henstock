import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { henstockLogo } from "../assets";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set current page based on the location pathname
    const path = location.pathname;
    if (path === "/") {
      setCurrentPage("home");
    } else if (path === "/about") {
      setCurrentPage("about");
    }  else if (path === "/services") {
      setCurrentPage("services");
    } else if (path === "/contact") {
      setCurrentPage("contact");
    }
  }, [location.pathname]);

  const [currentPage, setCurrentPage] = useState(() => {
    // Set initial current page based on the location pathname
    const path = location.pathname;
    if (path === "/") {
      return "home";
    } else if (path === "/about") {
      return "about";
    } else if (path === "/services") {
      return "services";
    } else if (path === "/contact") {
      return "contact";
    }
  });

  return (
    <nav
      className={`box-border bg-white z-10 top-0 left-0 w-full transition-all duration-300 py-[5px]  ${
        scrolling ? "fixed shadow-sm" : "relative"
      }`}
    >
      <div className="max-w-[800px] mx-auto">
        <div className="mx-auto px-4 flex gap-4 justify-between items-center">
          <Link to="/" className="flex-grow">
            <img
              src={henstockLogo}
              alt=""
              className="w-[60px] relative z-10"
            />
          </Link>

          <ul className="hidden md:flex space-x-10 flex-grow justify-end mr-[40px] text-18">
            <li>
              <Link
                to="/"
                className={`${
                  currentPage === "home" ? "text-color-acsent-1" : "text-dark-3"
                } hover:text-color-acsent-2`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  currentPage === "about" ? "text-color-acsent-1" : "text-dark-3"
                } hover:text-color-acsent-2`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                className={`${
                  currentPage === "services" ? "text-color-acsent-1" : "text-dark-3"
                } hover:text-color-acsent-2`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  currentPage === "contact" ? "text-color-acsent-1" : "text-dark-3"
                } hover:text-color-acsent-2`}
              >
                Contact
              </Link>
            </li>
          </ul>


          <div className="md:hidden flex items-center">
            <FaBars
              className="text-2xl text-gray-700 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                className={`${
                  currentPage === "home" ? "text-color-acsent-1" : "text-dark-3"
                } hover:text-color-acsent-2`}
                onClick={() => {
                  setCurrentPage("home");
                  setMobileMenuOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  currentPage === "about" ? "text-color-acsent-1" : "text-dark-3"
                } hover:text-color-acsent-2`}
                onClick={() => {
                  setCurrentPage("about");
                  setMobileMenuOpen(false);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`${
                  currentPage === "services" ? "text-color-acsent-1" : "text-dark-3"
                } hover:text-color-acsent-2`}
                onClick={() => {
                  setCurrentPage("services");
                  setMobileMenuOpen(false);
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  currentPage === "contact" ? "text-color-acsent-1" : "text-dark-3"
                } hover:text-color-acsent-2`}
                onClick={() => {
                  setCurrentPage("contact");
                  setMobileMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;