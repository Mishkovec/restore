import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

const HeaderComponent = () => {
    return (
        <Navbar bg="light" style={{width: '100%'}} sticky="top">
            <Nav className="mr-auto">
                <Nav.Link href="/">Список книг</Nav.Link>
                <Nav.Link href='/add-book'>Добавить книгу</Nav.Link>
                <Nav.Link href='/cart'>Корзина</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default HeaderComponent;