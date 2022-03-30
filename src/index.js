import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './contact';
import Portfolio from './portfolio';
import './css/reset.css';
import './css/main.css';


ReactDOM.render((
  <BrowserRouter >
    <div>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={App}/>
      <Route path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio}/>
      <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact}/>
    </div>
</BrowserRouter>), document.getElementById('root'))
