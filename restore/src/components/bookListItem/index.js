import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {A} from 'hookrouter';
import {setBookInfo} from '../../store/books/actions'

const BookListItem = ({book}) => {
    const {title, author, img, id, thumbnailUrl} = book;
    const dispatch = useDispatch()
    
    return (   
        <Card style={{ width: '18rem', margin: '10px'}}>
            <Card.Img variant="top" src={thumbnailUrl} style={{margin: 'auto', width: '150px'}}/>
            <Card.Body>
                <Card.Title><b>{title}</b></Card.Title>
                <Card.Text>
                    Автор: {author}
                </Card.Text>

                <div className='btn_block'>
                    <Button variant="success">В корзину</Button>
                
                    <A href={`/book-info/${id}`}>
                        <Button variant="info" onClick={()=>dispatch(setBookInfo(book))}>
                            Описание
                        </Button>
                    </A>
                </div>
            </Card.Body>
        </Card>   
    )
}
export default BookListItem;

// <Button variant="info" onClick={()=> {history.replace('/book-info')}}>Описание</Button>