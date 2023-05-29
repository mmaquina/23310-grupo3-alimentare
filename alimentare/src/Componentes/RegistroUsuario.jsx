import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Registro() {
  const [passwordMatch, setPasswordMatch] = useState(true);

  const manejaSubmit = (event) => {
    event.preventDefault(); // Evita la recarga de la página por defecto al enviar el formulario
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const contrasenia1 = event.currentTarget.contrasenia1.value;
      const contrasenia2 = event.currentTarget.contrasenia2.value;

      if (contrasenia1 !== contrasenia2) {
        setPasswordMatch(false);
        return;
      } else {
        setPasswordMatch(true);
      }
    // if (event.currentTarget.contrasenia1.value !== event.currentTarget.contrasenia2.value) {
    //   console.log("no coinciden ")
    //   event.stopPropagation();
    // } 

      console.log("Email:", event.currentTarget.correo.value);
      console.log("Textarea:", event.currentTarget.contrasenia1.value);
      console.log("Textarea:", event.currentTarget.contrasenia2.value);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="6">
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            {/* Controla los datos enviados por el formulario cuando se hace click en el boton submit */}
            <Form onSubmit={manejaSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control id="correo" type="email" placeholder="ejemplo@mail.com" required name="email"/>
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su correo electrónico.
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Su correo no sera compartido con nadie.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  required
                  name="contrasenia1"
                  id="contrasenia1"
                  type="password"
                  placeholder="Contraseña"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese una contraseña.
                </Form.Control.Feedback>                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repetir contraseña</Form.Label>
                <Form.Control
                  name="contrasenia2"
                  required
                  id="contrasenia2"
                  type="password"
                  placeholder="Repetir contraseña"
                  isInvalid={!passwordMatch}
                />
                <Form.Control.Feedback type="invalid">
                  Las contraseñas no coinciden.
                </Form.Control.Feedback>
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
