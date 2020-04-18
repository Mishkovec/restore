import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookListItem = ({book}) => {
    const {title, author, img} = book;
    
    return (   
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Title: {title}</Card.Title>
                <Card.Text>
                    Author: {author}
                </Card.Text>

                <Button variant="success">Add</Button>
                <Button variant="danger">Remove</Button>
            </Card.Body>
        </Card>   
    )
}
export default BookListItem;