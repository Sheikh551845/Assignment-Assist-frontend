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
  const [TakenAssignment, setTakenAssignment] = useState([])
  const [CurrentUser,setCurrenUser]=useState(' ')

  
 


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
        setCurrenUser(user.email)
       
    });
}, [])

const update=(photo,name)=>
{
  return updateProfile(auth.currentUser,{photoURL: photo, displayName: name})
}

useEffect(()=>{
  fetch("http://localhost:8888/AllAssignment")
  .then ((res)=> res.json())
  .then((data)=>setData(data))
  } ,[])

  useEffect(()=>{
    fetch("http://localhost:8888/MyTakenAssignment")
    .then ((res)=> res.json())
    .then((data)=>setTakenAssignment(data))
    } ,[])



   

  const authInformation ={
    data,
    googleLogin,
    crateEmailUser,
    login,
    user,
    logout,
    loading,
    update,
    TakenAssignment,
    setTakenAssignment,
    setTheme,
    theme,
    CurrentUser,
    setData
  }
 
    
   

   
  return (
   <AuthContext.Provider value={authInformation}>
    {children}
   </AuthContext.Provider>
  )
}