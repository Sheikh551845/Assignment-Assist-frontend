import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

export default function CreateAssignment() {
    const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = date => {
        setStartDate(date);
      };
    const [formData, setFormData] = useState({
    
        title: '',
        thumbnail: '',
        assignmentType: '',
        marks: '',
        imageUrl: '',
        dueDate: startDate,
        description: ''
      });

     
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('http://localhost:8888/AllAssignment', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
          .then(res => res.json())
          .then(data => {
              if(data.insertedId){
                toast.success("Assignment added successfully")
                setFormData({
        title: '',
        thumbnail: '',
        assignmentType: '',
        marks: '',
        imageUrl: '',
        dueDate:'',
        description: ''
      })
    
              }
          })
    
        
        console.log('Form Data:', formData);
      };
    
      return (
        <div className="w-full my-14">
          <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-indigo-700 w-fit mx-auto my-5">Add Assignment</p> 
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
                value={formData.tile}
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
      <option value="medium">medium</option>
      <option value="Hard">Hard</option>

    </select>
    
              {/* <input
                type="text"
                placeholder="Assignment type"
                className="input border-indigo-600 w-80 md:w-96"
                name="assignmentType"
                value={formData.assignmentType}
                onChange={handleChange}
                required
              /> */}
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
             
            <DatePicker selected={startDate} onChange={handleDateChange} className="input border-indigo-600 w-80 md:w-96" />
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
