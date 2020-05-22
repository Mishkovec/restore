import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import {addToCart, removeFromCart} from '../../store/books/actions'

const CartListItem = ({book}) => {
    const {title, amount, id, price} = book;
    const dispatch = useDispatch()
    
    return (   
        <Card style={{margin: "10px"}}>
            <Card.Body  className='cartListItem'>
                <Card.Title>Title: {title}</Card.Title>
                
                <Card.Text>
                    Amount: {amount}
                </Card.Text>

                <Card.Text>
                    Price: {price}
                </Card.Text>

                <Button variant="success" onClick={()=> dispatch(addToCart(id))}>Add</Button>
                <Button variant="danger" onClick={()=> dispatch(removeFromCart(id))}>Remove</Button>
            </Card.Body>
        </Card>   
    )
}
export default CartListItem;