import React from 'react'
import ContactInfo from '../components/ContactInfo';
import Header from "../components/Header";
import Image from "next/image"

const contact=()=>{
  return (
    <div className="bg-white">
      <Header/>
      <main className="lg:flex max-w-screen-2xl mx-auto">
      <div>
        <Image src="https://links.papareact.com/ikj"
        width={1200}
        height={250}
        />
      </div>
      </main>

      
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p>Please fill the details below</p>
      <ContactInfo/>
      </div>
      

    </div>
    


  )
}

export default contact