import { Container, Nav, Navbar } from "react-bootstrap";


export default function Footer(){
    return(
        <Navbar
            fixed="bottom"
            bg="black"
            variant="black"
            className="align-items-center text-white"
        >
            <Container
                className="flex-column"
            >
                <p
                    className="mb-5"
                    style={{
                        marginLeft:"30px"
                    }}
                >
                    A Project for The Sparks Foundation Task
                </p>
                <Nav>
                    <Nav.Link
                        href="https://www.linkedin.com/in/dheeraj-sai-tiwari/"
                        target='_blank'
                        className="text-white "
                    >
                        @Made by <bold>Dheeraj Sai Tiwari</bold>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}