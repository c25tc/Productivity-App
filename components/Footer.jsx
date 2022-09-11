import React from 'react'

const Footer = ({left, middle, right}) => {
  return (
    <div>
      <div className="h-48 py-10"></div>
      <footer className="fixed w-full bottom-0 bg-white bg-opacity-70 backdrop-blur-lg pt-3 md:hidden">
        <div className="grid grid-cols-7 grid-rows-7 h-16 gap-4 m-10 mt-0">
          <div className={`bg-${left} rounded-full col-span-2 row-span-4 row-end-7`}></div>
          <div className={`bg-${middle} rounded-full col-span-3 row-span-5 row-end-7`}></div>
          <div className={`bg-${right} rounded-full col-span-2 row-span-4 row-end-7`}></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer