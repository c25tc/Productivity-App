import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import TimeSelect from "./TimeSelect";

const Task = ({ name, tasks, setTasks, num }) => {
  const [settingsClass, setSettingsClass] = useState(
    "bg-green text-white font-bold rounded-xl transition-all duration-75 w-0"
  );
  const [open, setOpen] = useState(false);
  const [showOpen, setShowOpen] = useState(false);
  const [date, setDate] = useState(
    tasks[num].date[2] + "-" + tasks[num].date[0] + "-" + tasks[num].date[1]
  );
  //2022-10-12

  const taskRef = useRef(null);

  function changedDate(e) {
    console.log(e.target.value);
    const changedDate = e.target.value.split("-");
    console.log([
      parseInt(changedDate[0]),
      parseInt(changedDate[1]),
      parseInt(changedDate[2]),
    ]);
    setDate(e.target.value);
    const newTasks = tasks;
    newTasks[num].date = [
      parseInt(changedDate[1]),
      parseInt(changedDate[2]),
      parseInt(changedDate[0]),
    ];
    setTasks(newTasks);
    console.log(tasks)
  }

  useEffect(() => {
    if (tasks[num].date[0].toString().length == 1) {
      console.log("just month")
      setDate(
        tasks[num].date[2] +
          "-0" +
          tasks[num].date[0] +
          "-" +
          tasks[num].date[1]
      );
    }
    if (tasks[num].date[1].toString().length == 1) {
      console.log("just day")
      setDate(
        tasks[num].date[2] +
          "-" +
          tasks[num].date[0] +
          "-0" +
          tasks[num].date[1]
      );
    } 
    if (
      tasks[num].date[0].toString().length == 1 &&
      tasks[num].date[1].toString().length == 1
    ) {
      console.log("both")
      setDate(
        tasks[num].date[2] +
          "-0" +
          tasks[num].date[0] +
          "-0" +
          tasks[num].date[1]
      );
    }
      function mousedown(e) {
        let startX = e.pageX;
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);
        function mousemove(e) {
          if (e.pageX - startX < -20) setOpen(true);
          if (e.pageX - startX > 20) setOpen(false);
        }
        function mouseup(e) {
          window.removeEventListener("mousemove", mousemove);
          window.removeEventListener("mouseup", mouseup);
        }
      }
    function touchstart(e) {
      let startX = e.touches[0].pageX;
      taskRef.current.addEventListener("touchmove", touchmove);
      taskRef.current.addEventListener("touchend", touchend);
      function touchmove(e) {
        e.preventDefault();
        if (e.touches[0].pageX - startX < -20) setOpen(true);
        if (e.touches[0].pageX - startX > 20) setOpen(false);
      }
      function touchend(e) {
        window.removeEventListener("touchmove", touchmove);
        window.removeEventListener("touchend", touchend);
      }
    }

    taskRef.current.addEventListener("mousedown", mousedown);
    taskRef.current.addEventListener("touchstart", touchstart);
  }, []);

  useEffect(() => {
    if (open) {
      setSettingsClass(
        "transition-all text-white font-bold rounded-xl transition-all duration-500 w-full px-4 ml-2 flex"
      );
      setTimeout(() => {
        setShowOpen(true);
        setOpen(true);
      }, 200);
    } else {
      setSettingsClass(
        "transition-all text-white font-bold rounded-xl transition-all duration-500 w-0"
      );
      setShowOpen(false);
    }
  }, [open]);

  return (
    <div
      className="mx-10 flex my-1 select-none cursor-pointer md:mx-32"
      ref={taskRef}
    >
      <div className="bg-blue p-2 px-4 text-white font-bold rounded-xl flex-1 transition-all overflow-y-hidden overflow-x-clip whitespace-nowrap">
        {!open ? (
          name
        ) : (
          <div
            className="text-white -translate-x-[6px]"
            onClick={() => {
              setOpen(false);
            }}
          >
            ✓
          </div>
        )}
      </div>
      <div className={settingsClass}>
        {showOpen ? (
          <div className="flex justify-between w-full">
            <div className="bg-blue w-4/12 text-center p-0 rounded-xl block">
              <div className=" text-xs font-light m-0 p-0 leading-5">
                est. time
              </div>
              <div className="text-md font-bold m-0 p-0 leading-3">
                <TimeSelect tasks={tasks} setTasks={setTasks} num={num} />
              </div>
            </div>
            <div className="bg-blue w-4/12 text-center p-0 rounded-xl block">
              <div className="text-xs font-light m-0 p-0 leading-5">date</div>
              <div className=" text-md font-bold m-0 p-0 leading-3">
                {console.log(date)}
                <input
                  type="date"
                  className="bg-blue pl-1 text-white text-[8px] md:text-xs font-bold focus:outline-none sm:only:hide-calandar -translate-y-1 md:translate-x-2"
                  value={date}
                  onChange={changedDate}
                />
              </div>
            </div>
            <div className="bg-blue w-3/12 text-center p-0 rounded-xl">
              {/* <div className="p-2"><FontAwesomeIcon icon={faTrash}/></div> */}
              <div className="p-2">🗑</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Task;
