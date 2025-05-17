import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { henstockLogo } from "../assets";
import logo from "../assets/HFLogo2.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  {
    label: "Product",
    to: "/products",
    subMenu: [
      {
        name: "Sesame Seeds",
        to: "/products/sesame-seeds",
        bord: true,
      },
      {
        name: "Raw Cashew Nuts",
        to: "/products/cashew-nut",
        bord: true,
      },
      {
        name: "Cassia Tora",
        to: "/products/cassia-tora",
      },
      {
        name: "Neem Seeds",
        to: "/products/neem-seeds",
        bord: true,
      },
      {
        name: "Dried Split Ginger",
        to: "/products/dried-ginger",
        bord: true,
      },
      {
        name: "Soya Beans",
        to: "/products/soya-beans",
      },
      {
        name: "Cocoa",
        to: "/products/cocoa",
        bord: true,
      },
    ],
    gridCols: 2,
  },
  { to: "/contact", label: "Contact" },
];

const DesktopMenuDropdown = ({ menu, isScrolled, currentPath }) => {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  const isProductRoute = location.pathname.startsWith("/products");

  const isActive =
    menu.to === location.pathname ||
    (menu.label === "Product" && isProductRoute);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.div
      className="group w-full"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      {hasSubMenu ? (
        <div
          className={`
            flex items-center gap-1 transition font-medium text-[17px] cursor-pointer
            ${
              isActive
                ? isScrolled
                  ? "text-[#F16C21]"
                  : "text-[#FFFFFF]"
                : isScrolled
                ? "text-gray-800 hover:text-[#F16C21]"
                : "text-[#919191] hover:text-gray-200"
            }
          `}
        >
          {menu.label}
          <IoIosArrowDown
            className={`mt-[0.6px] transform duration-200 
              ${isHover ? "rotate-180" : "rotate-0"}
            `}
          />
        </div>
      ) : (
        <NavLink
          to={menu.to}
          end
          className={({ isActive }) => `
            flex items-center gap-1 transition font-medium text-[17px]
            ${
              isActive
                ? isScrolled
                  ? "text-[#F16C21]"
                  : "text-[#FFFFFF]"
                : isScrolled
                ? "text-gray-800 hover:text-[#F16C21]"
                : "text-[#919191] hover:text-gray-200"
            }
          `}
        >
          {menu.label}
        </NavLink>
      )}

      {hasSubMenu && (
        <motion.div
          className="absolute top-10 left-0 lg:left-72 w-[100%] pt-4 z-50"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`
              shadow-xl rounded-xl py-5 w-full 
              ${
                isScrolled
                  ? "bg-white/100 backdrop-blur-3xl shadow-xl text-black"
                  : "bg-white/30 backdrop-blur-3xl"
              }
            `}
          >
            <div
              className={`grid lg:grid-cols-3 ${
                menu.gridCols === 3
                  ? "grid-cols-3"
                  : menu.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {menu.subMenu.map((submenu, i) => (
                <Link
                  key={i}
                  to={submenu.to || "#"}
                  className={`relative cursor-pointer ${
                    submenu.bord === true && "border-r-2 border-white"
                  } `}
                >
                  <div className="rounded-lg py-3 px-3 group hover:bg-[#F16C21] mx-2">
                    <h6
                      className={`
                        font-semibold 
                        ${
                          isScrolled
                            ? "text-black group-hover:text-white"
                            : "text-white"
                        }`}
                    >
                      {submenu.name}
                    </h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setScrollY(currentScrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) setNavOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <header
      className={`
      fixed w-full top-0 z-40 
      transition-all duration-300 lg:shadow-md shadow-0 ease-in-out
      ${
        isScrolled
          ? "lg:bg-white bg-white shadow-md "
          : "lg:bg-transparent bg-white text-gray-900 lg:text-white"
      }
    `}
    >
      <div className="lg:w-[85%] mx-auto px-4 flex justify-between items-center h-[10vh]">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Henstock Logo"
            className="w-[90px] h-[90px] object-contain z-50"
          />
        </Link>

        {windowWidth > 768 && (
          <nav className="flex gap-10 rounded-full bg-white/10 backdrop-blur-sm px-10 mt-3 py-3">
            {links.map((link) => (
              <DesktopMenuDropdown
                key={link.label}
                menu={link}
                isScrolled={isScrolled}
                currentPath={location.pathname}
              />
            ))}
          </nav>
        )}

        <div className="hidden md:flex space-x-4">
          <a
            href="https://wa.link/8chsfl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              size={24}
              className={`
              transition-colors duration-300
              ${
                isScrolled
                  ? "text-gray-600 hover:text-green-500"
                  : "text-white hover:text-green-300"
              }
            `}
            />
          </a>

          <a href="#">
            <FiFacebook
              size={24}
              className={`
              transition-colors duration-300
              ${
                isScrolled
                  ? "text-gray-600 hover:text-blue-500"
                  : "text-white hover:text-blue-300"
              }
            `}
            />
          </a>

          <a
            href="https://www.instagram.com/henstockfoods__ltd/profilecard/"
            target="_blank"
          >
            <FiInstagram
              size={24}
              className={`
              transition-colors duration-300
              ${
                isScrolled
                  ? "text-gray-600 hover:text-pink-500"
                  : "text-white hover:text-pink-300"
              }
            `}
            />
          </a>
        </div>

        <div
          className="md:hidden cursor-pointer z-50 md:z-0"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <FaTimes size={25} className={`z-50 text-gray-800 `} />
          ) : (
            <FaBars size={25} className={`z-50 text-gray-800`} />
          )}
        </div>
      </div>

      {navOpen && (
        <div className="absolute top-0 left-0 z-40 bg-white w-full h-screen fixed px-8 py-16 md:hidden">
          <ul className="flex flex-col justify-center h-full">
            {links.map((link) => (
              <li key={link.label} className="py-4 text-center w-full">
                {link.subMenu ? (
                  <div className="text-lg font-semibold text-gray-700">
                    {link.label}
                  </div>
                ) : (
                  <Link
                    to={link.to}
                    onClick={handleMobileLinkClick}
                    className={`
                      text-lg font-semibold transition-colors duration-300
                      ${
                        location.pathname === link.to
                          ? "text-[#F16C21] font-bold"
                          : "text-gray-700 hover:text-[#F16C21]"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                )}
                {link.subMenu && (
                  <div className="mt-4 space-y-2">
                    {link.subMenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.to}
                        onClick={handleMobileLinkClick}
                        className={`
                          block text-sm
                          ${
                            location.pathname === subItem.to
                              ? "text-[#F16C21] font-semibold"
                              : "text-gray-600 hover:text-[#F16C21]"
                          }
                        `}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
