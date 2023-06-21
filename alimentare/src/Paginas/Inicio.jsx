import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Imagen2 from '../Imagenes/verduras.png';
import CardImagen from '../Imagenes/verduras2.jpg';
import { Container} from 'react-bootstrap';

function GridExample() {
  return (
    
    <><Container > <Card.Img variant="top" src={Imagen2} width={180} height={350} />
    <Container className='me-auto'>
    </Container>
    
      <div class="container"style={{ padding: '20px' , textAlign:'center'}}>
      <h3>Recetas</h3>
    </div>	
     <Row xs={1} md={3} className="g-4" >
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Card>
            <Card.Img variant="top" src={CardImagen} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
<div class="container"style={{ padding: '20px' }}></div>
      </Row>
    </Container></>
  );
}

export default GridExample;