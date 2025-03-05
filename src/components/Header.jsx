import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { henstockLogo } from "../assets";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detect scroll and set state
      setIsScrolled(currentScrollY > 50);
      setScrollY(currentScrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) setNavOpen(false);
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <header
    className={`
      fixed w-full top-0 z-40 
      transition-all duration-300 lg:shadow-md shadow-0 ease-in-out
      ${isScrolled 
        ? 'lg:bg-white bg-white shadow-md ' 
        : 'lg:bg-transparent bg-white text-gray-900 lg:text-white'
      }
    `}
  >
      <div className="lg:w-[85%] mx-auto px-4 flex justify-between items-center h-[10vh]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={henstockLogo}
            alt="Henstock Logo"
            className="w-[70px] h-[70px] object-contain z-50"
          />
        </Link>

        {/* Desktop Navigation */}
        {windowWidth > 768 && (
          <nav className="flex gap-10 rounded-full bg-white/10 backdrop-blur-sm px-10 mt-3 py-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  transition font-medium text-[17px]
                   ${isActive 
            ? (isScrolled 
              ? 'text-[#F16C21]'
              : 'text-[#FFFFFF]') 
            : (isScrolled 
              ? 'text-gray-800 hover:text-[#F16C21]' 
              : 'text-[#919191] hover:text-gray-200')
          }
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}

        {/* Social Icons (Visible on Desktop) */}
        <div className="hidden md:flex space-x-4">
          <FaWhatsapp
            size={24}
            className={`
              transition-colors duration-300
              ${isScrolled 
                ? 'text-gray-600 hover:text-green-500' 
                : 'text-white hover:text-green-300'}
            `}
          />
          <FiFacebook 
            size={24}
            className={`
              transition-colors duration-300
              ${isScrolled 
                ? 'text-gray-600 hover:text-blue-500' 
                : 'text-white hover:text-blue-300'}
            `}
          />
          <FiInstagram
            size={24}
            className={`
              transition-colors duration-300
              ${isScrolled 
                ? 'text-gray-600 hover:text-pink-500' 
                : 'text-white hover:text-pink-300'}
            `}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden cursor-pointer z-50 md:z-0"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <FaTimes 
              size={25} 
              className={`z-50 text-gray-800 `} 
            />
          ) : (
            <FaBars 
              size={25} 
              className={`z-50 text-gray-800`} 
            />
          )}
        </div>
      </div> 

      {/* Mobile Menu */}
      {navOpen && (
        <div className="absolute top-0 left-0 z-40 bg-white w-full h-screen fixed px-8 py-16 md:hidden">
          <ul className="flex flex-col justify-center h-full">
            {links.map((link) => (
              <li key={link.to} className="py-4 text-center w-full">
                <Link
                  to={link.to}
                  onClick={handleMobileLinkClick}
                  className={`
                    text-lg font-semibold transition-colors duration-300
                    ${location.pathname === link.to
                      ? 'text-[#F16C21] font-bold' 
                      : 'text-gray-700 hover:text-[#F16C21]'}
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;











// import React, { useState, useEffect } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
// import { FiFacebook, FiInstagram } from "react-icons/fi";
// import { henstockLogo } from "../assets";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/services", label: "Services" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(window.scrollY);
//   const [visible, setVisible] = useState(true);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > scrollY) {
//         setVisible(false); // Hide navbar when scrolling down
//       } else {
//         setVisible(true); // Show navbar when scrolling up
//       }
//       setScrollY(window.scrollY);
//     };

//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//       if (window.innerWidth > 768) setNavOpen(false); // Close mobile menu on desktop
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [scrollY]);

//   return (
//     <header
//       className={`fixed w-full h-[10vh] top-0 z-40 transition-transform duration-300 ease-in-out ${
//         visible ? "translate-y-0" : "-translate-y-full bg-white shadow-md"
//       }`}
//     >
//       <div className="lg:w-[85%] mx-auto px-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={henstockLogo}
//             alt="Henstock Logo"
//             className="w-[70px] h-[70px] object-contain z-50"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         {windowWidth > 768 && (
//           <nav className="flex gap-10 rounded-full bg-white/10 backdrop-blur-sm px-10 mt-3 py-3">
//             {links.map((link) => (
//               <NavLink
//                 key={link.to}
//                 to={link.to}
//                 className={({ isActive }) =>
//                   `transition font-medium text-lg ${
//                     isActive ? "text-[#F16C21]" : "text-[#000000]"
//                   }`
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}
//           </nav>
//         )}

//         {/* Social Icons (Visible on Desktop) */}
//         <div className="hidden md:flex space-x-4">
//           <FaWhatsapp
//             size={24}
//             className="text-gray-600 hover:text-green-500"
//           />
//           <FiFacebook size={24} className="text-gray-600 hover:text-blue-500" />
//           <FiInstagram
//             size={24}
//             className="text-gray-600 hover:text-pink-500"
//           />
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div
//           className="md:hidden cursor-pointer z-50 md:z-0"
//           onClick={() => setNavOpen(!navOpen)}
//         >
//           {navOpen ? <FaTimes size={28} className="z-50" /> : <FaBars size={28} className="z-50"/>}
//         </div>
//       </div> 

//       {/* Mobile Menu */}
//       {navOpen && (
//         <div className="absolute top-4 z-20 bg-white w-full h-screen fixed px-8 py-16 md:hidden">
//           <ul>
//             {links.map((link) => (
//               <li key={link.to} className="py-4 text-center">
//                 <Link
//                   to={link.to}
//                   onClick={() => setNavOpen(false)}
//                   className={`text-lg font-semibold ${
//                     location.pathname === link.to
//                       ? "text-[#E76F51]"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//             {/* <div className="mt-5 flex flex-col gap-3">
//               <Link to="/register" onClick={() => setNavOpen(false)}>
//                 <button className="w-full py-2 text-lg font-semibold border border-[#E76F51] rounded text-[#E76F51] hover:bg-[#E76F51] hover:text-white transition">
//                   Register
//                 </button>
//               </Link>
//               <Link to="/login" onClick={() => setNavOpen(false)}>
//                 <button className="w-full py-2 text-lg font-semibold bg-[#E76F51] text-white rounded hover:bg-[#c45b41] transition">
//                   Login
//                 </button>
//               </Link>
//             </div> */}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

