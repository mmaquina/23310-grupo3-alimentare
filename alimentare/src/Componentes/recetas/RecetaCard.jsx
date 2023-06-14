import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function Tarjeta(props) {
  let link = '#';
  if (props.receta.subirReceta) {
    link = '/subirreceta';
  } 
  return (
        <Col>
          <Card>
          <a href={link}><Card.Img
            src={props.receta.foto} 
            position='top' 
            alt='Agregar receta' 
            style={{ maxHeight: '150px', width: '100%', objectFit: 'contain'}} 
          /></a>
          <Card.Body>
            <Card.Title>{props.receta.Titulo}</Card.Title>
            <Card.Text>
              {props.receta.Receta}
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
      )}