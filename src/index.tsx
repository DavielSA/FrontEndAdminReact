import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
// core components
import Admin from './layouts/Admin';
import RTL from './layouts/RTL';
import 'assets/css/material-dashboard-react.css?v=1.6.0';

const store = createStore(reducers,
  // tslint:disable-next-line: no-string-literal
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  
  // tslint:disable-next-line: no-string-literal
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

const hist = createBrowserHistory();

ReactDOM.render(
  // tslint:disable-next-line: jsx-wrap-multiline
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        {/* <Route path="/rtl" component={RTL} /> */}
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
