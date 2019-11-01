import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cadastro from './pages/Cadastro';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter >
        <Switch>
            <Route path = "/" exact ={true} component={App}/>
            <Route path = "/cadastro" exact ={true} component={Cadastro}/>
        </Switch>
    </BrowserRouter >
    , document.getElementById('root'));

serviceWorker.unregister();
