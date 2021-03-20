import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import '../../styles/header.scss';
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Twitter, } from '@material-ui/icons';
const Header = () => {
  return (
    <div>
        <Navbar className='gr-email-verify-header'>
          <Navbar.Brand href="#home">EmailListCleaner</Navbar.Brand>
          <Nav className="contact-icons">
            <Nav.Link href="#home"><FacebookIcon/></Nav.Link>
            <Nav.Link href="#features"><InstagramIcon/></Nav.Link>
            <Nav.Link href="#pricing"><Twitter/></Nav.Link>
            <Nav.Link href="#features"><YouTubeIcon/></Nav.Link>
          </Nav>
        </Navbar>
    </div>
  )
}

export default Header

