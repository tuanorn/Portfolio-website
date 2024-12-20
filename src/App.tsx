'use client';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import { Home, Games, Projects, PPP } from './Pages';

function App() {
  return <div className='h-[500px] w-full'>
      <Header/>
      <div className="h-3 bg-white"></div>
      <div className="w-full grid grid-cols-6 gap-3 bg-white px-3">
        <div className="col-span-5">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/games" element={<Games/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/PPP" element={<PPP tabIndex="1"/>}/>
            <Route path="/projects/PPP/brainstorming" element={<PPP tabIndex="0"/>}/>
            <Route path="/projects/PPP/DQs" element={<PPP tabIndex="1"/>}/>
            <Route path="/projects/PPP/PPP-slide" element={<PPP tabIndex="2"/>}/>
            <Route path="/projects/PPP/progress" element={<PPP tabIndex="3"/>}/>
            <Route path="/projects/PPP/reflection" element={<PPP tabIndex="4"/>}/>
            <Route path="/projects/PPP/plan_of_action" element={<PPP tabIndex="5"/>}/>
            <Route path="/projects/PPP/mind_map" element={<PPP tabIndex="6"/>}/>
          </Routes>
        </div>
        <div className="col-span-1 w-full bg-gradient-to-r from-black to-gray-500 flex justify-center items-center aspect-[1/4]">
            <div className="bg-white" style={{width: "calc(100% - 30px)", height: "calc(100% - 30px)"}}>
                [blank]
            </div>
        </div>
      </div>
      
  </div>;
}

export default App;
