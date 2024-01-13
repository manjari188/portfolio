import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { RiHomeHeartFill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";

function NavbarCommon() {

  return (
    <Navbar expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home"><img src='portfolio/src/assets/logo.svg'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link className='link' as={Link} to="/portfolio"><RiHomeHeartFill /><span>Home</span></Nav.Link>
            <Nav.Link className='link' as={Link} to="/portfolio/resume"><ImProfile /><span>Resume</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarCommon