import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';
import FeatureCard from './FeatureCard';

export default function Featured() {
    const {data, theme}=useContext(AuthContext);

    const SlicedData = data.slice(0,5);


   
 return (
   
   
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
       
   
   <div className="topic-cards mx-auto flex flex-wrap gap-3">
   {
   SlicedData?.map((Assignment, index) => (
       <FeatureCard key={index} Assignment={Assignment}></FeatureCard>
     ))
 }
   </div>
   
 </div>
 )
}
