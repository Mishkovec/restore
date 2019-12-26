import React, {Fragment} from 'react';

const BookListItem = ({book}) => {
    const {title, author} = book;
    return (
        <Fragment>
            <div>{title}</div>
            <div>{author}</div>
        </Fragment>        
    )
}
export default BookListItem;