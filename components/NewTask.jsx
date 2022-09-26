import React, { useState } from "react";

const NewTask = ({ setTask, tasks, day }) => {
  const [inputValue, setInputValue] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    setTask([
      ...tasks,
      {
        name: inputValue,
        time: 60,
        date: day,
      },
    ]);
    setInputValue("");
  };

  return (
    <div className="mx-10 mt-1 mb-5">
      <form onSubmit={addTask} className="w-full flex">
        <input
          type="text"
          className="bg-blue p-2 px-4 text-white font-bold rounded-xl flex-1 focus:outline-none placeholder:text-white placeholder:opacity-70"
          placeholder="new task..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />

      </form>
    </div>
  );
};

export default NewTask;
