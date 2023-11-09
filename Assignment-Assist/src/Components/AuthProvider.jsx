import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/firebaseConfig';


export const AuthContext = createContext(null);

const googleProvider= new GoogleAuthProvider();





export default function AuthProvider({children}) {


  const [theme, setTheme] =useState("light")
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [DataLoading, setDataLoading] = useState(true)
  const [data, setData] = useState([])
  const [TakenAssignment, setTakenAssignment] = useState([])
  const [CurrentUser,setCurrenUser]=useState(' ')
  const [AllSubmittedAssignment,setAllSubmittedAssignment]=useState([])
  
 


  //Google
  const googleLogin = () => {
  
     
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
      setCurrenUser(user?.email)
     
  });
}, [])
   
  

const update=(photo,name)=>
{
  return updateProfile(auth.currentUser,{photoURL: photo, displayName: name})
}


async function fetchDataWithRetry(url, maxRetries = 10) {
  let retries = 0;
  let response = null;

  while (retries < maxRetries) {
    try {
      response = await fetch(url);
      if (response.ok) {
        
        return response;
      }
    } catch (error) {
      console.error(`Error fetching data (retry ${retries + 1}):`, error);
    }
    
    retries++;
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
  }

  throw new Error(`Max retries (${maxRetries}) exceeded, unable to fetch data`);
}


useEffect(()=>{
  setDataLoading(true)
  fetchDataWithRetry("https://assignment-assist-back-end.vercel.app/AllAssignment")
  .then ((res)=> res.json())
  .then((data)=>{setData(data)
    setDataLoading(false)
    })
  } ,[])

  useEffect(()=>{
    setDataLoading(true)
    fetchDataWithRetry("https://assignment-assist-back-end.vercel.app/MyTakenAssignment")
    .then ((res)=> res.json())
    .then((data)=>{setTakenAssignment(data)
      setDataLoading(false)
      })
    } ,[])

    useEffect(()=>{
      setDataLoading(true)
      fetchDataWithRetry("https://assignment-assist-back-end.vercel.app/AllSubmittedAssignment")
      .then ((res)=> res.json())
      .then((data)=>{setAllSubmittedAssignment(data)
        setDataLoading(false)
        })
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
    setData,
    AllSubmittedAssignment,
    DataLoading
  }
 
    
   

   
  return (
   <AuthContext.Provider value={authInformation}>
    {children}
   </AuthContext.Provider>
  )
}