import React from 'react'
import { motion } from 'framer-motion';

const MobileHeader = ({name, color}) => {
  return (
    <div className="md:hidden">
      <div className="fixed z-10 w-full h-12 bg-white"></div>
      <header className="grid grid-cols-12 h-30 mb-10 pt-10 fixed top-0 w-full z-10 drop-shadow-xl">
        <div
          className={`bg-${color} text-center p-8 px-16 rounded-3xl text-white text-4xl font-extrabold col-span-10 col-start-2`}
        >
          {name}
        </div>
      </header>
      <div className="h-44 py-10"></div>
    </div>
  );
}

export default MobileHeader