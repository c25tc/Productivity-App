import React from 'react'

const NewTask = () => {
  return (
    <div className="mx-10 flex my-3">
      <input
        type="text"
        className="bg-blue p-3 text-white font-bold rounded-xl flex-1 focus:outline-none placeholder:text-white placeholder:opacity-70"
        placeholder="new task..."
      />
    </div>
  );
}

export default NewTask