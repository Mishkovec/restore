import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {CartPage, HomePage} from './pages'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact render={()=><HomePage/>}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </Router>
    )
};

export default App;