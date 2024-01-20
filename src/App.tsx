import './App.css'
import NavbarCommon from './Components/Navbar-Common'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './Components/Resume';
import { useEffect, useRef } from 'react';
import Footer from './Components/Footer';
import { projectInterface } from './modal/projectInterface';
import Granim from "granim";



function App() {

  useEffect(()=>{

    new Granim({
      element: '#granim',
      name: 'granim',
      states : {
          "default-state": {
              gradients: [
                  ['#834D9B', '#D04ED6'],
                  ['#1CD8D2', '#93EDC7'],
                  ['#12c2e9', '#c471ed'],
                  ['#b92b27', '#1565C0'],
                  ['#373B44', '#4286f4'],
                  ['#2980B9', '#6DD5FA'],
                  ['#6b6b83', '#3b8d99'],
              ]
          }
      }
   });

  },[])

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
      <canvas id="granim">
</canvas>
        <NavbarCommon scrollIntoAbout={scrollIntoAbout} scrollIntoProject={scrollIntoProject}></NavbarCommon>
        <Routes>
          <Route path="/portfolio" element={<Home forwardedRef={targetChildRef} targetProjectRef={targetProjectRef} skills={skills} projects={projects}/>} />
          <Route path="/portfolio/resume" element={<Resume />} />
        </Routes>
        <Footer data-testid="footer"></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;