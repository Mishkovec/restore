import React from 'react';
import { Col } from 'react-bootstrap';
import {BookInfoContainer} from '../../containers';
import { LayoutComponent } from '../../components';

const BookInfoPage = () => {
    return (
        <LayoutComponent>
            <Col>
                <BookInfoContainer/>
            </Col>
        </LayoutComponent>
    )
}
export default BookInfoPage;