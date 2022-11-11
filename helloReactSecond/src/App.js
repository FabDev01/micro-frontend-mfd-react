import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'

const helloWorld = () => (<div>Hello World!</div>)
const helloReact = () => (<div>Hello React!</div>)


export default ({ history }) => {
    return <div>
        {/* <Router history={history}>
            <Switch>
                <Route path="/react" component={helloReact} />
                <Route path="/" component={helloWorld} />
            </Switch>
            <br />
            <Link to='/react'>entrar no repo React!</Link>
            <br />
            <Link to='/'>voltar para a home "container"</Link>
        </Router> */}
        <h2>Repo 2 React</h2>
    </div>
}