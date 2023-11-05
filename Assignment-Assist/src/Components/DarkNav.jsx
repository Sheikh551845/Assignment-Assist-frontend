import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

export default function DarkNav() {
    const {user,logout,setTheme,theme}=useContext(AuthContext)
  return (
    <div className=" bg-black flex justify-between items-center mt-2 justify-items-center shadow-xl p-3  "> 
    <div className="mr-10 flex flex-col items-center">
                            <img src="https://i.ibb.co/fvRQ7k7/Pngtree-vector-assignment-icon-4274708.png" className=" h-8 w-8 md:h-16 md:w-20 rounded-full bg-white" alt="" />
                                <h3 className=" text-white font-bold tracking-normal leading-tight ml-3 text-normal ">Assignment Assist</h3>
                            </div>
   <div>
   <div className="hidden lg:block">
    <ul className="mt-5 flex gap-5 mr-5 ">

  
      
    <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""}
            >
              <li className=" text-white cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 tracking-normal transition duration-150 ease-in-out">
  
    Home
</li>
            </NavLink>


           
      
   

           

    
  
    
    
        <NavLink
              to="/Registration"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
             <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-white tracking-normal transition duration-150 ease-in-out">
   
    Registration
</li>
            </NavLink>
      
     
    </ul>
  </div>








  <div className="dropdown mr-6 relative bg-black" >
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <div className="absolute right-20">
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28 ">
      <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className=" mt-2 cursor-pointer text-sm text-indigo-700 tracking-normal transition duration-150 ease-in-out">
   
    Home
</li>
            </NavLink>
      
     

       

    
 
    
        <NavLink
              to="/Registration"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
             <li className=" mt-2 cursor-pointer  text-sm hover:text-indigo-700 text-black tracking-normal transition duration-150 ease-in-out">
   
    Registration
</li>
            </NavLink>
      
     
      </ul>
      </div>
      
    </div>
   </div>
   
    {user && Object.keys(user).length > 0?    
    <div className="flex justify-center items-center gap-2 ">


<div className="avatar  group relative  ">
        <div className="w-6 md:w-12 rounded-full ring ring-offset-base-100 ring-offset-2 hover: cursor-pointer">
  
          {
            user?.photoURL !==null ? <img src={user.photoURL} className="rounded-full bg-white" /> : <img src="https://i.ibb.co/3MJwzX0/pngegg-1.png"/>
          }
           
        
         
        </div>
        <p className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded w-fit top-10 ">{user.displayName}</p>
        </div>
    
      <button className="md:btn text-black p-1 md:w-22 md:h-6    md:p-3 bg-white rounded-lg text-xs lg:text-base"
          onClick={logout}
      >Logout</button>

      <div>
     <button onClick={()=>setTheme("light")}><img className=" w-5 h-5 md:w-8 md:h-8 rounded-full bg-white"  src="https://i.ibb.co/DVTX92r/moon-2.png" alt="" /></button>
   </div>
    
    </div> :

<div className="flex justify-center items-center gap-4">
  <NavLink to="/Login">
  <button className="md:btn text-black p-1 md:w-22 md:h-6    md:p-3 bg-white rounded-lg text-xs lg:text-base">Log In</button>
</NavLink>
<button onClick={()=>setTheme("light")}><img className=" w-5 h-5 md:w-8 md:h-8 rounded-full bg-white"  src="https://i.ibb.co/DVTX92r/moon-2.png" alt="" /></button>
</div>
}

   
   </div>
  )
}