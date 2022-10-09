import React from "react";
import { motion } from "framer-motion";

const Schedule = () => {
  const rows = [];
  for (let i = 0; i < 25; i++) {
    let num = i % 12;
    if (num == 0) num = 12;
      rows.push(
        <>
          <motion.div
            className="bg-slate-200 h-[2px] my-[14px] col-start-2 col-span-10"
            layoutId={`schedule-30-${i}`}
            key={`30-${i}`}
          ></motion.div>
          <motion.div
            className="col-start-2 col-span-1 font-bold translate-x-2 select-none"
            layoutId={`schedule-number-${i}`}
            key={`number-${i}`}
          >
            {num}
          </motion.div>
          <motion.div
            className="bg-slate-200 h-[2px] my-[14px] col-start-3 col-span-9"
            layoutId={`schedule-hour-${i}`}
            key={`hour-${i}`}
          ></motion.div>
        </>
      );
  }
  return (
    <div className=" grid grid-cols-12 grid-rows-[24] w-full">
      {rows}
    </div>
  );
};

export default Schedule;
