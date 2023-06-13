import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Tarjeta(props) {
  return (
    <MDBCol style={{ height: '260px'}}>
        <MDBCard className='h-100' >
          <a href='/subirreceta'><MDBCardImage 
            src={props.receta.foto} 
            position='top' 
            alt='Agregar receta' 
            style={{ maxHeight: '150px', width: '100%', objectFit: 'contain'}} /></a>
          <MDBCardBody>
            <MDBCardTitle>{props.receta.Titulo}</MDBCardTitle>
            <MDBCardText>
              {props.receta.Receta}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
    </MDBCol>
  );
}
