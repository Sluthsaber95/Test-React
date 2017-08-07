import 'babel-polyfill'; //There may be features in ES6 that babel cannot transpile from ES6 -> ES5; in your project you'll need to know whether the weight of babel fill is worth it - 50KB minified
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router'; //we have to choose a way to handle render react-router. Browser History offers nice clean URLs
import routes from './routes';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

const store = configureStore();
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
// what the provider component is essentially doing is wrapping our entire application so that it can be connected to our redux store
// this is what our application entry point looks like when we have finally set up our application end point
