import './App.css'
import NavbarCommon from './Components/Navbar-Common'
import 'bootstrap/dist/css/bootstrap.min.css';
import Granim from 'react-granim';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './Components/Resume';
import { useRef } from 'react';

function App() {

  const targetChildRef = useRef<HTMLDivElement | null>(null);

  const skills = ["JavaScript", "React", "Angular", "HTML5", "CSS", "SASS", "LESS", "GIT", "Cypress", "Jest", "Github"]

  const scrollIntoAbout = () =>{
    targetChildRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <BrowserRouter>
        <Granim id="granim"></Granim>
        <NavbarCommon scrollIntoAbout={scrollIntoAbout}></NavbarCommon>
        <Routes>
          <Route path="/portfolio" element={<Home forwardedRef={targetChildRef} skills={skills}/>} />
          <Route path="/portfolio/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;