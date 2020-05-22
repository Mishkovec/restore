import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <Navbar bg="light" style={{width: '100%'}} sticky="top">
            <Nav className="mr-auto">
                <Link to="/" className='link'>Список книг</Link>
                <Link to='/add-book' className='link'>Добавить книгу</Link>
                <Link to='/cart' className='link'>Корзина</Link>
            </Nav>
        </Navbar>
    )
}
export default HeaderComponent;