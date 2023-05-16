import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MyForm() {
    const handleSubmit = (event) => {
      event.preventDefault(); // Evita la recarga de la página por defecto al enviar el formulario
      
      const email = document.getElementById('exampleForm.ControlInput1').value;
      const textarea = document.getElementById('exampleForm.ControlTextarea1').value;
  
      // Haz algo con los datos del formulario, como enviarlos a un servidor o realizar validaciones
      console.log('Email:', email);
      console.log('Textarea:', textarea);
    };
}
function Registro() {
    const manejaSubmit = (event) => {
        event.preventDefault(); // Evita la recarga de la página por defecto al enviar el formulario
        
        const email = document.getElementById('correo').value;
        const password1 = document.getElementById('contrasenia1').value;
        const password2 = document.getElementById('contrasenia2').value;

    
        console.log('Email:', email);
        console.log('Textarea:', password1);
        console.log('Textarea:', password2);

      };
  return (
      <Container>
          <Row className='justify-content-center'>
              <Col sm='6'>
                  <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                  {/* Controla los datos enviados por el formulario cuando se hace click en el boton submit */}
                      <Form onSubmit={manejaSubmit}>  
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Correo Electrónico</Form.Label>
                              <Form.Control id="correo" type="email" placeholder="Correo" />
                              <Form.Text className="text-muted">
                                  Tu correo no sera compartido con nadie.
                              </Form.Text>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Contraseña</Form.Label>
                              <Form.Control id='contrasenia1' type="password" placeholder="Contraseña" />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Contraseña</Form.Label>
                              <Form.Control id='contrasenia2' type="password" placeholder=" Repite la contraseña" />
                          </Form.Group>

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

export default Registro;