import React from 'react'
import Link from 'next/link';

const Header = ({ name, left, middle, right, leftLink, rightLink }) => {
  return (
    <div>
      <header className="grid grid-cols-6 gap-4 h-30 mb-10 py-10 fixed top-0 w-full bg-white bg-opacity-70 backdrop-blur-lg z-10">
        
        <Link href={`/${leftLink}`}><div className={`bg-${left} rounded-r-3xl bg-opacity-100`}></div></Link>
        
        <div className={`bg-${middle} text-center p-8 rounded-3xl text-white text-4xl font-extrabold col-span-4`}>
          {name}
        </div>
        <Link  href={`/${rightLink}`}><div className={`bg-${right} rounded-l-3xl`}></div></Link>
      </header>
      <div className="h-48 py-10"></div>
    </div>
  );
};

export default Header