import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'

import {setBookInfo} from '../../store/books/actions'
import {addToCart} from '../../store/cart/actions'

const BookListItem = ({book}) => {
    const {title, author, img, id, thumbnailUrl, price} = book;
    const dispatch = useDispatch()
    const history = useHistory()
    
    return (   
        <Card style={{ width: '18rem', margin: '10px'}}>
            <Card.Img variant="top" src={thumbnailUrl} style={{margin: 'auto', width: '150px'}}/>
            <Card.Body>
                <Card.Title><b>{title}</b></Card.Title>
                <Card.Text>
                    Автор: {author}
                </Card.Text>

                <Card.Text>
                    Цена: {price}
                </Card.Text>

                <div className='btn_block'>
                    <Button 
                        variant="success"
                        onClick = {()=> {dispatch(addToCart(id))}}
                    >В корзину</Button>
                
                    
                    <Button variant="info" onClick={()=>{
                        dispatch(setBookInfo(book))
                        history.replace(`/book-info/${id}`)
                    }}>
                        Описание
                    </Button>
                    
                </div>
            </Card.Body>
        </Card>   
    )
}
export default BookListItem;