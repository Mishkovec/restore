import React from 'react';
import { Col } from 'react-bootstrap';
import { LayoutComponent } from '../../components';
import { FormContainer } from '../../containers'

const FormPage = () => {
    return (
        <LayoutComponent>
            <Col>
               <FormContainer/>
            </Col>
        </LayoutComponent>
    )
}
export default FormPage;