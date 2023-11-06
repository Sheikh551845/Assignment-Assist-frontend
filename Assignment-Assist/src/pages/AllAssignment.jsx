import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Components/AuthProvider';
import FeatureCard from '../Components/FeatureCard';

export default function AllAssignment() {
 
  const {data}=useContext(AuthContext);

  const [AllData, setAllData]=useState();
  const[items, setItems]=useState();
  const [tPage,setTPage]=useState([])
  const[numPages,setNumPages]=useState()
  const[currentPage, setCurrentPage]=useState(1);
  const[typedData,setTypedData]=useState(data);

  useEffect(() => {
    setAllData(data);
    setItems(data.length);
    setNumPages([1]);
}, [data,data.length])
  
  

 const handleChange =(e)=>
 {
   
  const findData =  data.filter(item => item.difficultyLevel === e.target.value);
 

   setTypedData(data)
  setAllData(data)
 
  if(e.target.value!="All")
  {
    console.log(findData)
     setTypedData(findData);
     setAllData(findData)
  }
 


  
 }
 
 const handleItemChange =(e)=>
 {  
  setAllData (typedData.slice(0,e.target.value))
  const pages=Math.ceil((AllData.length)/(e.target.value));
  setItems(e.target.value);
  setTPage([])
  
   for(let i=1;i<=pages; i++)
   {
    tPage.push(i);
   }
  
   setNumPages(tPage)
 }

const buttonHandler=(value)=>
{ 
  setCurrentPage(value);
  const start=(value-1)*items;
  const end = (value*items);
  
  console.log(start,end)
  if(value==(tPage.length))
  {
    const lastEnd = ((value-1)*items)+(typedData.length-((value-1)*items))+1
    setAllData (typedData.slice(start,lastEnd))
    console.log(AllData)
       
  }

  else{
    setAllData (typedData.slice(start,end))
    console.log(AllData)
  }
 

}




  return (
    <div className="max-w-screen my-24 ">
      
      <div className="">
      <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-indigo-700 w-fit mx-auto my-5">All Assignment</p> 
          <div className="flex  justify-end mb-5 ">
         
          <div className="flex flex-col items-center justify-center mr-3">
          <label className="label">
                <span className="label-text text-bold text-indigo-600">View By Assignment Level</span>
              </label>
              <select
      className="input border-indigo-600 max-w-fit"
      name="assignmentType"
      
      onChange={handleChange}
      required
    >
      <option value="All">All</option>
      <option value="easy">easy</option>
      <option value="medium">medium</option>
      <option value="hard">hard</option>

    </select>
          </div>
           
            </div>
        
      <div className="max-w-screen">
     <div className=" flex flex-wrap gap-4 w-fit mx-auto  min-h-[80vh] ">
{
AllData?.map((Assignment, index) => (
<FeatureCard key={index} Assignment={Assignment}></FeatureCard>
))
}
</div>

<div className="flex flex-wrap items-center justify-center gap-3 mt-10">
<div className="flex  items-center justify-center gap-5">
{  numPages?.map((value, index) => (<div className="btn w-fit" key={index} value={value}  onClick={()=>buttonHandler(value)}>
  <button  className={currentPage===value ?"bg-sky-500 text-white btn  max-w-fit ":""}>{value}</button>
</div>
       
     ))
     }
</div>
  

<div className="flex flex-col items-center justify-center mr-3">
         
              <select
      className="input border-indigo-600 max-w-fit text-center"
      name="assignmentType"
      
      onChange={handleItemChange}
      required
    >
      <option value={data.length}>Items per page</option>
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>

    </select>
          </div>
</div>

        </div>  


      </div>

      
      </div>

        
     
   
  )
}
