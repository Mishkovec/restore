import React, { useEffect, useState } from 'react';
import {BookListItem, ErrorBoundry} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../store/books/actions';
import { Col } from 'react-bootstrap';

const BookListContainer = () =>  { 

    let books = useSelector(state => state.books.books)

    const dispatch = useDispatch()

    // useEffect(()=> {
    //     dispatch(getBooks())
    // }, [])

    return (
        <Col md="auto" className='book_list'>
            { 
                books.length > 0 &&
                books.map(item => {
                    return <ErrorBoundry key={item.id}>
                                <BookListItem key={item.id} book={item}/>
                           </ErrorBoundry>
                })
            }
        </Col>
    )
}
  
export default BookListContainer;