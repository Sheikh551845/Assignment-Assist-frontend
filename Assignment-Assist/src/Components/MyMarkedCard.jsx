import React from 'react'

export default function MyMarkedCard(Assignment) {
    const{    title,
        thumbnailUrl,
       
        marks,
        
      
        markedBy,
        givenMarks,
        feedback
        }=Assignment.Assignment;
    
   
   


     
    
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
    Given Marks : <span className="font-normal">{givenMarks}/{marks}</span>
    </p>
    <p className="mt-3 block font-sans text-xl font-semibold leading-relaxed text-gray-700 antialiased">
     Marked by : <span className= "text-black">{markedBy}</span>
    </p>

    <p className="mt-3 block font-sans text-xl font-semibold leading-relaxed text-gray-700 antialiased">
      Feedback: <span className= "text-black">{feedback}</span>
    </p>
    </div>
    <div className="p-6 pt-0 flex flex-row gap-2">
   
  
  <button
    className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500 transition-all hover:shadow-lg hover:shadow-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
     Marked
  </button>

   
    </div>
    </div>
    </div>
  )
}

