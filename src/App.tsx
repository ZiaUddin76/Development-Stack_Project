

import './App.css'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Technology from "./Components/Technology"
import { Suspense } from "react"
import type{ Itechnology } from "./types/technologytype"
import Footer from './Components/Footer'



const technologyFetch = async(): Promise<Itechnology[]> =>{
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}






function App() {

  const technologyPromise = technologyFetch();


  console.log(technologyPromise);




  return (
    <>

    <Navbar />
    <Hero />

    <Suspense fallback={<h2>Loading...</h2>} >

    <Technology technologyPromise={technologyPromise} />
    
    </Suspense>

    <Footer/>

   

      


    </>
  )
}

export default App
