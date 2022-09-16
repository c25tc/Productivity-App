import React from 'react'
import Link from 'next/link';

const Header = ({ name, left, middle, right, leftLink, rightLink }) => {
  return (
    <div className="place-items-center hidden md:grid">
      <header className="grid grid-cols-6 gap-20 h-30 mb-10 py-10 fixed top-0 w-11/12 bg-white bg-opacity-70 backdrop-blur-lg z-10 md:gap-10 lg:20">
        
        <Link href={`/${leftLink}`}><div className={`bg-${left} rounded-3xl bg-opacity-100 m-2`}></div></Link>
        
        <div className={`bg-${middle} text-center p-8 rounded-3xl text-white text-4xl font-extrabold col-span-4`}>
          {name}
        </div>
        <Link  href={`/${rightLink}`}><div className={`bg-${right} rounded-3xl m-2`}></div></Link>
      </header>
      <div className="h-44 py-10"></div>
    </div>
  );
};

export default Header

