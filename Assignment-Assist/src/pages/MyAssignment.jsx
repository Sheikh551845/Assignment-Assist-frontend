import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider';
import TakenCard from '../Components/TakenCard';
import { useLoaderData } from 'react-router-dom';
import PendingAssignmentCard from '../Components/PendingAssignmentCard';
import MyPendingCard from '../Components/MypendingCard';
import MyMarkedCard from '../Components/MyMarkedCard';

export default function MyAssignment() {

  const {theme, TakenAssignment,setTakenAssignment,CurrentUser}=useContext(AuthContext);
 

  const  MyTakenAssignment= TakenAssignment.filter(Assignment => Assignment.CurrentUser == CurrentUser);
 
 


  const AllSubmitted=useLoaderData()



  const  MySubmittedAssignments= AllSubmitted.filter(Assignment => Assignment.submitterEmail == CurrentUser);
  const  MyPendingAssignments= MySubmittedAssignments.filter(Assignment => Assignment.status == 'pending');
  const  MyMarkedAssignments= MySubmittedAssignments.filter(Assignment => Assignment.status == 'marked');
  

  console.log(MyPendingAssignments)
  
  


  return (
    <div>
     {
       theme ==="light"?<div><h1 className="text-2xl lg:text-3xl text-black font-bold my-5 ml-5 text-center">My Taken Assignments</h1>
      </div>
       :
       <div>
        <h1 className="text-2xl lg:text-3xl text-white font-bold my-5 ml-5 text-center">My Taken Assignments </h1>
        
       </div>
       
     }

<div className="topic-cards mx-auto flex flex-wrap gap-3 p-2">
   {
   MyTakenAssignment?.map((Assignment, index) => (
       <TakenCard key={index} Assignment={Assignment}></TakenCard>
     ))
 }
   </div>


   <div className="my-10">
     {
       theme ==="light"?<div><h1 className="text-2xl lg:text-3xl text-black font-bold my-5 ml-5 text-center">My Submitted Assignments</h1>
      </div>
       :
       <div>
        <h1 className="text-2xl lg:text-3xl text-white font-bold my-5 ml-5 text-center">My Submitted Assignments </h1>
        
       </div>
       
     }

<div className="">
  {
    MySubmittedAssignments.length == 0 ?    <div className='w-fit mx-auto mt-12'>
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
        <div className="topic-cards mx-auto flex flex-wrap gap-4 p-2 w-fit my-12">
         {
      MyPendingAssignments?.map((Assignment, index) => (
          <MyPendingCard key={index} Assignment={Assignment}></MyPendingCard>
        ))
    }
     {
      MyMarkedAssignments?.map((Assignment, index) => (
          <MyMarkedCard key={index} Assignment={Assignment}></MyMarkedCard>
        ))
    }
    </div>

   
    </div>
  
 
  }
   
   </div>
    </div>

    </div>
  )
}