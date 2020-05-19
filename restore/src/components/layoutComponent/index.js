import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderComponent } from '../../components';

const LayoutComponent = ({children}) => {
    return (
        <Container>
            <Row>
                <HeaderComponent/>
            </Row>
            <Row>
                {children}
            </Row>
        </Container>
    )
}
export default LayoutComponent;