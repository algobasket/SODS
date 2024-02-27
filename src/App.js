import React from 'react';

//import { BrowserRouter, Route } from 'react-router-dom';
//import HomePage from './HomePage'; 
//import WhitepaperPage from './WhitepaperPage';

import './App.css';  
import Header from './Header'; 
import MainContent from './MainContent';  
import Footer from './Footer';



function App() {
  return (
    
      <div className="App">
         <Header />
           <MainContent />     
         <Footer />
      </div> 
    
  );
}

export default App;
