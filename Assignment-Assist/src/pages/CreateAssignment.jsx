import React, { useContext, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { AuthContext } from '../Components/AuthProvider';
import { parseISO } from 'date-fns';
import Swal from 'sweetalert2'

export default function CreateAssignment() {
    
    const {CurrentUser,user}=useContext(AuthContext);
    const [formData, setFormData] = useState({
      title: '',
      thumbnailUrl: '',
      difficultyLevel: '',
      marks: '',
      imageUrl: '',
      dueDate: '2023-11-07',
      description: '',
      email: CurrentUser,
      creator: user.displayName
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
        difficultyLevel: formData.difficultyLevel,
        marks: formData.marks,
        imageUrl: formData.imageUrl,
        dueDate: formData.dueDate,
        description: formData.description,
        email: CurrentUser,
        creator: user.displayName
      
        })
       
  
      },[CurrentUser])
     
   
    
      const handleSubmit = (e) => {

        e.preventDefault();
        
        
        if( formData.title==''|| formData.thumbnailUrl==''|| formData.difficultyLevel==''|| formData.imageUrl==''|| formData.dueDate=='' || formData.description==''|| formData.marks=='')
        {
          toast.error("Give all information")
        }
        else if(formData.marks<=10 || formData.marks>100 )
        {
         toast.error("Marks should be in between 10 to 100")
        }
        else
        {
    
        fetch('https://assignment-assist-back-end.vercel.app/AllAssignment', {
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
                  'Created',
                  'Assignment has been created.',
                  'success'
              )
                setFormData({
        title: '',
        thumbnailUrl: '',
        difficultyLevel: '',
        marks: '',
        imageUrl: '',
        dueDate:'2023-11-07',
        description: ''
      })
    
              }
          })
    
        }
        console.log('Form Data:', formData);
      };





    
      return (
        <div className="w-full my-14">
          <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-indigo-700 w-fit mx-auto my-5">Add Assignment</p> 
          <div className="bg-white rounded shadow-xl mt-7 py-7 px-10 w-fit mx-auto ">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto w-fit">
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">Title</span>
              </label>
              <input
                type="text"
                placeholder="Assignment name"
                className="input border-indigo-600 w-[15rem] md:w-96"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
    
              
            </div>
            <div>
              <label className="label">
                <span className="label-text text-bold text-indigo-600">thumbnailUrl</span>
              </label>
              <input
                type="text"
                placeholder="thumbnailUrl URL"
                className="input border-indigo-600 w-[15rem] md:w-96"
                name="thumbnailUrl"
                value={formData.thumbnailUrl}
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
      className="input border-indigo-600 w-[15rem] md:w-96"
      name="difficultyLevel"
      value={formData.difficultyLevel}
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
                className="input border-indigo-600 w-[15rem] md:w-96"
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
                className="input border-indigo-600 w-[15rem] md:w-96"
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
      className="input border-indigo-600 w-[15rem] md:w-96"
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
                className="input border-indigo-600 w-[15rem] md:w-96"
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
              <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full " onClick={handleSubmit}>
                Add Assignment
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
      )
}
