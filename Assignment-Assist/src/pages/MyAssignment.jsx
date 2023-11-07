import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider';
import TakenCard from '../Components/TakenCard';

export default function MyAssignment() {

  const {theme, TakenAssignment,setTakenAssignment,CurrentUser}=useContext(AuthContext);
 

  const  MyTakenAssignment= TakenAssignment.filter(Assignment => Assignment.CurrentUser == CurrentUser);

  

  
  


  return (
    <div>
     {
       theme ==="light"?<div><h1 className="text-2xl lg:text-3xl text-black font-bold my-5 ml-5 text-center">My Taken Assignment</h1>
      </div>
       :
       <div>
        <h1 className="text-2xl lg:text-3xl text-white font-bold my-5 ml-5 text-center">My Taken Assignment </h1>
        
       </div>
       
     }

<div className="topic-cards mx-auto flex flex-wrap gap-3 p-2">
   {
   MyTakenAssignment?.map((Assignment, index) => (
       <TakenCard key={index} Assignment={Assignment}></TakenCard>
     ))
 }
   </div>
    </div>
  )
}