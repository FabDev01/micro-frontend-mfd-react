import React from 'react';
import HelloReactApp from './components/HelloReactApp';
import HelloReactSecondApp from './components/HelloReactSecondApp';
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Header = () => (
    <div>
        <Link to='/'>home</Link><br />
        <Link to='/react'>chamar react</Link><br />
        <Link to='/react-second'>chamar react 2</Link><br />
    </div >
)

export default () => {
    return (
        <Router history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/react' component={HelloReactApp} />
                <Route path='/react-second' component={HelloReactSecondApp} />
            </Switch>
        </Router>
    )
}

