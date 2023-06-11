import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import db from '../firebase/FirebaseConfig.jsx';
import {getItems, setItems}  from '../firebase/utils.jsx';

const COLECCION_RECETAS = 'recetas'

function SubirReceta() {


    getItems(db, COLECCION_RECETAS).then((response) => console.log(response) );


    
    const manejaSubmit = (event) => {
        event.preventDefault(); // Evita la recarga de la página por defecto al enviar el formulario

        const titulo = document.getElementById('titulo').value;
        const recetaText = document.getElementById('recetaText').value;
        const ingredientes = document.getElementById('ingredientes').value;

        console.log('Titulo:', titulo);
        console.log('Receta:', recetaText);
        console.log('Ingredientes:', ingredientes);
        setItems(db, COLECCION_RECETAS, {'Titulo': titulo, 'Receta': recetaText, 'Ingredientes': ingredientes});
    };
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col sm='10'>
                    <div className='d-flex flex-column justify-content-center h-custom-2 w-100 pt-4'>

                        {/* Controla los datos enviados por el formulario cuando se hace click en el boton submit */}
                        <Form onSubmit={manejaSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Título de la receta</Form.Label>
                                <Form.Control id="titulo" type="text" placeholder="Título de la receta" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Ingredientes</Form.Label>
                                <textarea class="form-control" id="ingredientes" rows="3"></textarea>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Receta</Form.Label>
                                <textarea class="form-control" id="recetaText" rows="5"></textarea>
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