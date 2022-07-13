import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,Container} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import FacebookIcon from '@mui/icons-material/Facebook';
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
// import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";

// import {About} from '../pages/About'
// import {Home} from '../pages/Home'
// import {Resume} from '../pages/Resume'
// import {Projects} from '../pages/Projects'
   
export const NavgationBar = () =>  {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
  return (

  <div style={{backgroundColor: "white", width: "100%", paddingLeft: "20%"}}>
     <Nav variant="pills" activeKey="" onSelect={handleSelect}>
    
      <Nav.Item>
      <Nav.Link eventKey="1" href="#/home">
          HOME
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" href="#/home">
          WEDDINGS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" href="#/home">
        PROPERTIES 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" href="#/home">
        WORKSHOPS
        </Nav.Link>
      </Nav.Item>
     <NavDropdown title="About" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item style={{paddingLeft: "20%"}} >
        <Nav.Link eventKey="3" href="#/home">
          <LoginIcon></LoginIcon>
        sign In
        </Nav.Link>
      </Nav.Item>
    </Nav>
    
      <div>
                
      {/* <FacebookIcon  color="secondary" fontSize="large"></FacebookIcon> */}
      
    </div>
  </div>
 
 
      
  )
}
