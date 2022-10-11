import React, { useRef, useEffect, useState } from "react";

const TimeSelect = ({ tasks, setTasks, num }) => {
  const [time, setTime] = useState([
    Math.floor(tasks[num].time / 60),
    tasks[num].time % 60,
  ]);
  let hours, minutes;

  function changedHour(e) {
    console.log(e.target.value)
    hours = e.target.value;
    minutes = time[1];
    console.log(hours, minutes)
    setTime([hours, minutes]);
  }
  function changedMinute(e) {
    minutes = parseInt(e.target.value);
    hours = time[0];
    setTime([hours, minutes]);
  }

  useEffect(() => {
    const newTasks = tasks;
    newTasks[num].time = time[0] * 60 + time[1];
    setTasks(newTasks);
  
  }, [time])
  

  return (
    <div className="flex justify-center">
      <div>
        <select
          name="hours"
          className="bg-blue focus:outline-none"
          style={{ WebkitAppearance: "none" }}
          value={time[0]}
          onChange={changedHour}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        h
      </div>
      <div>
        <select
          name="minutes"
          className="bg-blue focus:outline-none ml-2"
          style={{ WebkitAppearance: "none" }}
          value={time[1]}
          onChange={changedMinute}
        >
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
        m
      </div>
    </div>
  );
};

export default TimeSelect;
