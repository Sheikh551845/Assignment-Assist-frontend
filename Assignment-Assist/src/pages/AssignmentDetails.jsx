import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import  { AuthContext } from '../Components/AuthProvider';
import Swal from 'sweetalert2';

export default function AssignmentDetails() {

  const {CurrentUser,setData, data:allData}=useContext(AuthContext);


  const navigate=useNavigate()
  
    const {_id}=useParams();
   
    const [TakenAssignment, setTakenAssignment] = useState([])
    const [exist, setExist]=useState([])

    useEffect(()=>{
        fetch("https://assignment-assist-back-end.vercel.app/MyTakenAssignment")
        .then ((res)=> res.json())
        .then((data)=>{setTakenAssignment(data);
          
        })
        } ,[])

        

        

   

    
   
     
   
    const data=useLoaderData();

    

    

    const [card, setCard]=useState([])
    
    useEffect(()=>{
       const findCard = data?.find(card=> card._id == _id)

       setCard(findCard);
      
    }
    ,[_id,data])
   

    const {title, imageUrl,description,dueDate,marks,difficultyLevel,email,thumbnailUrl,creator}=card;



     useEffect(()=>{
        const findCard = TakenAssignment?.find(card=> card._id == _id)
 
        if(findCard)
        {
           
            setExist(findCard);
        }
        
          
     }
     ,[TakenAssignment])

  
  

     const CartSubmit=()=>
     {
        
        if(!exist || exist.length==0){

            fetch('https://assignment-assist-back-end.vercel.app/MyTakenAssignment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({title, imageUrl,description,dueDate,marks,difficultyLevel,CurrentUser,thumbnailUrl,creator})
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                      toast.success("Assignment added to taken")
                      
                    }
                })
        }
        else{
            toast.error("Already added this assignment "); 
        }
     
     
         }
 
         
//Delete 
const handleDelete =()=>
{
 
  if(CurrentUser===email)
  {
   Swal.fire({
       title: 'Are you sure?',
       text: "You won't be able to revert this!",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Yes, delete it!'
   }).then((result) => {
       if (result.isConfirmed) {
         console.log(_id);

           fetch(`https://assignment-assist-back-end.vercel.app/AllAssignment/${_id}`, {
               method: 'DELETE'
           })
               .then(res =>res.json()
                 )
               .then(data => {
                   console.log(data);
                   if (data.deletedCount > 0) {
                       Swal.fire(
                           'Deleted!',
                           'Assignment has been deleted.',
                           'success'
                       )
                       const remaining = allData.filter(Assignment => Assignment._id !== _id);
                       setData(remaining);
                       navigate("/AllAssignment")
                   }
               })

       }
   })
  }
  else
  {
    toast.error("You are not the creator of this Assignment")
  }
}



  return (
    <div className="mx-auto">
    <div className=" py-12 mx-auto">
 <div className="h-[500px] rounded-md flex flex-col bg-no-repeat bg-cover" style={{ backgroundImage: `url('${imageUrl}')` }}>
   <div className="w-full h-[480px]">

   </div>
   <div className="w-full h-[120px]  bg-sky-200 bg-opacity-60 bg-blend-overlay">
       <p className="text-black p-4 text-2xl md:text-3xl font-bold text-left mt-5 ml-5">{title} </p>
   </div>
 </div>
 
 <div className="mx-auto relative flex w-full flex-col rounded-xl bg-sky-400 bg-clip-border text-white shadow-md">
<div className="p-6">
<div className="flex gap-2 content-center justify-items-center ">
    <div>
    <h5 className="mb-2 block font-sans text-lg md:text-2xl font-bold leading-snug tracking-normal text-black antialiased">
 Details:</h5>
    </div>
<div>
<p className="block font-sans text-white font-normal leading-relaxed text-normal md:text-xl antialiased">
 {description}
</p>
</div>


</div>

<div className="flex gap-2 content-center justify-items-center ">
    <div>
    <h5 className="mb-2 block font-sans text-lg md:text-2xl font-bold leading-snug tracking-normal text-black antialiased">
 Marks:</h5>
    </div>
<div>
<p className="block font-sans text-white font-normal leading-relaxed text-normal md:text-xl antialiased">
 {marks}
</p>
</div>


</div>
<div className="flex gap-2 content-center justify-items-center ">
    <div>
    <h5 className="mb-2 block font-sans text-lg md:text-2xl font-bold leading-snug tracking-normal text-black antialiased">
 Created By:</h5>
    </div>
<div>
<p className="block font-sans text-white font-normal leading-relaxed text-normal md:text-xl antialiased">
 {creator?creator:email}
</p>
</div>

</div>

<div className="flex gap-2 content-center justify-items-center ">
    <div>
    <h5 className="mb-2 block font-sans text-lg md:text-2xl font-bold leading-snug tracking-normal text-black antialiased">
    Difficulty Level:</h5>
    </div>
<div>
<p className="block font-sans text-white font-normal leading-relaxed text-normal md:text-xl antialiased">
 {difficultyLevel}
</p>
</div>

</div>
<div className="flex gap-2 content-center justify-items-center ">
    <div>
    <h5 className="mb-2 block font-sans text-lg md:text-2xl font-bold leading-snug tracking-normal text-black antialiased">
 Due Date:</h5>
    </div>
<div>
<p className="block font-sans text-white font-normal leading-relaxed text-normal md:text-xl antialiased">
 {dueDate}
</p>
</div>


</div>

</div>


<div className="w-fit mx-auto py-10 flex flex-col md:flex-row gap-4">
<button
    className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
    onClick={CartSubmit}
  >
    Take Assignment
  </button>
  
  <Link to={`/UpdateAssignment/${_id}`}> 
  <button
    className="select-none rounded-lg bg-yellow-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
    
  >
    Update Assignment
  </button>
  </Link>

  <button
    className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
    onClick={handleDelete}
  >
    Delete Assignment
  </button>
  
</div>

</div>




</div>


 
</div>
  )
}