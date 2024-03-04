import React from "react";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import db from "../Componentes/firebase/FirebaseConfig"; //Busca la conexión a la base de datos
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../Componentes/firebase/FirebaseConfig";

function Contacto() {
  //Estado para cargar los valores del form
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [apellidoUsuario, setApellidoUsuario] = useState("");
  const [correoUsuario, setCorreoUsuario] = useState("");
  const [motivoContactoUsuario, setMotivoContactoUsuario] = useState("");
  const [descripcionContactoUsuario, setDescripcionContactoUsuario] =
    useState("");

  const comentariosColeccionRef = collection(db, "comentarios"); // Pasa el valor de la conexión y la colección que debe buscar

  const enviaComentario = async () => {
    try {
      await addDoc(comentariosColeccionRef, {
        nombre: nombreUsuario,
        apellido: apellidoUsuario,
        correo: correoUsuario,
        motivoContacto: motivoContactoUsuario,
        descripcionContacto: descripcionContactoUsuario,
        userID: auth?.currentUser?.uid,
      });
      limpiarFormulario();
    } catch (error) {
      console.log(error);
    }
  };

  function limpiarFormulario() {
    // Reinicia el formulario completo
    document.getElementById("formularioContacto").reset();
  }

  return (
    <>
      <Container className="me-auto">
        <Row className="justify-content-center">
          <Col sm="6">
            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              {/* Controla los datos enviados por el formulario cuando se hace click en el boton submit */}
              {/* <Form onSubmit={manejaSubmit}>   */}
              <Form id="formularioContacto">
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) => setNombreUsuario(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apellido"
                    onChange={(e) => setApellidoUsuario(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    id="correo"
                    type="email"
                    placeholder="Correo"
                    onChange={(e) => setCorreoUsuario(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAsunto">
                  <Form.Label>Asunto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Motivo de contacto"
                    onChange={(e) => setMotivoContactoUsuario(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Consulta</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Descripción"
                    style={{ height: "100px" }}
                    onChange={(e) =>
                      setDescripcionContactoUsuario(e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Text className="text-muted ">
                  <p>Tu información no sera compartida con nadie.</p>
                </Form.Text>
                <Button variant="primary" onClick={() => enviaComentario()}>
                  Enviar
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Contacto;
