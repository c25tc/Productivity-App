import { motion } from "framer-motion";
import React from "react";

const Project = ({ name }) => {
  return (
    <div className="mx-10 flex my-1 md:mx-32">
      <div className="bg-green p-2 px-4 text-white font-bold rounded-xl flex-1">
        {name}
      </div>
    </div>
  );
};

export default Project;
