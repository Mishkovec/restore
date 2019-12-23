import React from 'react';
import { BookStoreServiceConsumer } from '../context'

const withBookStoreService = () => (Wrapped) => {
    return (props) => {
        return (
                <BookStoreServiceConsumer>
                    {
                        (bookstoreService) => {
                            return (
                                <Wrapped 
                                    {...props} 
                                    bookstoreService ={bookstoreService}
                                />)
                        }
                    }
                </BookStoreServiceConsumer>
        );
    }
};

export default withBookStoreService;