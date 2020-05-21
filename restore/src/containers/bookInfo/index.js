import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, addToCart } from '../../store/books/actions';
import {useHistory} from 'react-router-dom'

const BookInfoContainer = () =>  {
    const book = useSelector(state => state.books.bookInfo)
    const {title, author, img, id, longDescription, pageCount, thumbnailUrl, price} = book;
    const dispatch = useDispatch()
    const history = useHistory()
  
    return (
        <Card style={{margin: '10px'}}>
            <Card.Body>
                <div className='info'>
                    <div>
                        <Card.Title><b>{title}</b></Card.Title>

                        <Card.Text>
                            Автор: {author}
                        </Card.Text>

                        <Card.Text>
                            Количество страниц: {pageCount}
                        </Card.Text>

                        <Card.Text>
                            Цена: {price}
                        </Card.Text>
                    </div>
                    <Card.Img variant="top" src={thumbnailUrl} style={{margin: '10px', width: '150px'}}/>
                </div>

                <Card.Text>
                    Описание: {longDescription}
                </Card.Text>

                <Button variant="success" onClick={()=> dispatch(addToCart(id))}>Добавить в корзину</Button>
                <Button 
                    variant="danger" 
                    onClick={()=> {
                        dispatch(removeBook(id))
                        history.replace('/')
                    }}
                >Удалить книгу</Button>
            </Card.Body>
        </Card>   
    )
}
  
export default BookInfoContainer;