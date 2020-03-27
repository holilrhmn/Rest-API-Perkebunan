require('./bootstrap');

import React from 'react';

import { render } from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';


import Master from './components/Master';

import CreateKebun from './components/CreateKebun';

import DisplayKebun from './components/DisplayKebun';

import UpdateKebun from './components/UpdateKebun';


render(

  <Router history={browserHistory}>

      <Route path="/" component={Master} >

        <Route path="/add-kebun" component={CreateKebun} />

        <Route path="/display-kebun" component={DisplayKebun} />

        <Route path="/edit/:id" component={UpdateKebun} />

      </Route>

    </Router>,

        document.getElementById('crud-app'))
