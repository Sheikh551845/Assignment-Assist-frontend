import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider';
import TakenCard from '../Components/TakenCard';
import { useLoaderData } from 'react-router-dom';
import PendingAssignmentCard from '../Components/PendingAssignmentCard';

export default function SubmittedAssignment() {
  const {theme, TakenAssignment,setTakenAssignment,CurrentUser}=useContext(AuthContext);
 


  const AllSubmitted=useLoaderData()



  const  PendingAssignments= AllSubmitted.filter(Assignment => Assignment.status == 'pending');

  

  


  return (
    <div>
     {
       theme ==="light"?<div><h1 className="text-2xl lg:text-3xl text-black font-bold my-5 ml-5 text-center">Submitted Assignments</h1>
      </div>
       :
       <div>
        <h1 className="text-2xl lg:text-3xl text-white font-bold my-5 ml-5 text-center">Submitted Assignments </h1>
        
       </div>
       
     }

<div className="">
  {
    PendingAssignments.length == 0 ?    <div className='w-fit mx-auto mt-12'>
      {
      theme ==="light"?<div><h1 className="text-xl lg:text-2xl text-red-600 font-bold my-5 ml-5 text-center">No Assignment Submitted Yet!</h1>
     </div>
      :
      <div>
       <h1 className="text-xl lg:text-2xl text-white font-bold my-5 ml-5 text-center">No Assignment Submitted Yet! </h1>
       
      </div>
      
    }
    </div>:
    <div className="topic-cards mx-auto flex flex-wrap gap-4 p-2 w-fit">
         {
      PendingAssignments?.map((Assignment, index) => (
          <PendingAssignmentCard key={index} Assignment={Assignment}></PendingAssignmentCard>
        ))
    }
    </div>
 
  }
   
   </div>
    </div>
  )
}