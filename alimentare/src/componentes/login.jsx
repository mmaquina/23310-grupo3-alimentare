import React from 'react';
import { Button, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import { Envelope, Unlock } from 'react-bootstrap-icons';

function LoginComponent() {
  return (
      <Container fluid>
          <Row className='justify-content-center'>

              <Col sm='6'>

                  <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                    <h3 className="fw-bold mb-3 ps-5 pb-3 text-center" style={{ letterSpacing:   '1px' }}>Log in
                    </h3>

                      <InputGroup className="mb-4 mx-5 w-100">
                          <InputGroup.Text id="basic-addon1"><Envelope /></InputGroup.Text>
                          <Form.Control
                              placeholder="Correo"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                          />
                      </InputGroup>

                      <InputGroup className="mb-4 mx-5 w-100">
                          <InputGroup.Text id="basic-addon2"><Unlock /></InputGroup.Text>
                          <Form.Control
                              placeholder="mail address"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                          />
                      </InputGroup>


                      <Button className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</Button>
                      <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a>
                      </p>
                      <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a>
                      </p>

                </div>

            </Col>

        </Row>

    </Container>
  );
}

export default LoginComponent;