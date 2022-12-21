import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">WeatherReport</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#">Weather</Nav.Link>
                        <Nav.Link href="login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}


export default ColorSchemesExample;