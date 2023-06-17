import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function Tarjeta(props) {
  let link = '#';
  if (props.producto.subirProducto) {
    link = '/subirproducto';
  } 
  return (
        <Col>
          <Card>
          <a href={link}><Card.Img
            src={props.producto.foto} 
            position='top' 
            alt='' 
            style={{ maxHeight: '150px', width: '100%', objectFit: 'contain'}} 
          /></a>
          <Card.Body>
            <Card.Title>{props.producto.Titulo}</Card.Title>
            <Card.Text>
              {props.producto.Producto}
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
      )}