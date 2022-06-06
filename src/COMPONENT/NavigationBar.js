import { Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar =() =>{
    return(
        <Navbar variant="dark">
          <Container>
              <Navbar.Brand>BambangMovie</Navbar.Brand>
              <Nav>
              <Nav.Link href="#wibu">Trending</Nav.Link>
              <Nav.Link href="#super">Superhero</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
    )
}
export default NavigationBar