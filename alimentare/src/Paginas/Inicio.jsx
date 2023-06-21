import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardImagen from '../Imagenes/verduras.png'
import { Container} from 'react-bootstrap';

function GridExample() {
  return (
    <Container className='me-auto' >
   <Row xs={2} md={4} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={CardImagen} />
            <Card.Body>
              <Card.Title>Recetas</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default GridExample;