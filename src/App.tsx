import './App.css'
import NavbarCommon from './Components/Navbar-Common'
import 'bootstrap/dist/css/bootstrap.min.css';
import Granim from 'react-granim';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './Components/Resume';
import { useRef } from 'react';
import Footer from './Components/Footer';
import { projectInterface } from './modal/projectInterface';



function App() {

  const targetChildRef = useRef<HTMLDivElement | null>(null);

  const targetProjectRef = useRef<HTMLDivElement | null>(null);

  const skills = ["JavaScript", "React", "Angular", "HTML5", "CSS", "SASS", "LESS", "GIT", "Cypress", "Jest", "Github"];
  const projects : Array<projectInterface> = [
    {
        name: 'Portfolio Website',
        description: 'My personal portfolio website which showcases my resume along with the projects which I am working on.',
        image: '/portfolio/images/portfolio-thumbnail.png'
    },
    {
        name: 'Weather App',
        description: 'This is a weather application created using Vite and TypeScript React. It allows you to search for a location and view its weather details on the dashboard.',
        image: '/portfolio/images/weather-thumbnail.png'
    },

    {
        name: 'AI Intent',
        description: 'This App allows users to get an overview over all the pretrained intents that are available from intents.json. Users can see at least one example expression without any extra clicks and can select/unselect intents individually or all at once.',
        image: '/portfolio/images/AIIntent-thumbnail.png'
    },
    {
        name: 'Mile Calculator',
        description: 'This is an interactive App which allows users to calculate car range per charge on the basis of average speed, outside temperature, wether A/C is turned on and wheel size.',
        image: '/portfolio/images/Milescalculator-thumbnail.png'
    },

]

  const scrollIntoAbout = () =>{
    targetChildRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollIntoProject = () =>{
    targetProjectRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <BrowserRouter>
        <Granim id="granim"></Granim>
        <NavbarCommon scrollIntoAbout={scrollIntoAbout} scrollIntoProject={scrollIntoProject}></NavbarCommon>
        <Routes>
          <Route path="/portfolio" element={<Home forwardedRef={targetChildRef} targetProjectRef={targetProjectRef} skills={skills} projects={projects}/>} />
          <Route path="/portfolio/resume" element={<Resume />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;