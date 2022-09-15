import React from 'react'

const NewProject = () => {
  return (
    <div className="mx-10 flex my-3">
      <input
        type="text"
        className="bg-green p-3 text-white font-bold rounded-xl flex-1 focus:outline-none placeholder:text-white placeholder:opacity-70"
        placeholder="new project..."
      />
    </div>
  );
}

export default NewProject