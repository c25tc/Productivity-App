import { motion } from 'framer-motion';
import React from 'react'
const Day = ({day}) => {
  return (
    <div
      className="mx-10 font-bold text-xl mb-5"
    >
      {day}
    </div>
  );
}

export default Day