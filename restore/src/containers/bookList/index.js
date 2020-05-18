import React, { useEffect, useState } from 'react';
import BookListItem from '../../components/bookListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../store/books/actions';

const BookListContainer = () =>  { 

    let books = useSelector(state => state.books.books)
    console.log('b',books)
   

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getBooks())
    }, [])

    return (
        <div className='book_list'>
            { 
                books.length > 0 &&
                books.map((item, idx) => {
                    console.log(item)
                    return <BookListItem key={idx} book={item}/>
                })
            }
        </div>
    )
}
  
export default BookListContainer;