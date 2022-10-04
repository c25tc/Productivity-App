import React, { useState } from "react";

const NewProject = ({ setProject, projects }) => {
  const [inputValue, setInputValue] = useState("");

  const addProject = (event) => {
    event.preventDefault();
    setProject([
      ...projects,
      {
        name: inputValue,
        date: [9, 13, 22],
        tasks: [],
      },
    ]);
    setInputValue("");
  };

  return (
    <div className="mx-10 mt-1 mb-5 md:mx-32">
      <form onSubmit={addProject} className="w-full flex">
        <input
          type="text"
          className="bg-green p-2 px-4 text-white font-bold rounded-xl flex-1 focus:outline-none placeholder:text-white placeholder:opacity-70"
          placeholder="new project..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </form>
    </div>
  );
};

export default NewProject;
