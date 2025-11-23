import React from 'react'
import { useState } from "react";

function Appointments() {
  
    
  const [formData, setformData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    state: "",
  });
  //handle change for input
  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  //handle for submit
  const HandleSubmit = (e) => {
    e.preventDefault();
    alert("your appointment has been submitted!");
  };
  //required(full ta t3mol submit iza chi ne2es no)
  return (
    
    <div className='min-h-screen bg-yellow-800 flex justify-center items-center p-6'style={{backgroundImage:"url('https://www.wellingtonadvancedmed.com/wp-content/uploads/sites/621/2021/06/What-To-Expect-From-A-Walk-In-Clinic.jpg')"}}>
      
      
      <h1 className='text-yellow-50'> check here</h1>
      <form onSubmit={HandleSubmit} className=' p-8 rounded-lg shadow-lg w-full max-w-lg'>
        <label htmlFor="name" className='block mb-2 font font-semibold'>Full Name:</label>
        <input className='w-full p-2 mb-4 border rounded'
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handlechange}
          required
        ></input>
        <br />
        <br />
        /phone
        <label htmlFor="phone" className='block mb-2 font font-semibold'> Number:</label>
        <input className='w-full p-2 mb-4 border rounded'

          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handlechange}
          required
        ></input>
        <br />
        <br />
        <label htmlFor="email" className='block mb-2 font font-semibold'>email:</label>
        <input className='w-full p-2 mb-4 border rounded'

          type="email"
          name="email"
          value={formData.email}
          onChange={handlechange}
          required
        ></input>
        <br />
        <br />
        <label htmlFor="date" className='block mb-2 font font-semibold'>date</label>
        <input className='w-full p-2 mb-4 border rounded'

          type="date"
          name="date"
          value={formData.date}
          onChange={handlechange}
          required
        ></input>
        <br />
        <br />
        <label htmlFor="state" className='block mb-2 font font-semibold'> State</label>
        <textarea className='w-full p-2 mb-4 border rounded'
         id="state" name=' state' value={formData.state} onChange=  {handlechange} required/>
        
       
        <br />
        <br />
      </form>
    </div>
  
  )

}

export default Appointments