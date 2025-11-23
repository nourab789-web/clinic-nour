import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div  className="min-h-screen w-full  flex flex-col items-center justify-start px-4 text-yellow-800 "style={{backgroundImage:"url('https://socalregenclinic.com/wp-content/uploads/2025/04/a-a-sleek-modern-clinic-interior-e2e87d4b-a261-4614-88c3-5902bedb8c72.jpg')"}}>
      <div>
      <h1 className='text-3xl font-bold text-yellow-100'>our Medical services</h1>
      <div>
      <p className='text-yellow-100 text-center'>we provide high-quality medical services to ensure your health and confort.</p>
    <ul>
      <li><Link to='/DoctorNina'  className='text-yellow-100 text-center'>General checkups</Link></li>
      
    
      <li> <Link to='/DoctorAli' className='text-yellow-100 text-center border'>Ultrasound & Imaging &laboratory</Link></li>
      <li> <Link to='/DoctorAli'className='text-yellow-100 text-center border'>Dentistry</Link></li>
      <li> <Link to='/DoctorSami'className='text-yellow-100 text-center border'>Ear,nose,throat</Link></li>
      <li> <Link to='/DoctorSara'className='text-yellow-100 text-center border'>Nutrition & diet</Link></li>
      <li> <Link to='/DoctorSara'className='text-yellow-100 text-center border'>Physical therapy</Link></li>
      <li> <Link to='/DoctorSara'className='text-yellow-100 text-center border'>Mental Healt counseling</Link></li>
      <li> <Link to='/DoctorNina'className='text-yellow-100 text-center border'>Vaccination</Link></li>
      <li> <Link to='/DoctorNina'className='text-yellow-100 text-center border'>Children's health and newborns</Link></li>
    </ul>

      </div>
      </div>
      </div>

  )
}

export default Services