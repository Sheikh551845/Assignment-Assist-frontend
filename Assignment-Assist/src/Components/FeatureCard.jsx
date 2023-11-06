import React from 'react'
import { Link } from 'react-router-dom';

export default function FeatureCard(Assignment) {
    const {title, thumbnailUrl,_id,marks,difficultyLevel}=Assignment.Assignment;
    
   
   

    const textColor =
    difficultyLevel === "easy"
      ? "green-500"
      : difficultyLevel === "medium"
      ? "yellow-500"
      : difficultyLevel === "hard"
      ? "red-500"
     :"black";

    
      const dynamicClassName = `text-${textColor}`;
     
    
  return (
    <div className="mx-auto">
    <div className="relative flex w-[19rem] h-[28rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
    src={thumbnailUrl}
    alt=""
    className='h-52 w-full'
    />
    </div>
    <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {title}
    </h4>
    <p className="mt-3 block font-sans text-xl font-semibold leading-relaxed text-gray-700 antialiased">
    Marks : <span className="font-normal">{marks}</span>
    </p>
    <p className="mt-3 block font-sans text-xl font-semibold leading-relaxed text-gray-700 antialiased">
     Difficulty : <span className= {dynamicClassName}>{difficultyLevel}</span>
    </p>
    </div>
    <div className="p-6 pt-0 flex flex-row gap-2">
    <Link to={`/AssignmentDetails/${_id}`}> 
  <button
    className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    Show Details
  </button>
  </Link>
  <Link to={`/UpdateAssignment/${_id}`}> 
  <button
    className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500 transition-all hover:shadow-lg hover:shadow-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    Update Assignment
  </button>
  </Link>
   
    </div>
    </div>
    </div>
  )
}
