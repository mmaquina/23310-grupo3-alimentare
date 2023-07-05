import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function Tarjeta(props) {

  return (
        <Col>
          <Card>
          <Card.Img
            src={props.producto.foto} 
            position='top' 
            alt='' 
            style={{ maxHeight: '150px', width: '100%', objectFit: 'contain'}} 
          />
          <Card.Body>
            <Card.Title className='text-capitalize'>{props.producto.food_name}</Card.Title>
            <Card.Text >
              ${props.producto.tag_id}
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
      )}