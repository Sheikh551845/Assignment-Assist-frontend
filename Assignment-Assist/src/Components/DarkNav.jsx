import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

export default function DarkNav() {
    const {user,logout,setTheme,theme}=useContext(AuthContext)
  return (
    <div className=" bg-black flex justify-between items-center mt-2 justify-items-center shadow-xl p-3  "> 
    <div className="mr-10 flex items-center">
                            <img src="https://i.ibb.co/RbfSDbt/blockchain.png" className=" h-8 w-8 md:h-16 md:w-20 rounded-lg bg-white" alt="" />
                                <h3 className=" text-white font-bold tracking-normal leading-tight ml-3 text-normal md:text-2xl">Z Tech</h3>
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
    <span className="mr-2 bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid bg-white" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x={4} y={4} width={6} height={6} rx={1} />
            <rect x={14} y={4} width={6} height={6} rx={1} />
            <rect x={4} y={14} width={6} height={6} rx={1} />
            <rect x={14} y={14} width={6} height={6} rx={1} />
        </svg>
    </span>
    Home
</li>
            </NavLink>


            <NavLink
              to="/AllProducts"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline " : ""
              }
            >
              <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-white mx-10 tracking-normal transition duration-150 ease-in-out ">
    <span className="mr-2">
       <img src="https://i.ibb.co/GJTLtGR/product.png" alt=""   className="icon icon-tabler icon-tabler-code bg-white" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </span>
    ALL Products
</li>

            </NavLink>
      
      <NavLink
              to="/AddProducts"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline " : ""
              }
            >
          <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-white mx-10 tracking-normal transition duration-150 ease-in-out ">
    <span className="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle bg-white" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
        </svg>
    </span>
    Add Products
</li>

            </NavLink>

           

    
    <NavLink
              to="/MyCart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-white mr-10 tracking-normal transition duration-150 ease-in-out">
    <span className="mr-2">
     <img src="https://i.ibb.co/yPnQFHQ/shopping-cart.png" className="icon icon-tabler icon-tabler-compass bg-white" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"></img>
    </span>
    My Cart
</li>
            </NavLink>
    
    
        <NavLink
              to="/Registration"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
             <li className="cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 text-white tracking-normal transition duration-150 ease-in-out">
    <span className="mr-2">
        <img src="https://i.ibb.co/3MJwzX0/pngegg-1.png" alt="" className="icon icon-tabler icon-tabler-code bg-white" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </span>
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
              to="/AddProducts"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className=" mt-2 cursor-pointer  text-sm hover:text-indigo-700 text-black  tracking-normal transition duration-150 ease-in-out">
   
    Add Products
</li>

            </NavLink>

            <NavLink
              to="/AllProducts"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className=" mt-2 cursor-pointer  text-sm hover:text-indigo-700 text-black  tracking-normal transition duration-150 ease-in-out">
   
    All Products
</li>

            </NavLink>

    
    <NavLink
              to="/MyCart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              <li className=" mt-2 cursor-pointer  text-sm hover:text-indigo-700 text-black mr-10 tracking-normal transition duration-150 ease-in-out">
    
    My Cart
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
    <p className="text-white fond-bold text-xs lg:text-xl">{user.displayName}</p>
    
    <div className="avatar">
      <div className="w-6 md:w-12 rounded-full ring ring-offset-base-100 ring-offset-2">

        {
          user?.photoURL !==null ? <img src={user.photoURL} /> : <img src="https://i.ibb.co/3MJwzX0/pngegg-1.png"/>
        }
         
      
       
      </div>
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