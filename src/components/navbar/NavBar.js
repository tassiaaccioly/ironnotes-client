import React from 'react';
import Image from '../../images/icons/ironNotes(2).png';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar(){
    return(
        <div>
            <Navbar fixed="top" >
            <Navbar.Brand href="/"><Link to='/'></Link>
        <img className="logo" style={{width:'60px', margin: 'auto'}} src={Image} alt="Logo" />
    </Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    
  </Navbar>
  <br />
        </div>
        
    )
}

export default NavBar;
