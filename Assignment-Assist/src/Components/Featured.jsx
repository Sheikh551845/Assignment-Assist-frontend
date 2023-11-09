import React, { useContext, useRef } from 'react'
import { AuthContext } from './AuthProvider';
import FeatureCard from './FeatureCard';
import { HashLoader } from 'react-spinners';

export default function Featured() {
    const {data, theme,DataLoading}=useContext(AuthContext);
   

    const SlicedData = data.slice(0,4);

    const scrollRef = useRef(null)
   
 return (
  <div>
    
   
   
   <div className="mx-auto my-24">
     {
       theme ==="light"?<div><h1 className="text-2xl lg:text-5xl text-black font-bold my-5 ml-5 text-center">Featured</h1>
       <h1 className="text-xl lg:text-2xl text-black font-bold my-5 ml-5">Recently Added</h1></div>
       :
       <div>
        <h1 className="text-2xl lg:text-5xl text-white font-bold my-5 ml-5 text-center">Featured </h1>
        <h1 className="text-xl lg:text-2xl text-white font-bold my-5 ml-5">Recently Added</h1>
       </div>
       
     }
       {
         DataLoading == true?  <div className="flex justify-center items-center h-screen">
         {
           theme =="dark"? <HashLoader size={100} color='white'/>:<HashLoader size={100} color="#36d7b7"/>
         }
      
     </div>:
       
   
   <div className="topic-cards mx-auto flex flex-wrap gap-3 p-2 justify-center items-center">
   {
   SlicedData?.map((Assignment, index) => (
       <FeatureCard key={index} Assignment={Assignment}></FeatureCard>
     ))
 }
   </div>
  }
 </div>

 </div>
 )
}
