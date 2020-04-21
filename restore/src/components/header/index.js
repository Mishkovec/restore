import React from 'react';
import { Nav } from 'react-bootstrap';

const HeaderComponent = () => {
    return (
        <Nav
        justify 
        variant="tabs"
        activeKey="/home"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/">Список книг</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/add-book'>Добавить книгу</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/cart'>Корзина</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default HeaderComponent;