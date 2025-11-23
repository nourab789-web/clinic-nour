import React from 'react'
import { Link, Links } from 'react-router-dom'

function Doctors() {
  return (
    <div  className="min-h-screen w-full  flex flex-col items-center justify-start px-4 text-yellow-800 "style={{backgroundImage:"url('https://tiahealth.com/wp-content/uploads/2024/10/sepcialist.jpeg')"}}>
      <h1>Meet our Doctors</h1>
    
      <ul>
        
        <li><Link to="/DoctorNina" className="border">Dr.Nina Al-hassan</Link></li>
         <li><Link to="/DoctorSara" className="border"> Dr.sara Al-jmila</Link></li>
          <li><Link to="/DoctorAli" className="border">Dr.Ali-kour</Link></li>
           <li><Link to="/DoctorSami"className="border">Dr.sami-dandashi</Link></li>
           
      </ul>
      </div>
  )
  
}

export default Doctors