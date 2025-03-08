import React, { useRef, useState, useEffect } from "react";
import { Hero } from "../components";
import { contact, email } from "../assets";
import CustomInput from "../components/CustomInput";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import Flower from "../assets/flower.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../components/AnimatedText";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.set({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = (data) => {
    let errors = {};
    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(data.phone)) {
      errors.phone = "Invalid phone number format";
    }
    if (!data.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      try {
        const response = await fetch(
          "https://formspree.io/f/xnnpalpo",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setFormStatus({
            submitted: true,
            success: true,
            message: "Thank you for your message! We'll get back to you soon.",
          });
          setFormData({
            name: "",
            email: "",
            message: "",
            phone: "",
          });
        } else {
          setFormStatus({
            submitted: true,
            success: false,
            message:
              data.error || "Something went wrong. Please try again later.",
          });
        }
      } catch (error) {
        setFormStatus({
          submitted: true,
          success: false,
          message: "Network error. Please check your connection and try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <div className="w-full block lg:hidden">
        <Hero bg={[contact]}>
          <AnimatedText text="Nourishing Lives, Empowering Farmers." />
          <p className="font-[DM Sans] font-medium text-[#ffffff] mt-5 text-lg text-center">
            Providing quality agro-commodity trade, food production, and modern
            farm solutions.
          </p>
        </Hero>
      </div>
      <div className="hidden lg:block">
        <Hero bg={[contact]} btn={false} />
      </div>

      <section id="contact" className="py-[100px] bg-white ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-2 gap-8 relative"
        >
          <div className="w-full bg-[#F8F7F7] rounded-3xl overflow-hidden ">
            <div className="px-3 lg:px-10 pt-10 lg:flex items-center">
              <div className="grid gap-3 w-full">
                <p className="font-[Averia Serif Libre] font-semibold mb-3 text-3xl lg:text-[32px] lg:pr-20 leading-[1.3] text-[#000]">
                  We'd love to hear from you! Get in touch
                </p>

                {formStatus.submitted && (
                  <div
                    className={`p-4 lg:px-5 lg:py-10 mb-4 rounded-xl shadow ${
                      formStatus.success
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {formStatus.message}
                    {formStatus.success && (
                      <button
                        onClick={() =>
                          setFormStatus({
                            submitted: false,
                            success: false,
                            message: "",
                          })
                        }
                        className="mt-2 lg:mt-5 bg-[#5C8A3F] hover:bg-[#64a13e] text-white font-[DM Sans] font-medium py-2 px-4 rounded-full"
                      >
                        Send another message
                      </button>
                    )}
                  </div>
                )}

                {!formStatus.success && (
                  <form onSubmit={handleSubmit}>
                    <CustomInput
                      placeholder="Enter your name"
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                    />

                    <CustomInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />

                    <CustomInput
                      placeholder="000000"
                      label="Phone Number"
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                    />

                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block Serif Libre] text-sm font-medium mb-2 text-black"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 font-[Averia Serif Libre] text-base rounded-3xl border bg-[#F8F7F7] ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm focus:outline-none focus:border-[#F16C21] sm:text-sm`}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#5C8A3F] lg:w-full hover:bg-[#64a13e] text-base text-white font-[DM Sans] font-medium py-3.5 px-5 flex flex-row justify-center my-12 items-center rounded-full"
                    >
                      {isSubmitting ? "Submitting..." : "Send a message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
            <img
              src={Flower}
              alt="flower-image"
              className="w-full h-[80px] object-cover"
            />
          </div>
          <div className="w-full flex justify-center items-center lg:px-10">
            <div className="w-full">
              <p className="font-[Averia Serif Libre] font-semibold mb-3 text-[32px] lg:pr-20 leading-[1.3] text-[#000]">
                We'd love to hear from you! Get in touch
              </p>

              <p className="text-[17px] text-[#1E1E1E] font-[DM Sans] font-normal">
                Got a question or interested in knowing more about Henstock
                Foods Limited? let us know how we can help, fill in the form or
                you contact us and we would get back to you as soon as possible.
              </p>

              <div className="mt-5">
                <div className="flex items-center space-x-4 mt-5">
                  <BsTelephone size={38} color="#F16C21" />
                  <div>
                    <p className="font-[DM Sans] font-semibold text-lg text-black">
                      Phone
                    </p>
                    <p className="font-[DM Sans] font-normal text-base text-black">
                      +234 708 222 2184, +234 811 868 4626
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-5">
                  <CiLocationOn size={38} color="#F16C21" />

                  <div>
                    <p className="font-[DM Sans] font-semibold text-lg text-black">
                      Address
                    </p>
                    <p className="font-[DM Sans] font-normal text-base text-black">
                      No. 18, Huambo Crescent Street, Zone 7, Abuja, Nigeria.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-5">
                  <CiMail size={38} color="#F16C21" />
                  <div>
                    <p className="font-[DM Sans] font-semibold text-lg text-black">
                      Email
                    </p>
                    <p className="font-[DM Sans] font-normal text-base text-black">
                      info@henstockfoods.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex space-x-5 items-center mt-8">
                <div className="p-3 flex justify-center items-center cursor-pointer rounded-full bg-[#EFEEEE]">
                  <SlSocialFacebook size={20} color="#F16C21" />
                </div>
                <div className="p-3 flex justify-center items-center cursor-pointer rounded-full bg-[#EFEEEE]">
                  <FaInstagram size={20} color="#F16C21" />
                </div>
                <div className="p-3 flex justify-center items-center cursor-pointer rounded-full bg-[#EFEEEE]">
                  <FaLinkedinIn size={20} color="#F16C21" />
                </div>
                <div className="p-3 flex justify-center items-center cursor-pointer rounded-full bg-[#EFEEEE]">
                  <RiTwitterXLine size={20} color="#F16C21" />
                </div>
                <div className="p-3 flex justify-center items-center cursor-pointer rounded-full bg-[#EFEEEE]">
                  <BiLogoGmail size={20} color="#F16C21" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="w-full py-10 lg:pt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.157816130045!2d7.456850374775756!3d9.049365488670324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b3fdbd9fd89%3A0x7bad714ad1499ed4!2s18%20Huambo%20Cres%2C%20Wuse%2C%20Wupa%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1741092810980!5m2!1sen!2sng"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
