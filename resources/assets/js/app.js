
require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Example from './components/Example';
import TambahItem from './components/TambahItem';
import DaftarItem from './components/DaftarItem';
import EditItem from './components/EditItem';


//render(<Example />, document.getElementById('example'));
/*
render(
  <Router history="{browserHistory}">
    <Route path="/" components="{Example}">
      <Route path="/tambah" components="{TambahItem}"/>
    </Route>
  </Router>,
  document.getElementById('example')
);
*/

render(
  <Router history={browserHistory}>
      <Route path="/" component={Example} >
        <Route path="/tambah" component={TambahItem} />
        <Route path="/daftar" component={DaftarItem} />
        <Route path="/edit/:id" component={EditItem} />
      </Route>
    </Router>,
        document.getElementById('example'));
