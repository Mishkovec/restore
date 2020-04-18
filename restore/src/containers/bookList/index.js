import React from 'react';
import BookListItem from '../../components/bookListItem';

const BookList = () =>  { 
    const book = {
        title: 'My Book',
        author: 'I'
    }

    return (
        <div>
            <BookListItem book={book}/>
        </div>
    )
}
  
export default BookList;