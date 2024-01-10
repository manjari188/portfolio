import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarCommon from './Components/Navbar-Common'
import 'bootstrap/dist/css/bootstrap.min.css';
import Granim from 'react-granim'
import Home from './Components/Home'

function App() {

  return (
    <>
      <Granim id="granim"></Granim>
      <NavbarCommon></NavbarCommon>
      <Home></Home>

    </>
  )
}

export default App
