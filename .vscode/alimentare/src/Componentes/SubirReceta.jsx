import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  Timestamp,
} from "firebase/firestore/lite";
import db from "./firebase/FirebaseConfig.jsx";

function SubirReceta() {
  async function getProductos(proddb) {
    const productosCol = collection(proddb, "productos");
    const productosSnapshot = await getDocs(productosCol);
    const productosList = productosSnapshot.docs.map((doc) => doc.data());
    return productosList;
  }

  getProductos(db).then((response) => console.log(response));

  async function setRecetas(proddb, receta) {
    const seconds = Timestamp.fromDate(new Date()).seconds;
    console.log("timestamp:", seconds);
    const docData = doc(proddb, "recetas", seconds.toString());
    await setDoc(docData, receta);

    return true;
  }

  const manejaSubmit = (event) => {
    event.preventDefault(); // Evita la recarga de la página por defecto al enviar el formulario

    const titulo = document.getElementById("titulo").value;
    const recetaText = document.getElementById("recetaText").value;
    const ingredientes = document.getElementById("ingredientes").value;

    console.log("Titulo:", titulo);
    console.log("Receta:", recetaText);
    console.log("Ingredientes:", ingredientes);
    setRecetas(db, {
      Titulo: titulo,
      Receta: recetaText,
      Ingredientes: ingredientes,
    });
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="10">
          <div className="d-flex flex-column justify-content-center h-custom-2 w-100 pt-4">
            {/* Controla los datos enviados por el formulario cuando se hace click en el boton submit */}
            <Form onSubmit={manejaSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Título de la receta</Form.Label>
                <Form.Control
                  id="titulo"
                  type="text"
                  placeholder="Título de la receta"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ingredientes</Form.Label>
                <textarea
                  class="form-control"
                  id="ingredientes"
                  rows="3"
                ></textarea>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Receta</Form.Label>
                <textarea
                  class="form-control"
                  id="recetaText"
                  rows="5"
                ></textarea>
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

export default SubirReceta;
