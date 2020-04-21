import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {CartListContainer} from '../../containers';
import { HeaderComponent } from '../../components';

const CartPage = () => {
    return (
        <Container>
            <Row>
                <HeaderComponent/>
            </Row>
            <Row>
                <Col>
                    <CartListContainer/>
                </Col>
            </Row>
        </Container>
    )
}
export default CartPage;