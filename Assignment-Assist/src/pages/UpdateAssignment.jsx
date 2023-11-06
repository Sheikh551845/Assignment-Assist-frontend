import { parseISO } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Components/AuthProvider';

export default function UpdateAssignment() {

    
    const {CurrentUser}=useContext(AuthContext);
    const {title, imageUrl,description,dueDate,marks,difficultyLevel,email,thumbnailUrl,_id}=useLoaderData()

   

  
   
  console.log(dueDate)
  
    const [formData, setFormData] = useState({
    
        title: title,
        thumbnail: thumbnailUrl,
        assignmentType:difficultyLevel,
        marks: marks,
        imageUrl: imageUrl,
        dueDate: dueDate,
        description: description,
        email : email,
        
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
   
    const handleSubmit = (e) => {
        if(CurrentUser===email)
        {
        
        e.preventDefault();
    
        fetch(`http://localhost:8888/AllAssignment/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
          .then(res => res.json())
          .then(data => {
              if(data.modifiedCount > 0){
                toast.success("Assignment Updated successfully")
                
    
              }
          })
    
        
        console.log('Form Data:', formData);
      }
      else{
        toast.error("You are not the creator of this Assignment")
    }
      };
    
   
    
      return (
        <div className="w-full my-14">
          <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-green-500 w-fit mx-auto my-5">Update Assignment</p> 
          <div className="bg-white rounded shadow-xl mt-7 py-7 px-10 w-fit mx-auto ">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Title</span>
              </label>
              <input
                type="text"
                placeholder="Assignment name"
                className="input border-indigo-600 w-80 md:w-96"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
    
              
              {/* <input
                type="text"
                placeholder="Brand name"
                className="input border-indigo-600 w-80 md:w-96"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              /> */}
            </div>
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Thumbnail</span>
              </label>
              <input
                type="text"
                placeholder="Assignment name"
                className="input border-indigo-600 w-80 md:w-96"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                required
              />
            </div>
          </div>
    
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Assignment type</span>
              </label>
              <select
      className="input border-indigo-600 w-80 md:w-96"
      name="assignmentType"
      value={formData.assignmentType}
      onChange={handleChange}
      required
    >
      <option value="">Select Assignment Type</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>

    </select>
    
          
            </div>
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">marks</span>
              </label>
              <input
                type="text"
                placeholder="marks"
                className="input border-indigo-600 w-80 md:w-96"
                name="marks"
                value={formData.marks}
                onChange={handleChange}
                required
              />
            </div>
          </div>
    
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input border-indigo-600 w-80 md:w-96"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </div>
             <div>
             <label className="label">
                <span className="label-text text-bold text-indigo-600">Due Date</span>
              </label>
              <DatePicker
      selected={parseISO(formData.dueDate)}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
      className="input border-indigo-600 w-80 md:w-96"
    />
            
             </div>
           
          </div>
    
          <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">description </span>
              </label>
              <input
                type="text"
                placeholder="description"
                className="input border-indigo-600 w-80 md:w-96"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>
    
          <div className="form-control mt-6 p-0">
            <hr className="h-[1px] bg-indigo-800 my-14" />
            <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row gap-x-4 gap-y-4">
              <button className="bg-green-500 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full " onClick={handleSubmit}>
                Update Assignment
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
      )
}
