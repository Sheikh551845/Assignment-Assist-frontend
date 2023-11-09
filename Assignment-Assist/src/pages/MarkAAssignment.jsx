import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO } from 'date-fns';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';
export default function MarkAAssignment() {


    const {CurrentUser,user,loading,theme}=useContext(AuthContext);

    const {title,dueDate,marks,email,thumbnailUrl,_id,creator,givenMarks,documentUrl,quickNote,feedback,submitter,status}=useLoaderData()
   
    
    const navigate=useNavigate();

    console.log(user.displayName)
    const [formData, setFormData] = useState({
        title: title,
        thumbnailUrl: thumbnailUrl,
       
        marks: marks,
        
        dueDate: dueDate,
       
        creatorEmail : email,
        submitterEmail:CurrentUser,
        documentUrl: documentUrl,
        submittedDate: dueDate,
        quickNote: quickNote,
        status : status,
        creator: creator,
        submitter: submitter,
        givenMarks: givenMarks,
        feedback:feedback,
        markedBy: user.displayName

    });
 
 
   
   
    

    
    
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
          
          creator: formData.creator,
          submitter: formData.submitter,
          givenMarks: formData.givenMarks,
          feedback: formData.feedback,
          markedBy:user.displayName,
          status : 'marked',
  
        
          })
      },[]
      )
    
   
   
    
      const handleSubmit = (e) => {

        e.preventDefault();

    
        fetch(`https://assignment-assist-back-end.vercel.app/AllSubmittedAssignment/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
          .then(res => res.json())
          .then(data => {
            
              if(data.modifiedCount > 0){
                Swal.fire(
                    'Marked',
                    'Assignment has been Marked.',
                    'success'
                )
                navigate("/SubmittedAssignment")
    
              }
          })
    
          
       
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
          <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-indigo-700 w-fit mx-auto my-5">Mark Assignment</p> 
          <div className="bg-white rounded shadow-xl mt-7 py-7 px-10 w-fit mx-auto ">
        <form onSubmit={handleSubmit} className="w-[15rem] md:w-fit flex flex-col gap-3">
         <div>
            <p className="font-bold w-[15rem] md:w-screen">Document URL: </p> <a href={documentUrl} className="text-blue-500 underline">Document Url</a>
            <p className="font-bold  mt-2">Given Note: </p> <a href={quickNote}>{quickNote}</a>
            <p className="font-bold  mt-2">Total Marks: </p> <a href={marks}>{marks}</a>
            
         </div>

    
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Give Marks</span>
              </label>
              <input
                type="text"
                placeholder="Give Marks"
                className="input border-indigo-600 w-[15rem] md:w-96"
                name="givenMarks"
                value={formData.givenMarks}
                onChange={handleChange}
                required
              />
            </div>
         
          </div>
          <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Feedback </span>
              </label>
              <textarea
                
                placeholder="Give Feedback"
                className="input border-indigo-600 w-[15rem] md:w-96"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
              />
            </div>
          </div>
    
          <div className="form-control mt-6 p-0">
            <hr className="h-[1px] bg-indigo-800 my-14" />
            <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row gap-x-4 gap-y-4">
              <button className="bg-green-500 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full " onClick={handleSubmit}>
               Mark
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

