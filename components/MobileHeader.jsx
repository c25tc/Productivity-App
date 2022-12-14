import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const MobileHeader = ({name, color, topLeftButton, leftButtonLink}) => {

    var leftTextSize = "";
    var paddingX = "";
    if(topLeftButton == "+"){
      leftTextSize = "2xl";
      paddingX = "5";

    } else {
      leftTextSize = "2xl";
      paddingX = "0";
    }
  
  return (
    <div className="md:hidden">
      <div className={`fixed px-3 py-2 bg-${color} z-20 text-white rounded-xl top-4 right-4 font-bold text-2xl`}>user</div>
      <Link href={leftButtonLink}><div className={`fixed px-3 py-2 bg-${color} z-20 text-white rounded-xl top-4 px-${paddingX} left-4 font-bold text-${leftTextSize}`}>{topLeftButton}</div></Link>
      <div className="fixed z-10 w-full h-24 bg-white"></div>
      <header className="grid grid-cols-12 h-30 mb-10 pt-10 fixed top-10 w-full z-10 drop-shadow-xl">
        <div
          className={`bg-${color} text-center p-8 px-16 rounded-3xl text-white text-4xl font-extrabold col-span-10 col-start-2`}
        >
          {name}
        </div>
      </header>
      <div className="h-[216px] py-10"></div>
    </div>
  );
}

export default MobileHeader