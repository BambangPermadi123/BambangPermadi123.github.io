import { Col, Container, Row, Button } from 'react-bootstrap';
const Intro =() =>{
    return(
        <div className="intro">
        <Container className="text-white d-flex justify-content-center text-center align-item-center">
          <Row>
            <Col>
            <div className="tittle">Nonton Gratis</div>
            <div className="tittle">Gak Pke Ribet</div>
            <div className="introButton mt-4 text-center">
                <Button href="#semua">rekomendasi</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
export default Intro