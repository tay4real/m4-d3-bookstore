import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";

function MyFooter() {
    return (
    <footer>    
        <Navbar expand="lg" variant="light" bg="dark">
            <Container>
                <Nav className="m-auto" >
                    <Nav.Link href="#home">Terms and Privacy Notice</Nav.Link>
                    <Nav.Link href="#link">Send us feedback</Nav.Link>
                    <Nav.Link href="#link">Help</Nav.Link>
                    <Nav.Link href="#link">&copy; 2020, Glitzsint Online Bookstore</Nav.Link>
                </Nav>
            </Container>
        </Navbar> 
    </footer>
    )
}

export default  MyFooter