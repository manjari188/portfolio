import './App.css'
import NavbarCommon from './Components/Navbar-Common'
import 'bootstrap/dist/css/bootstrap.min.css';
import Granim from 'react-granim';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './Components/Resume';

function App() {

  return (
    <>
      <BrowserRouter>
        <Granim id="granim"></Granim>
        <NavbarCommon></NavbarCommon>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
