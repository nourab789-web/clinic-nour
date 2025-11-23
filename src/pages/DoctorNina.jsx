import React from 'react'

function DoctorNina() {
  return (
    <div className='min-h-screen pt-24 flex items-center justify-center bg-blue-300'>
      <div>
       < img
          src="https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg"
          alt="Dr. Ahmad"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500"
        />
        <div>

<h1 className='text-3xl font-bold text-blue-500 mb-2'>Dr.Nina Al-hassan</h1>
<p className='text-lg text-gray-600 mb-1'>specialty: General checkups & Vaccination & Children's health and newborns </p>
<br/>
<br/>
<p className='text-lg text-gray-600 mb-1'>Experience: 12+years of clinical practice</p>
<br/>
<br/>
<p className='text-lg text-gray-600 mb-1'> languages: ARabic & English & spanish </p>
<br/>
<br/>

  <p className='mt-4 text-gray-500'>clinic hours : Monday- sunday- thursday ,9:00Am-5:00pm  </p>
<br/>
<br/>
<p className='mt-4 text-gray-500'>
  Dr. Ninja provides comprehensive medical care with a focus on accurate diagnosis,
            preventive treatment, and patient-centered approaches.
</p>


        </div>


      </div>
      
      
      
    </div>
  )
}

export default DoctorNina