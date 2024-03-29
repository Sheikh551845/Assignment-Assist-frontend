import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider';
import TakenCard from '../Components/TakenCard';
import { useLoaderData } from 'react-router-dom';
import PendingAssignmentCard from '../Components/PendingAssignmentCard';
import ChallengedCard from '../Components/ChallengedCard';
import { HashLoader } from 'react-spinners';

export default function SubmittedAssignment() {
  const {theme, TakenAssignment,setTakenAssignment,CurrentUser,DataLoading,AllSubmittedAssignment}=useContext(AuthContext);
 






  const  PendingAssignments= AllSubmittedAssignment?.filter(Assignment => Assignment.status == 'pending');
  const  challenged= AllSubmittedAssignment?.filter(Assignment => Assignment.status == 'challenged');

  

  


  return (
<div>

  <div>
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
     <div>
         {
          DataLoading == true ?  <div className="flex justify-center items-center h-screen">
          {
            theme =="dark"? <HashLoader size={100} color='white'/>:<HashLoader size={100} color="#36d7b7"/>
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
  
   }
    
    </div>
     </div>
 
 
 
     <div className='my-10'>
      {
        theme ==="light"?<div><h1 className="text-2xl lg:text-3xl text-black font-bold my-10 ml-5 text-center">Challenged Assignments</h1>
       </div>
        :
        <div>
         <h1 className="text-2xl lg:text-3xl text-white font-bold my-10 ml-5 text-center">Challenged Assignments </h1>
         
        </div>
        
      }
 
 <div className="">
   {
     challenged.length == 0 ?    <div className='w-fit mx-auto mt-12'>
       {
       theme ==="light"?<div><h1 className="text-xl lg:text-2xl text-red-600 font-bold my-5 ml-5 text-center">No Assignment Challenged Yet!</h1>
      </div>
       :
       <div>
        <h1 className="text-xl lg:text-2xl text-white font-bold my-5 ml-5 text-center">No Assignment Challenged Yet! </h1>
        
       </div>
       
     }
     </div>:
     <div>
         {
          DataLoading == true ?  <div className="flex justify-center items-center h-screen">
          {
            theme =="dark"? <HashLoader size={100} color='white'/>:<HashLoader size={100} color="#36d7b7"/>
          }
       
      </div>:

     
     <div className="topic-cards mx-auto flex flex-wrap gap-4 p-2 w-fit">
          {
       challenged?.map((Assignment, index) => (
           <ChallengedCard key={index} Assignment={Assignment}></ChallengedCard>
         ))
     }
     </div>
}
     </div>
  
   }
    
    </div>
     </div>
     </div>

</div>
 
   
   
  )
}