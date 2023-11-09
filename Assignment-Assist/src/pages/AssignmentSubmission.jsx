import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO } from 'date-fns';
import Swal from 'sweetalert2';

export default function AssignmentSubmission() {
    const {CurrentUser,user}=useContext(AuthContext);

    const {title, imageUrl,description,dueDate,marks,difficultyLevel,email,thumbnailUrl,_id,creator}=useLoaderData()

   const navigate =useNavigate();
   
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
        markedBy:''

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
          submittedDate: formattedDate
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
        submitterEmail:CurrentUser,
        submittedDate: formData.submittedDate,
        quickNote: formData.quickNote,
        status : 'pending',
        creator: formData.creator,
        submitter: user.displayName,
        givenMarks: '',
        feedback:'',
        markedBy:''
      
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
                  'Submitted',
                  'Assignment has been Submitted.',
                  'success'
              )
              
    
              }
              navigate("/MyAssignment")
          })
    
        
        console.log('Form Data:', formData);
      };
    
      return (
        <div className="w-full my-14">
          <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-indigo-700 w-fit mx-auto my-5">Submit Assignment</p> 
          <div className="bg-white rounded shadow-xl mt-7 py-7 px-10 w-fit mx-auto ">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
         
    
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Document URL</span>
              </label>
              <input
                type="text"
                placeholder="Document URL"
                className="input border-indigo-600 w-[15rem] md:w-96"
                name="documentUrl"
                value={formData.documentUrl}
                onChange={handleChange}
                required
              />
            </div>
         
          </div>
    
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
           
             <div>
             <label className="label">
                <span className="label-text text-bold text-indigo-600">Submitted Date</span>
              </label>
             
              <DatePicker
      selected={parseISO(formData.submittedDate)}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
      className="input border-indigo-600 w-[15rem] md:w-96"
    />
             </div>
           
          </div>
    
          <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Quick Note </span>
              </label>
              <textarea
                
                placeholder="Give quick note"
                className="input border-indigo-600 w-[15rem] md:w-96"
                name="quickNote"
                value={formData.quickNote}
                onChange={handleChange}
                required
              />
            </div>
          </div>
    
          <div className="form-control mt-6 p-0">
            <hr className="h-[1px] bg-indigo-800 my-14" />
            <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row gap-x-4 gap-y-4">
              <button className="bg-green-500 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full " onClick={handleSubmit}>
                Submit Assignment
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
      )
}

