import React from 'react';
import {Col} from 'react-bootstrap'
import {CartListContainer} from '../../containers';
import { LayoutComponent } from '../../components';

const CartPage = () => {
    return (
        <LayoutComponent>
            <Col>
                <CartListContainer/>
            </Col>
        </LayoutComponent>
    )
}
export default CartPage;