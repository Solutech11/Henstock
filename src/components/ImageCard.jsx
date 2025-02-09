import React from 'react'
import { nuts1 } from '../assets'
import { motion } from 'framer-motion';

const ImageCard = ({ bg, children }) => {
  return (
    <motion.div
      className={`relative w-[250px] h-[200px] rounded-lg flex justify-center items-end pb-9 overflow-hidden`}
      style={{ background: `url(${bg ? bg : nuts1})`, backgroundSize: "cover", backgroundPosition: "center" }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <motion.div
        className='z-0 absolute inset-0 bg-gradient-to-b from-transparent to-color-darkGreen'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <motion.p
        className='relative z-5 w-[50%] text-18 text-center text-color-acsent-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children ? children : "Some Random Text"}
      </motion.p>
    </motion.div>
  )
}

export default ImageCard
