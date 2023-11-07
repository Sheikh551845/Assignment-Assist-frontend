import React from 'react'
import { Link } from 'react-router-dom';

export default function PendingAssignmentCard(Assignment) {
    const{    title,
        thumbnailUrl,
       
        marks,
        
        dueDate,
       
        creatorEmail,
        submitterEmail,
        documentUrl,
        submittedDate,
        quickNote,
        status,
        creator,
        submitter,
        _id}=Assignment.Assignment;
    
   
   


     
    
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
    <p className="mt-3 block font-sans text-xl font-bold leading-relaxed text-gray-700 antialiased">
    Marks : <span className=" text-black font-normal">{marks}</span>
    </p>
    <p className="mt-3 block font-sans text-xl font-bold leading-relaxed text-gray-700 antialiased">
     Submitted by : <span className= "text-black font-normal">{submitter}</span>
    </p>

    <p className="mt-3 block font-sans text-xl font-bold leading-relaxed text-gray-700 antialiased">
      Submitted On : <span className= "text-black font-normal">{submittedDate}</span>
    </p>
    </div>
    <div className="p-6 pt-0 flex flex-row gap-2">
    <Link to={`/MarkAAssignment/${_id}`}> 
  <button
    className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    Mark Assignment
  </button>
  </Link>
  
  <button
    className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500 transition-all hover:shadow-lg hover:shadow-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
     Pending...
  </button>

   
    </div>
    </div>
    </div>
  )
}
