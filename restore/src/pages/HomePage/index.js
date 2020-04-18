import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {BookListContainer} from '../../containers';
import { HeaderComponent } from '../../components';

const HomePage = () => {
    return (
        <Container>
            <Row>
                <HeaderComponent/>
            </Row>
            <Row>
                <Col>
                    <BookListContainer/>
                </Col>
            </Row>
        </Container>
    )
}
export default HomePage;