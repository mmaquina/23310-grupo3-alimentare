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
          <a href='/subirreceta'><MDBCardImage src='https://icon-library.com/images/add-photo-icon/add-photo-icon-17.jpg' position='top' alt='Agregar receta' /></a>
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
