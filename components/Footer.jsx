import React from 'react'
import Link from 'next/link';
import { motion, AnimateSharedLayout } from 'framer-motion';

const Footer = ({left, middle, right}) => {
  return (
    <AnimateSharedLayout>
      <div className="h-48 py-10"></div>
      <footer className="fixed w-full bottom-0 bg-white bg-opacity-70 backdrop-blur-lg pt-3 md:hidden">
        <div className="grid grid-cols-7 grid-rows-7 h-16 gap-4 m-10 mt-0">
          <Link href="/schedule">
            <motion.div
              layoutId="bottomLeft"
              className={`bg-pink rounded-full ${left} row-end-7`}
            ></motion.div>
          </Link>
          <Link href="/tasks">
            <motion.div
              layoutId="bottomMiddle"
              className={`bg-blue rounded-full ${middle} row-end-7`}
            ></motion.div>
          </Link>
          <Link href="/projects">
            <motion.div
              layoutId="bottomRight"
              className={`bg-green rounded-full ${right} row-end-7`}
            ></motion.div>
          </Link>
        </div>
      </footer>
    </AnimateSharedLayout>
  );
}

export default Footer