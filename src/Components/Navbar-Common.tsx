import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { RiHomeHeartFill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { GiHumanTarget } from "react-icons/gi";
import { useLocation, useNavigate } from 'react-router-dom'

interface navbarProps {
  scrollIntoAbout: Function
}

function NavbarCommon(props: navbarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const redirectToAbout = () =>{
    if(location.pathname === '/portfolio'){
      props.scrollIntoAbout();
    }
    else{
      navigate('/portfolio');
      setTimeout(()=>{
        props.scrollIntoAbout()
      },300);
    }
    
  }

  return (
    <Navbar expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/portfolio" ><img src={window.location.origin + '/portfolio/images/logo.svg'}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link className='link' as={Link} to="/portfolio"><RiHomeHeartFill /><span>Home</span></Nav.Link>
            <Nav.Link className='link' as={Link} to="/portfolio/resume"><ImProfile /><span>Resume</span></Nav.Link>
            <Nav.Link onClick={redirectToAbout} className='link'><GiHumanTarget /><span>About</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarCommon