import React from 'react'

const Project = ({name}) => {
  return (
    <div className="mx-10 flex my-3">
      <div className="bg-green p-3 text-white font-bold rounded-xl flex-1">
        {name}
      </div>
      <div className="bg-green grid items-center ml-3 px-3 rounded-xl">
        <img src="/three_dots.svg" alt="An SVG of an eye" />
      </div>
    </div>
  );
}

export default Project