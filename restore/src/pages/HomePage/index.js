import React from 'react';
import BookList from '../../components/bookList';

const HomePage = () => {
    return (
        <div>
            <BookList books = {[{title:'aaa'}]}/>
        </div>
    )
}
export default HomePage;