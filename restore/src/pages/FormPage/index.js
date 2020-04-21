import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { HeaderComponent } from '../../components';

const FormPage = () => {
    return (
        <Container>
            <Row>
                <HeaderComponent/>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Book name:</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Author:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Button type='primary'>Create book</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default FormPage;