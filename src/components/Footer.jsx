import React from "react";
import { grapescutout, henstockLogo, henstockLogoCircle } from "../assets";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { PATH_HOME } from "../routes/paths";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Sprinkle from "../assets/Sprinkle.svg";
import Logo from "../assets/logo.png";
import Ig from "../assets/Instagram.png";
import Lkd from "../assets/LinkedIn.png";
import Fb from "../assets/Facebook.png";
import X from "../assets/X.png";

const Footer = () => {
  return (
    <footer className="relative bg-white pt-10 lg:pt-20">
      <img
        src={Sprinkle}
        alt=""
        className="absolute z-[2] hidden lg:block top-0 right-20 mr-36 w-[80px] opacity-80"
      />
      <div className="w-[90%] lg:w-[85%] grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-5 mx-auto lg:py-10">
        <div className="w-full grid gap-7 lg:col-span-2">
          <Link to="/" className="lg:h-16 cursor-pointer flex items-center">
            <img
              src={Logo}
              alt="Henstock Logo"
              className="w-[75px] h-[75px] object-contain z-10 relative bg-transparent "
            />
          </Link>
          <p className="text-base text-black font-[DM Sans] font-normal">
            Henstock Foods Ltd. is a leading agro-commodity trading and food
            production company committed to innovation, quality, and
            sustainability in agriculture.
          </p>
          <div className="grid gap-3">
            <p className="font-[Averia Serif Libre] font-bold text-lg">
              Contact Information
            </p>
            <p className="font-[DM Sans] font-normal text-base">
              📩 Email: info@henstockfoods.com
            </p>
            <p className="font-[DM Sans] font-normal text-base">
              📍 Address: No. 18, Huambo Crescent Street, Zone 7, Abuja, Nigeria
            </p>
            <p className="font-[DM Sans] font-normal text-base">
              📞 Phone: +234 708 222 2184, +234 811 868 4626
            </p>
          </div>
        </div>

        <div className="w-full lg:col-span-3 grid xl:grid-cols-2 gap-4">
          <div className=" flex lg:justify-center">
            <div className="flex justify-evenly flex-wrap gap-16 lg:mt-8">
              <div className="">
                <h4 className="text-lg font-bold font[Averia Serif Libre] text-black mb-4">
                  Quick links
                </h4>
                <ul className="grid gap-3">
                  <li>
                    <Link
                      to={PATH_HOME.general.home}
                      className="text-[black] font-[DM Sans] font-normal text-base hover:text-[#5C8A3F]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATH_HOME.general.about}
                      className="text-[black] font-[DM Sans] font-normal text-base hover:text-[#5C8A3F]"
                    >
                      About-us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATH_HOME.general.services}
                      className="text-[black] font-[DM Sans] font-normal text-base hover:text-[#5C8A3F]"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATH_HOME.general.contact}
                      className="text-[black] font-[DM Sans] font-normal text-base hover:text-[#5C8A3F]"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <h4 className="text-lg font-bold font[Averia Serif Libre] text-black mb-4">
                  Quick links
                </h4>
                <ul className="grid gap-3">
                  <li>
                    <Link
                      to={PATH_HOME.general.home}
                      className="text-[black] flex items-center space-x-2 font-[DM Sans] font-normal text-base hover:text-[#5C8A3F]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="22"
                        height="22"
                        viewBox="0 0 48 48"
                      >
                        <radialGradient
                          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                          cx="19.38"
                          cy="42.035"
                          r="44.899"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#fd5"></stop>
                          <stop offset=".328" stop-color="#ff543f"></stop>
                          <stop offset=".348" stop-color="#fc5245"></stop>
                          <stop offset=".504" stop-color="#e64771"></stop>
                          <stop offset=".643" stop-color="#d53e91"></stop>
                          <stop offset=".761" stop-color="#cc39a4"></stop>
                          <stop offset=".841" stop-color="#c837ab"></stop>
                        </radialGradient>
                        <path
                          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                        ></path>
                        <radialGradient
                          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                          cx="11.786"
                          cy="5.54"
                          r="29.813"
                          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#4168c9"></stop>
                          <stop
                            offset=".999"
                            stop-color="#4168c9"
                            stop-opacity="0"
                          ></stop>
                        </radialGradient>
                        <path
                          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                        ></path>
                        <circle
                          cx="31.5"
                          cy="16.5"
                          r="1.5"
                          fill="#fff"
                        ></circle>
                        <path
                          fill="#fff"
                          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                        ></path>
                      </svg>
                      <span>Instagram</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATH_HOME.general.about}
                      className="text-[black] flex items-center space-x-2 font-[DM Sans] font-normal text-base hover:text-[#5C8A3F]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="22"
                        height="22"
                        viewBox="0 0 30 30"
                      >
                        <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
                      </svg>
                      <span>Twitter</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATH_HOME.general.services}
                      className="text-[black] flex items-center space-x-2 font-[DM Sans] font-normal text-base hover:text-[#5C8A3F]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="22"
                        height="22"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#039be5"
                          d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                        ></path>
                      </svg>
                      <span>FaceBook</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={PATH_HOME.general.contact}
                      className="text-[black] flex items-center space-x-2 font-[DM Sans] font-normal text-base hover:text-[#5C8A3F]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="22"
                        height="22"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#0078d4"
                          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                        ></path>
                        <path
                          d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                          opacity=".07"
                        ></path>
                        <path
                          fill="#fff"
                          d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                        ></path>
                      </svg>
                      <span>LinkedIn</span>
                      
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full space-y-4 pt-8">
            <p className="font-[Averia Serif Libre] font-bold text-lg">
              Stay updated
            </p>
            <p className="text-base text-black font-[DM Sans] font-normal">
              Subscribe to our newsletter for the latest agricultural insights,
              product updates, and market trends!
            </p>

            <div className="w-full justify-center items-center mt-10">
              <div className="mx-auto flex justify-between items-center bg-[#F5F5F5] rounded-full">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email address"
                  className="p-3.5 w-full font-[DM Sans] outline-none text-[#fff] bg-transparent border-none"
                />
                <button
                  className="font-[DM Sans] font-medium text-base text-white rounded-full bg-[#5C8A3F] px-8 py-3.5"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[85%] mx-auto flex justify-between items-center py-10 mt-5">
      <p className="text-black text-base font-[DM Sans] font-normal">All Rights Reserved 2025 | <span className=" font-semibold">HenStock Foods</span></p>
      <p className="text-black text-base font-[DM Sans] font-normal">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
