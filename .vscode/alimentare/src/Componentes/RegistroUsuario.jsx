import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Componentes/firebase/FirebaseConfig";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth?.currentUser?.email); //Para saber quien esta logueado. ademas los signos de interrogacion sirven para indicar que no lea una variable antes de que tenga valor por eso no da error si no hay nadie logueado
      window.location = "/Login";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="6">
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            {/* Controla los datos enviados por el formulario cuando se hace click en el boton submit */}
            <Form>
              <Form.Group className="mb-3" controlId="correo">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@mail.com"
                  required
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su correo electrónico.
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Su correo no sera compartido con nadie.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="contrasenia1">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  required
                  name="contrasenia1"
                  type="password"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese una contraseña.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" onClick={signUp}>
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
