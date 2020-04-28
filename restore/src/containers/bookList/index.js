import React, { useEffect } from 'react';
import BookListItem from '../../components/bookListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../store/books/actions';

const BookListContainer = () =>  { 
    // const book = {
    //     title: 'My Book',
    //     author: 'I'
    // }
    const books = [] //useSelector(store.books)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getBooks())
    }, [])

    return (
        <div>
            {
                books.map((item, idx) => {
                    return <BookListItem key={idx} book={item}/>
                })
            }
        </div>
    )
}
  
export default BookListContainer;