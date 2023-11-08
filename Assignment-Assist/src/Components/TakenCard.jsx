import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';

export default function TakenCard(Assignment) {

  const {setTakenAssignment,TakenAssignment}=useContext(AuthContext)
    const {title, thumbnailUrl,_id,marks,difficultyLevel}=Assignment.Assignment;
    
   
   

    const textColor =
    difficultyLevel === "Easy"
      ? "green-500"
      : difficultyLevel === "Medium"
      ? "yellow-500"
      : difficultyLevel === "Hard"
      ? "red-500"
     :"black";

   
     const handleDelete =()=>
     {
      
      
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
              console.log(_id);
     
                fetch(`https://assignment-assist-back-end.vercel.app/MyTakenAssignment/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res =>res.json()
                      )
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Removed!',
                                'Assignment has been removed.',
                                'success'
                            )
                            const remaining = TakenAssignment.filter(Assignment => Assignment._id !== _id);
                            setTakenAssignment(remaining);
                           
                        }
                    })
     
            }
        })
       }
     
     
    
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
    <div className="p-6 pt-0 flex flex-row gap-2 justify-center">
    <Link to={`/AssignmentSubmission/${_id}`}> 
  <button
    className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-400 transition-all hover:shadow-lg hover:shadow-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
   Submit Assignment
  </button>
  </Link>
 
  <button
    className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-400 transition-all hover:shadow-lg hover:shadow-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  onClick={handleDelete}
  >
    Remove
  </button>
   
    </div>
    </div>
    </div>
  )
}
