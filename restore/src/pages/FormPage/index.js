import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { LayoutComponent } from '../../components';

const FormPage = () => {
    return (
        <LayoutComponent>
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
        </LayoutComponent>
    )
}
export default FormPage;