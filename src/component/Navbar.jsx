import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <nav className='w-full bg-yellow-800 shadow-md py-6 flex justify-between items-center top-0 left-0 z-50'>
       
      <h2 className='text-2xl font-bold text-yellow-200 ' >Nour clinic</h2>
     
 <div className='flex items-center gap-8 text-lg font-medium text-gra'>
 <Link to='/' className='hover:text-yellow-200'>Home</Link>
 
          <Link to ='/Services'className=' hover:text-yellow-200' >Services</Link>
            <Link to='/Doctors'className='hover:text-yellow-200'>Doctors</Link>
              <Link to='/Appointments'className='hover:text-yellow-200'>Appointments </Link>
                <Link to='Contact'className='hover:text-yellow-200'>Contact</Link>
                
       </div>
       
    </nav>
    
  )
  
}

export default Navbar