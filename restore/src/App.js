import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {useRoutes} from 'hookrouter';
import {CartPage, HomePage, FormPage, BookInfoPage} from './pages'
import './index.scss'

const App = () => {
    
    // const routes = {
    //     '/': () => <HomePage />,
    //     '/add-book': () => <FormPage />,
    //     '/cart': () => <CartPage />,
    //     '/book-info/:id': ({id}) => <BookInfoPage id={id} />
    // };

    // const routeResult = useRoutes(routes);
    
    // return routeResult // || <NotFoundPage />;

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/add-book' component={FormPage}/>
                <Route path='/cart' component={CartPage}/>
                <Route path='/book-info/:id' component={BookInfoPage}/>
            </Switch>
        </Router>
    )
};

export default App;