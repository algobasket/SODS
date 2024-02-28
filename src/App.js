import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Layout from './Layout';
import HomePage from './HomePage';
import WhitepaperPage from './WhitepaperPage'; 
import NoPage from './NoPage'; 

import './App.css';  
 

function App() {
  return (
    <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/whitepaper" element={<WhitepaperPage />} />
                    <Route exact path="*" element={<NoPage />} />
            </Routes>
    </BrowserRouter>   
  ); 
}

export default App;
