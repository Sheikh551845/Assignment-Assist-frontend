import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO } from 'date-fns';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
export default function MarkAAssignment() {


    const {CurrentUser,user}=useContext(AuthContext);

    const {title,dueDate,marks,email,thumbnailUrl,_id,creator,givenMarks,documentUrl,quickNote}=useLoaderData()
    
    const navigate=useNavigate();

    
    const [formData, setFormData] = useState({
        title: title,
        thumbnailUrl: thumbnailUrl,
       
        marks: marks,
        
        dueDate: dueDate,
       
        creatorEmail : email,
        submitterEmail:CurrentUser,
        documentUrl: '',
        submittedDate: dueDate,
        quickNote: '',
        status : 'pending',
        creator: creator,
        submitter: user.displayName,
        givenMarks: '',
        feedback:'',
        markedBy: user.displayName

    });
 
 

   
    

    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleDateChange = (date) => {
        const dateObject = new Date(date);

      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, '0'); 
      const day = String(dateObject.getDate()).padStart(2, '0');

     const formattedDate = `${year}-${month}-${day}`;
        
        setFormData({
          ...formData,
          dueDate: formattedDate
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
       
        email: CurrentUser,
        submitterEmail:CurrentUser,
        submittedDate: formData.submittedDate,
        quickNote: formData.quickNote,
        status : 'pending',
        creator: creator,
        submitter: user.displayName,
        givenMarks: formData.givenMarks,
        feedback: formData.feedback,
        markedBy: user.displayName

      
        })
       
  
      },[CurrentUser])
     
   
    
      const handleSubmit = (e) => {
        useEffect(()=>
        {
          setFormData({
                
          title: formData.title,
          thumbnailUrl: formData.thumbnailUrl,
          documentUrl: formData.documentUrl,
          marks: formData.marks,
         
          dueDate: formData.dueDate,
         
          email: CurrentUser,
          submitterEmail:CurrentUser,
          submittedDate: formData.submittedDate,
          quickNote: formData.quickNote,
          status : 'marked',
          creator: creator,
          submitter: user.displayName,
          givenMarks: formData.givenMarks,
          feedback: formData.feedback,
          markedBy: user.displayName
  
        
          })
         
    
        },[CurrentUser])

        e.preventDefault();
        
    
        fetch(`http://localhost:8888/AllSubmittedAssignment/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
          .then(res => res.json())
          .then(data => {
              if(data.modifiedCount > 0){
                toast.success("Assignment Marked successfully")
                navigate("/AllAssignment")
    
              }
          })
    
          console.log('Form Data:', formData);
       
      };
      
        
       
     
    
      return (
        <div className="w-full my-14">
          <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-indigo-700 w-fit mx-auto my-5">Submit Assignment</p> 
          <div className="bg-white rounded shadow-xl mt-7 py-7 px-10 w-fit mx-auto ">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
         <div>
            <p className="font-bold ">Document URL: </p> <a href={documentUrl} className="text-blue-500 underline">{documentUrl}</a>
            <p className="font-bold  mt-2">Given Note: </p> <a href={quickNote}>{quickNote}</a>
         </div>

    
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Give Marks</span>
              </label>
              <input
                type="text"
                placeholder="Give Marks"
                className="input border-indigo-600 w-80 md:w-96"
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
                className="input border-indigo-600 w-80 md:w-96"
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
      )
}

