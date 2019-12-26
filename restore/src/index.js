import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {
    App,
    ErrorBoundry
} from './components';
import { BookStoreService } from './services';
import { BookStoreServiceProvider } from './components/context';

import store from './store';

const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}> 
        <ErrorBoundry>
            <BookStoreServiceProvider value={bookStoreService}>
                <Router>
                    <App bookStoreService={bookStoreService}/>
                </Router>   
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);