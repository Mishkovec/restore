import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {CartPage, HomePage, FormPage} from './pages'
import './index.scss'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact render={()=><HomePage/>}/>
                <Route path='/add-book' component={FormPage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </Router>
    )
};

export default App;