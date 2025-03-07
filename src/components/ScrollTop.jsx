import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and update visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate 25% of page height
      const scrollThreshold = document.documentElement.scrollHeight * 0.25;

      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Initial check in case page is already scrolled
    toggleVisibility();

    // Clean up the event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-16 right-3 lg:right-6 p-3 bg-[#5C8A3F] text-white rounded-full shadow-lg hover:bg-green-700 focus:outline-none z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;
