import React,{ useEffect } from 'react';

import './App.css';  
import Header from './Header'; 
import MainContent from './MainContent';  
import Footer from './Footer';

function HomePage() {    

  return ( 
      <div className="App">
         <Header />
           <MainContent />     
         <Footer />
      </div>
  ); 
}

export default HomePage;    