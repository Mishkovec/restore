import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withBookStoreService from '../hoc';
import {CardPage, HomePage} from '../../pages'

const App = ({bookStoreService}) => {
    console.log(bookStoreService.getBooks());
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/card' component={CardPage}/>
        </Switch>
    )
};

export default withBookStoreService()(App);