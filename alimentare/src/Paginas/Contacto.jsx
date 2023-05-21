import React from 'react';
import { MDBInput,MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';


export default function App() {
  return (
   
    <Container className='me-auto' >
        <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
          <h2>Contacto</h2>

          <MDBInput label='Nombre' v-model='name' wrapperClass='mb-4' />

          <MDBInput type='email' label='Direccion Email' v-model='email' wrapperClass='mb-4' />

          <MDBInput label='Asunto' v-model='subject' wrapperClass='mb-4' />

          <MDBTextArea wrapperClass='mb-4' label='Consulta' />

          <MDBCheckbox wrapperClass='d-flex justify-content-center' label=' Recibir una copia' />

          <MDBBtn color='primary' block className='my-4'>
            Enviar
          </MDBBtn>
        </form>
    </Container>  
  );
}