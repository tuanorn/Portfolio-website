'use client';

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Components/Header';
import {Home, Games, Projects} from './Pages';

function App() {
  return <div className='h-[500px]'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games" element={<Games/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
  </div>;
}

export default App;
