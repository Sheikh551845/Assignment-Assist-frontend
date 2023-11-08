import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO } from 'date-fns';
import Swal from 'sweetalert2';
import { HashLoader } from 'react-spinners';


export default function Challenge() {

    const {CurrentUser,user,theme,loading}=useContext(AuthContext);

    const {title, documentUrl,submitterEmail,dueDate,marks,quickNote,creatorEmail,thumbnailUrl,_id,creator,submittedDate,givenMarks,feedback,markedBy,submitter}=useLoaderData()

  

   const navigate =useNavigate();
   
    const [formData, setFormData] = useState({
        title: title,
        thumbnailUrl: thumbnailUrl,
       
        marks: marks,
        
        dueDate: dueDate,
       
        creatorEmail : creatorEmail,
        submitterEmail:submitterEmail,
        documentUrl: documentUrl,
        submittedDate: submittedDate,
        quickNote: quickNote,
        status : 'challenged',
        creator: creator,
        submitter: submitter,
        givenMarks: givenMarks,
        feedback:feedback,
        markedBy:markedBy,
        challengeIssue: ''
    });
 
     console.log(formData)

    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


     
      useEffect(()=>
      {
        setFormData({
              
        title: formData.title,
        thumbnailUrl: formData.thumbnailUrl,
        documentUrl: formData.documentUrl,
        marks: formData.marks,
       
        dueDate: formData.dueDate,
       
        creatorEmail: formData.creatorEmail,
        submitterEmail:formData.submitterEmail,
        submittedDate: formData.submittedDate,
        quickNote: formData.quickNote,
        status : 'challenged',
        creator: formData.creator,
        submitter: formData.submitter,
        givenMarks: formData.givenMarks,
        feedback:formData.feedback,
        markedBy:formData.markedBy,
        challengeIssue:formData.challengeIssue
        })

       
  
      },[CurrentUser])
     
 
    
      const handleSubmit = (e) => {

        e.preventDefault();
        
    
        fetch('https://assignment-assist-back-end.vercel.app/AllSubmittedAssignment', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
          .then(res => res.json())
          .then(data => {
              if(data.insertedId){
                Swal.fire(
                  'Challenged',
                  'Assignment has been Challenged.',
                  'success'
              )
              
    
              }
              navigate("/MyAssignment")
          })
    
        
        console.log('Form Data:', formData);
      };


    
      return (
        <div>
              {
            
            loading == true?  <div className="flex justify-center items-center h-screen">
            {
              theme =="dark"? <HashLoader size={100} color='white'/>:<HashLoader size={100} color="#36d7b7"/>
            }
         
        </div>:
         <div className="w-full my-14">
         <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-indigo-700 w-fit mx-auto my-5">Challenge Marks</p> 
         <div className="bg-white rounded shadow-xl mt-7 py-7 px-10 w-fit mx-auto ">
       <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        
   
         <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
         <div>
             <label className="label">
               <span className="label-text text-bold text-indigo-600">Challenge Issue</span>
             </label>
             <textarea
               type="text"
               placeholder="Write why you want to challenge"
               className="input border-indigo-600 w-80 md:w-96 h-40"
               name="challengeIssue"
               value={formData.challengeIssue}
               onChange={handleChange}
               required
             />
           </div>
        
         </div>
   
     
   
     
   
         <div className="form-control mt-6 p-0">
           <hr className="h-[1px] bg-indigo-800 my-14" />
           <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row gap-x-4 gap-y-4">
             <button className="bg-red-500 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full " onClick={handleSubmit}>
               Challenge 
             </button>
           </div>
         </div>
       </form>
       </div>
       </div>
}
        </div>
       
      )
}

