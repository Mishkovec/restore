import React, {Component} from 'react';
import BookListItem from '../bookListItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import withBookStoreService from '../hoc'
import { booksLoaded } from '../../actions'
import { BookStoreService } from '../../services';

class BookList  extends Component  {
    componentDidMount() {
        // const {bookStoreService} = this.props;
        const bookStoreService = new BookStoreService();
        const data = bookStoreService.getBooks();
        console.log(data)

        this.props.booksLoaded(data);
    }
    
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
const mapStateToProps =(state)=> {
    return {
        books: state.books
    }
}
// const mapDispatchToProps =(dispatch)=> {
    // return {
    //     booksLoaded: (newBooks) => {
    //         // dispatch({
    //         //     type: 'BOOKS_LOADED',
    //         //     payload: newBooks
    //         // })
                //==============================
    //         // dispatch(booksLoaded(newBooks))

                       
    //     }        
    // }

    //-----------------------------------
    // return bindActionCreators({
    //     booksLoaded
    // }, dispatch)
// }
const mapDispatchToProps = {
    booksLoaded
}
export default withBookStoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList));