'use client';

import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './Components/Header';
import { Home, Games, Projects, PPP } from './Pages';
import { GHP } from './Pages/Projects';

function App() {
  let [title, setTitle] = useState("Portfolio Website");
  let [bgImg, setBgImg] = useState("Pong_preview.png");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("PPP")) {
      setTitle("PPP");
      setBgImg("/PPP_SPH4U/Concorde_wing_CFD_20deg_frame_300.png");
    } else if (location.pathname.includes("GHP")) {
      setTitle("GHP");
      setBgImg("Pong_preview.png");
    } else {
      setTitle("Porfolio Website");
      setBgImg("Pong_preview.png");
    }
  }, [location])

  return <div className='h-[500px] w-full'>
      <Header title={title} img={bgImg}/>
      <div className="h-3 bg-white"></div>
      <div className="w-full grid grid-cols-6 gap-3 bg-white px-3">
        <div className="col-span-5">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/games" element={<Games/>}/>
            <Route path="/projects" element={<Projects/>}/>

            <Route path="/projects/PPP" element={<PPP tabIndex="0"/>}/>
            <Route path="/projects/PPP/brainstorming" element={<PPP tabIndex="0"/>}/>
            <Route path="/projects/PPP/DQs" element={<PPP tabIndex="1"/>}/>
            <Route path="/projects/PPP/PPP-slide" element={<PPP tabIndex="2"/>}/>
            <Route path="/projects/PPP/progress" element={<PPP tabIndex="3"/>}/>
            <Route path="/projects/PPP/reflection" element={<PPP tabIndex="3"/>}/>
            <Route path="/projects/PPP/plan_of_action" element={<PPP tabIndex="4"/>}/>
            <Route path="/projects/PPP/mind_map" element={<PPP tabIndex="5"/>}/>
            <Route path="/projects/PPP/primary_research" element={<PPP tabIndex="6"/>}/>
            <Route path="/projects/PPP/final_product" element={<PPP tabIndex="7"/>}/>

            <Route path="/projects/GHP" element={<GHP tabIndex="0"/>}/>
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
