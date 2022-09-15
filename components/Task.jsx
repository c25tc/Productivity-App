import { motion } from 'framer-motion';
import React from 'react'

const Task = ({name}) => {
  return (
    <div className="mx-10 flex my-1">
      <div className="bg-blue p-2 text-white font-bold rounded-xl flex-1">
        {name}
      </div>
    </div>
  );
}

export default Task