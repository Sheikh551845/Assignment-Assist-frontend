import React, { useContext } from 'react'
import Banner from '../Components/Banner'
import Featured from '../Components/Featured'
import FAQ from '../Components/FAQ'
import { HashLoader } from 'react-spinners'
import { AuthContext } from '../Components/AuthProvider'

export default function Home() {
  const {loading,theme}=useContext(AuthContext);
  console.log(loading)
  return (

      <div>
      <Banner></Banner>
      <Featured></Featured>
      <FAQ></FAQ>
      
    </div>
  
   
  )
}
