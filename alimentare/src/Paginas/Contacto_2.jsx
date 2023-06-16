import { useEffect, useState } from 'react';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { Auth } from "./components/auth";
import db from "../Componentes/firebase/FirebaseConfig"; //Busca la conexión a la base de datos
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

function Contacto() {
      //Crea los estados de los comentarios para mostrarlos en la pagina apenas carga
      const [comentariosList, setComentariosList] = useState([])

      //Estado para cargar los valores del form
      const [nombre, setNombre] = useState("")
      const [apellido, setApellido] = useState("")
      const [correo, setCorreo] = useState("")
      const [motivoContacto, setMotivoContacto] = useState("")
      const [descripcionContacto, setDescripcionContacto] = useState("")

      const comentariosColeccionRef = collection(db, "comentarios");// Pasa el valor de la conexión y la colección que debe buscar



      const enviaComentario = async () => {

      }

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
                                                <Form.Control type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
                                          </Form.Group>

                                          <Form.Group className="mb-3" >
                                                <Form.Label>Apellido</Form.Label>
                                                <Form.Control type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)}/>
                                          </Form.Group>

                                          <Form.Group className="mb-3" >
                                                <Form.Label>Correo Electrónico</Form.Label>
                                                <Form.Control id="correo" type="email" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)}/>
                                          </Form.Group>

                                          <Form.Group className="mb-3" controlId="formBasicAsunto">
                                                <Form.Label>Asunto</Form.Label>
                                                <Form.Control type="text" placeholder="Motivo de contacto" onChange={(e) => setMotivoContacto(e.target.value)}/>
                                          </Form.Group>

                                          <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Consulta</Form.Label>
                                                <Form.Control as="textarea" placeholder="Descripción" style={{ height: '100px' }} onChange={(e) => setDescripcionContacto(e.target.value)} />
                                          </Form.Group>
                                          <Form.Text className="text-muted">
                                                Tu información no sera compartida con nadie.
                                          </Form.Text>
                                          <Button variant="primary" onClick={enviaComentario}>
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