import React, {Component} from 'react';
import BookListItem from '../bookListItem';

class BookList  extends Component  {
    
    render () {
        const {books} = this.props;
        return (
            <ul>
                {
                    books.map((item)=>{
                        return (
                            <li>
                                <BookListItem book={item} key={item.id}/>
                            </li>
                        )
                    })
                }
            </ul>  
        )      
    }
}
export default BookList;