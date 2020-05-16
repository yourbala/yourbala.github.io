import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';

const Menu = ({homeUrl}) => {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href={homeUrl}>N Balasubramanian</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#team">Team</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
           {/*}
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
        */}
            </Navbar.Collapse>
          </Navbar>
    )
}

export default Menu;