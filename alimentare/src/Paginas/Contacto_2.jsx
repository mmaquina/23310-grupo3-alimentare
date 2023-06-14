import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 function Contacto() {
  return (
   
    <Container className='me-auto' >
          <Row className='justify-content-center'>
              <Col sm='6'>
                  <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                  {/* Controla los datos enviados por el formulario cuando se hace click en el boton submit */}
                  {/* <Form onSubmit={manejaSubmit}>   */}
                  <Form>
      						  <Form.Group className="mb-3" >
                         <Form.Label>Nombre</Form.Label>
                         <Form.Control type="text" placeholder="Nombre y Apellido" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                          <Form.Label>Correo Electrónico</Form.Label>
                          <Form.Control id="correo" type="email" placeholder="Correo" />
			              </Form.Group>

			      			  <Form.Group className="mb-3" controlId="formBasicAsunto">
                          <Form.Label>Asunto</Form.Label>
                          <Form.Control type="text" placeholder="Motivo de contacto" />
                    </Form.Group>
                        
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Consulta</Form.Label>
                          <Form.Control type="text" placeholder="Descripcion" />
                    </Form.Group>
						        <Form.Text className="text-muted">
									        Tu informacion no sera compartido con nadie.
						        </Form.Text>
                    <Button variant="primary" type="submit"> 
                            Enviar
                    </Button>
                  </Form>
                  </div>
              </Col>
          </Row>
    </Container>  
  );
}
export default Contacto