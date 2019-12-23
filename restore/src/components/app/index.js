import React from 'react';
import {withBookStoreService} from '../hoc';
import BookStoreService from '../../services';

const App = ({bookStoreService}) => {
    console.log(BookStoreService.getBooks());
    return <div>App</div>
};

export default App;