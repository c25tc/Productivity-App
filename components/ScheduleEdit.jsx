import React from "react";

const ScheduleEdit = () => {
  const rows = [];
  for (let i = 0; i < 24; i++) {
    let num = i % 12;
    if (num == 0) num = 12;
    if (i != 0) {
      rows.push(
        <>
          <div
            className="bg-slate-200 h-[2px] my-[14px] col-start-1 col-span-12"
            layoutId={`schedule-30-${i}`}
          ></div>
          <div
            className="col-start-1 col-span-1 font-bold translate-x-2"
            layoutId={`schedule-number-${i}`}
          >
            {num}
          </div>
          <div
            className="bg-slate-200 h-[2px] my-[14px] col-start-2 col-span-11"
            layoutId={`schedule-hour-${i}`}
          ></div>
        </>
      );
    }
  }
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-[24] w-full">{rows}</div>
      <div></div>;
    </>
  );
};

export default ScheduleEdit;
