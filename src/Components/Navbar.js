import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './css/Navbar.css'

const NavbarComponent = ()=> {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link to="/home" >
          <Navbar.Brand>TopJobs<i className='bi bi-briefcase'/></Navbar.Brand>
          </Link>
          
          <Nav className="nav">
          <Link to="/home" >
            <button className='btn btn-light'>Home</button>
            </Link>
            <Link to="/Contact">
            <button className='btn btn-light'>Contact US</button>
            </Link>
            <Link to="/Jobs" >
            <button className='btn btn-light'>Jobs</button>
            </Link>
            
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavbarComponent;