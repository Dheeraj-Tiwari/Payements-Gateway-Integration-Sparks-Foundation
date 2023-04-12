import { 
  Container, 
  Navbar, 
  NavbarBrand,
  Nav,
  Button
} from 'react-bootstrap';

import mainlogo from '../assets/img/logo.png'
import '../assets/css/header.css'

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="black"
      varient="black"
      fixed='top'
    >
      <Container
      >
        <NavbarBrand
          href="/"
          className='text-white'
        >
          <img
            src={mainlogo}
            alt='logo'
            width="40"
            height="40"
            className="bg-light rounded-circle d-inline-block align-top"
          />
          {' '}
          <h2 
            className='ml-5 d-inline bb'
            style={{
              marginLeft: "10px"
            }}
          >
            The Sparks Foundation
          </h2>
        </NavbarBrand>
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          className="border-0"           
        />
        <Navbar.Collapse 
          id="responsive-navbar-nav"
          className='justify-content-end'
        >
          <Nav
            className='align-items-end'
            style={{
              fontSize: "20px"
            }}
          >
            <Nav.Link
              href="https://www.thesparksfoundationsingapore.org/"
              target='_blank'
              className="text-white bb"
              variant="outline-primary"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="https://help.unicef.org/in/reimagine?campaignID=7011i000000kqRfAAI"
              target='_blank'
              className="text-white bb"
            >
              Cause
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Dheeraj-Tiwari/"
              target='_blank'
              className="text-white bb"
            >
              Developer
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="text-white bb"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}