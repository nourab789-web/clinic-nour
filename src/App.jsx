import React from 'react'
import Navbar from './component/Navbar';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DoctorNina from './pages/DoctorNina';
import DoctorSara from './pages/DoctorSara';
import DoctorAli from './pages/DoctorAli';
import DoctorSami from './pages/DoctorSami';


function App() {
  return (
  <>
    
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Doctors" element={<Doctors/>} />
        <Route path="/Appointments" element={<Appointments/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/DoctorNina" element={<DoctorNina/>}/>
        <Route path="/DoctorSara" element={<DoctorSara/>}/>
        <Route path="/DoctorAli" element={<DoctorAli/>}/>
           <Route path="/DoctorSami" element={<DoctorSami/>}/>

    
    </Routes>
    </>
 
  );
}

export default App;