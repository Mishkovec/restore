import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../index.scss'

const CartListItem = ({book}) => {
    const {title, author, img, amount} = book;
    
    return (   
        <Card>
            <Card.Body  className='cartListItem'>
                <Card.Title>Title: {title}</Card.Title>
                <Card.Text>
                    Author: {author}
                </Card.Text>

                <Card.Text>
                    Amount: {amount}
                </Card.Text>

                <Button variant="success">Add</Button>
                <Button variant="danger">Remove</Button>
            </Card.Body>
        </Card>   
    )
}
export default CartListItem;