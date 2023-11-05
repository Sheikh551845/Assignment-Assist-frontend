import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/firebaseConfig';


export const AuthContext = createContext(null);

const googleProvider= new GoogleAuthProvider();





export default function AuthProvider({children}) {


  const [theme, setTheme] =useState("light")
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [CartData, setCartData] = useState([])
 


  //Google
const googleLogin = () => {
  setLoading(true)
   
    return signInWithPopup(auth, googleProvider);
}

//Email
const crateEmailUser = (email, password)=>
{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
}

//Email login

const login=(email,password)=>
{
  setLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
}

//Log Out

const logout=()=>
{
  return signOut(auth)
}




   //Observer
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false)
       
    });
}, [])

const update=(name)=>
{
  return updateProfile(auth.currentUser,{displayName: name})
}

  


   
   
    // useEffect(()=>{
    // fetch("https://zt-ech-backend-i7c5jj7n8-sheikh-mohammads-projects.vercel.app/AllProducts")
    // .then ((res)=> res.json())
    // .then((data)=>setData(data))
    // } ,[])


    // useEffect(()=>{
    //   fetch("https://zt-ech-backend-i7c5jj7n8-sheikh-mohammads-projects.vercel.app/MyCart")
    //   .then ((res)=> res.json())
    //   .then((data)=>{setCartData(data)
    //   })
    //   } ,[])

  const authInformation ={
    data,
    googleLogin,
    crateEmailUser,
    login,
    user,
    logout,
    loading,
    update,
    CartData,
    setCartData,
    setTheme,
    theme
  }
 
    
   

   
  return (
   <AuthContext.Provider value={authInformation}>
    {children}
   </AuthContext.Provider>
  )
}