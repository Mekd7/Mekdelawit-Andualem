import React from 'react';
import './style.css';
import NavBar from './component/NavBar'; 
import FirstPageContent from './component/FirstPageContent';
import SecondPageContent from './component/SecondPageContent';
import ThirdPageContent from './component/ThirdPageContent';
import ForthPageContent from './component/ForthPageContent';
import FifthPageContent from './component/FifthPageContent';
import SixthPageContent from './component/SixthPageContent';
import Footer from './component/Footer';

export default function App() {

  return (
    <>
     <NavBar/>
     <FirstPageContent/>
     <SecondPageContent/>
     <ThirdPageContent/>
     <ForthPageContent/>
     <FifthPageContent/>
     <SixthPageContent/>
     <Footer/>

     

    </>
  )
}


