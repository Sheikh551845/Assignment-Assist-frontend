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
  const [AllSubmittedAssignment,setAllSubmittedAssignment]=useState([])
  
 


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


    

  

const update=(photo,name)=>
{
  return updateProfile(auth.currentUser,{photoURL: photo, displayName: name})
}

useEffect(()=>{
  fetch("https://assignment-assist-back-end.vercel.app/AllAssignment")
  .then ((res)=> res.json())
  .then((data)=>{setData(data)
    setLoading(true)
    })
  } ,[])

  useEffect(()=>{
    fetch("https://assignment-assist-back-end.vercel.app/MyTakenAssignment")
    .then ((res)=> res.json())
    .then((data)=>{setTakenAssignment(data)
      setLoading(true)
      })
    } ,[])

    useEffect(()=>{
      fetch("https://assignment-assist-back-end.vercel.app/AllSubmittedAssignment")
      .then ((res)=> res.json())
      .then((data)=>{setAllSubmittedAssignment(data)
        setLoading(true)
        })
      } ,[])

    


 //Observer
 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
   
      setUser(user);
      setLoading(false)
      setCurrenUser(user?.email)
     
  });
}, [])
   

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
    AllSubmittedAssignment
  }
 
    
   

   
  return (
   <AuthContext.Provider value={authInformation}>
    {children}
   </AuthContext.Provider>
  )
}