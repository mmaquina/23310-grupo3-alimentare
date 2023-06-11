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
    <MDBCol>
        <MDBCard className='h-100'>
          <a href='/subirreceta'><MDBCardImage src={props.receta.foto} position='top' alt='Agregar receta' height={100}/></a>
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
