import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider';
import TakenCard from '../Components/TakenCard';
import { useLoaderData } from 'react-router-dom';
import PendingAssignmentCard from '../Components/PendingAssignmentCard';
import MyPendingCard from '../Components/MypendingCard';
import MyMarkedCard from '../Components/MyMarkedCard';
import FeatureCard from '../Components/FeatureCard';
import { HashLoader } from 'react-spinners';

export default function MyAssignment() {

  const {theme, TakenAssignment,setTakenAssignment,CurrentUser,data,loading}=useContext(AuthContext);
 

  const  MyTakenAssignment= TakenAssignment.filter(Assignment => Assignment.CurrentUser == CurrentUser);
 
 


  const AllSubmitted=useLoaderData()


  const  MyCreatedAssignments= data.filter(Assignment => Assignment.email == CurrentUser);
  const  MySubmittedAssignments= AllSubmitted.filter(Assignment => Assignment.submitterEmail == CurrentUser);
  const  MyPendingAssignments= MySubmittedAssignments.filter(Assignment => Assignment.status == 'pending');
  const  MyMarkedAssignments= MySubmittedAssignments.filter(Assignment => Assignment.status == 'marked');
  

 
  
console.log(loading)

  return (

    <div>
      {
          loading == true?  <div className="flex justify-center items-center h-screen">
          {
            theme =="dark"? <HashLoader size={100} color='white'/>:<HashLoader size={100} color="#36d7b7"/>
          }
       
      </div>:
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
  
  
  
      <div className="my-10">
       {
         theme ==="light"?<div><h1 className="text-2xl lg:text-3xl text-black font-bold my-5 ml-5 text-center">My Created Assignments</h1>
        </div>
         :
         <div>
          <h1 className="text-2xl lg:text-3xl text-white font-bold my-5 ml-5 text-center">My Created Assignments </h1>
          
         </div>
         
       }
  
  <div className="">
    {
      MySubmittedAssignments.length == 0 ?    <div className='w-fit mx-auto mt-12'>
        {
        theme ==="light"?<div><h1 className="text-xl lg:text-2xl text-red-600 font-bold my-5 ml-5 text-center">No Assignment Created Yet!</h1>
       </div>
        :
        <div>
         <h1 className="text-xl lg:text-2xl text-white font-bold my-5 ml-5 text-center">No Assignment Created Yet! </h1>
         
        </div>
        
      }
      </div>:
      <div>
          <div className="topic-cards mx-auto flex flex-wrap gap-4 p-2 w-fit my-12">
           {
        MyCreatedAssignments?.map((Assignment, index) => (
            <FeatureCard key={index} Assignment={Assignment}></FeatureCard>
          ))
      }
      
      </div>
  
     
      </div>
    
   
    }
     
     </div>
      </div>
  
      </div>
      }
    </div>
   
  )
}