import React from 'react'
import Navbar from '../components/Navbar'
import Cours from '../components/Cours';
import Footer from '../components/Footer'


function Courses() {
  
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Cours />
       </div>
      <Footer />
    </>
  );
}

export default Courses