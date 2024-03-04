import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Imagen1 from "../Imagenes/Compartir.png";
import Imagen2 from "../Imagenes/verduras.png";
import Imagen3 from "../Imagenes/Guiso.png";
import Imagen4 from "../Imagenes/Productos.png";
import { Container } from "react-bootstrap";
import "../Style/Inicio.css";

function GridExample() {
  return (
    <>
      <Container>
        {" "}
        <Card.Img variant="top" src={Imagen2} />
        <Container className="me-auto"></Container>
        <div class="container" style={{ padding: "20px", textAlign: "center" }}>
          <h3>
            Sobre Nosotros: <br />
            Alimentare es una comunidad dedicada a compartir multiples recetas
            de caracter nutritivo y a fomentar el comercio sobre los productos
            que la integran
          </h3>
        </div>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <a href="/Recetas" className="nav-link  text-body-secondary">
                <Card.Img variant="top" src={Imagen3} height="250px" />
                <Card.Body>
                  <Card.Title>
                    <strong>Recetas</strong>
                  </Card.Title>
                  <Card.Text>
                    En esta pagina encontraras recetas variadas de platos muy
                    interesantes, deliciosos, cuidados y explicados paso a paso.
                  </Card.Text>
                </Card.Body>
              </a>
            </Card>
          </Col>
          <Col>
            <Card>
              <a href="/Login" className="nav-link  text-body-secondary">
                <Card.Img variant="top" src={Imagen1} height="250px" />
                <Card.Body>
                  <Card.Title>
                    <strong>Compartir</strong>
                  </Card.Title>
                  <Card.Text>
                    Al loguearte, estaremos en contacto brindandote las mejores
                    propuestas, ademas podras compartir tus recetas y
                    especialidades con otros usuarios.
                  </Card.Text>
                </Card.Body>
              </a>
            </Card>
          </Col>
          <Col>
            <Card>
              <a href="/Alimentos" className="nav-link  text-body-secondary">
                <Card.Img variant="top" src={Imagen4} height="250px" />
                <Card.Body>
                  <Card.Title>
                    <strong>Venta</strong>
                  </Card.Title>
                  <Card.Text>
                    Además te brindaremos el catálogo completo con productos de
                    primera calidad y a los mejores precios!
                  </Card.Text>
                </Card.Body>
              </a>
            </Card>
          </Col>
          <div class="container" style={{ padding: "20px" }}></div>
        </Row>
      </Container>
    </>
  );
}

export default GridExample;
